function createFrag(htmlString: string) {
    return new Range().createContextualFragment(htmlString);
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
    const cutedHTML = targetNode.innerHTML;
    const isCuted = fullHTML !== cutedHTML;
    let cutedWithAfterHTML = cutedHTML;

    // detect whether show afterHTML
    const truncatedHeight = targetNode.getBoundingClientRect().height;
    if (truncatedHeight < fullHeight && afterHTML) {
        const frag = createFrag(afterHTML);

        // replace last character as after html
        selection.selectAllChildren(targetNode);
        selection.collapseToEnd();
        (selection as any).modify("extend", "left", "character");
        selection.deleteFromDocument();
        selection.getRangeAt(0).insertNode(frag);

        // restore height
        selection.collapseToStart();
        while (targetNode.getBoundingClientRect().height > truncatedHeight) {
            (selection as any).modify("extend", "left", "character");
            selection.deleteFromDocument();
        }
        cutedWithAfterHTML = targetNode.innerHTML;
    }

    return { isCuted, fullHTML, cutedHTML, cutedWithAfterHTML };
}

export default shear;
