function createNode(htmlString: string) {
    const div = document.createElement("div");
    div.appendChild(new Range().createContextualFragment(htmlString));
    return div.firstChild;
}

function calcNodeRect(targetNode: Element, fragment: Node) {
    const div = document.createElement("DIV");
    div.appendChild(fragment);
    div.style.width = `${targetNode.clientWidth}px`;
    div.style.position = "absolute";
    div.style.top = "-9999px";
    div.style.left = "-9999px";
    targetNode.appendChild(div);
    const rect = div.firstElementChild.getBoundingClientRect();
    targetNode.removeChild(div);
    return rect;
}

function shear(targetNode: Element, lineClamp = 2, afterHTML = null) {
    if (!targetNode.childNodes.length) return {};

    const selection = window.getSelection();
    const fullHTML = targetNode.innerHTML;
    const fullHeight = targetNode.getBoundingClientRect().height;

    // collapse to first element start
    selection.collapse(targetNode.childNodes[0], 0);

    // select N lines
    for (let i = 0; i < lineClamp; i++) {
        (selection as any).modify("extend", "right", "character");
        (selection as any).modify("extend", "right", "lineboundary");
        if (!targetNode.contains(selection.focusNode)) {
            selection.selectAllChildren(targetNode);
            break;
        }
    }

    // extract selection as target node's content
    const extractedNode = selection.getRangeAt(0).cloneContents();
    targetNode.innerHTML = "";
    targetNode.appendChild(extractedNode);

    // detect whether show afterHTML
    if (targetNode.getBoundingClientRect().height < fullHeight && afterHTML) {
        const afterNode = createNode(afterHTML);
        const afterHTMLRect = calcNodeRect(targetNode, afterNode);
        selection.selectAllChildren(targetNode);
        selection.collapseToEnd();
        let i = 0;
        while (i++ < 100) {
            (selection as any).modify("extend", "left", "character");
            const rangeRact = selection.getRangeAt(0).getBoundingClientRect();
            if (rangeRact.width >= afterHTMLRect.width) break;
        }
        selection.deleteFromDocument();
        selection.collapseToStart();
        selection.getRangeAt(0).insertNode(afterNode);
        selection.collapseToStart();
    }

    return { fullHTML };
}

export default shear;
