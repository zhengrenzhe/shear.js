import getPos, { getTextNodes } from "./edge";

const isMicrosoft = !("modify" in window.getSelection());

function createFrag(htmlString: string) {
    const div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return div.firstChild;
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

    let divideCaret: Range;

    if (isMicrosoft) {
        divideCaret = getPos(targetNode, lineClamp);
    } else {
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
        selection.collapseToEnd();
        divideCaret = selection.getRangeAt(0).cloneRange();
    }

    // 将选区设置为未被前一步选中的内容，直接进行删除。
    selection.selectAllChildren(targetNode);
    divideCaret.setEnd(
        selection.getRangeAt(0).endContainer,
        selection.getRangeAt(0).endOffset,
    );
    selection.removeAllRanges();
    divideCaret.cloneRange().deleteContents();

    const cutedHTML = targetNode.innerHTML;
    const isCuted = fullHTML !== cutedHTML;
    let cutedWithAfterHTML = cutedHTML;

    // 插入afterHTML
    const truncatedHeight = targetNode.getBoundingClientRect().height;
    if (truncatedHeight < fullHeight && afterHTML) {
        const frag = createFrag(afterHTML);

        // 将选区定位到目标元素结尾
        let texts = getTextNodes(targetNode);
        const endText = texts[texts.length - 1];
        const endOffset = endText.length;
        const insertCaret = document.createRange();
        insertCaret.setStart(endText, endOffset);
        insertCaret.setEnd(endText, endOffset);

        // 插入html fragment
        insertCaret.insertNode(frag);

        // 从插入处向左删除字符，直到目标节点高度恢复到插入afterHTML前为止
        (() => {
            for (let i = texts.length - 1; i >= 0; i--) {
                for (let j = texts[i].length - 1; j >= 0; j--) {
                    const curHeight = targetNode.getBoundingClientRect().height;
                    if (curHeight <= truncatedHeight) return;

                    const delRange = document.createRange();
                    delRange.setStart(texts[i], j);
                    delRange.setEnd(texts[i], j + 1);
                    delRange.deleteContents();
                }
            }
        })();
        cutedWithAfterHTML = targetNode.innerHTML;
    }

    selection.removeAllRanges();
    return { isCuted, fullHTML, cutedHTML, cutedWithAfterHTML };
}

export default shear;
