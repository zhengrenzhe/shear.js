function createFrag(htmlString: string) {
    return document.createRange().createContextualFragment(htmlString);
}

function shear(targetNode: Element, lineClamp = 2, afterHTML: string = null) {
    if (!targetNode.childNodes.length)
        return {
            isCuted: false,
            fullHTML: "",
            cutedHTML: "",
            cutedWithAfterHTML: "",
        };

    const selection = window.getSelection();
    const fullHTML = targetNode.innerHTML;
    const fullHeight = targetNode.getBoundingClientRect().height;

    // 把选区折叠到目标节点起始处
    selection.collapse(targetNode, 0);

    // 选N行
    for (let i = 0; i < lineClamp; i++) {
        (selection as any).modify("extend", "right", "character");
        (selection as any).modify("extend", "right", "lineboundary");
        // 如果选区终点已经超出了目标节点，说明N行的内容包含整个目标节点，
        // 就不再进行行选中
        if (!targetNode.contains(selection.focusNode)) {
            selection.selectAllChildren(targetNode);
            break;
        }
    }

    const selectedRange = selection.getRangeAt(0).cloneRange();

    // 将选区设置为未被前一步选中的内容，直接进行删除。
    selection.selectAllChildren(targetNode);
    const removeRange = selection.getRangeAt(0).cloneRange();
    removeRange.setStart(selectedRange.endContainer, selectedRange.endOffset);
    removeRange.deleteContents();
    const cutedHTML = targetNode.innerHTML;
    const isCuted = fullHTML !== cutedHTML;
    let cutedWithAfterHTML = cutedHTML;

    // 插入afterHTML
    const truncatedHeight = targetNode.getBoundingClientRect().height;
    if (truncatedHeight < fullHeight && afterHTML) {
        const frag = createFrag(afterHTML);

        // 将选区定位到目标元素结尾
        selection.selectAllChildren(targetNode);
        selection.collapseToEnd();

        // 进行一次向左再向右的选区移动，使选区移动到文本节点的末尾，
        // 否则会出现直接插入到根结点内的情况
        (selection as any).modify("extend", "left", "character");
        (selection as any).modify("extend", "right", "character");
        selection.getRangeAt(0).insertNode(frag);

        // 从选区向左删除字符，直到目标节点高度恢复到插入afterHTML前为止
        selection.collapseToStart();
        while (targetNode.getBoundingClientRect().height > truncatedHeight) {
            (selection as any).modify("extend", "left", "character");
            selection.deleteFromDocument();
        }

        cutedWithAfterHTML = targetNode.innerHTML;
    }

    selection.removeAllRanges();
    return { isCuted, fullHTML, cutedHTML, cutedWithAfterHTML };
}

export default shear;
