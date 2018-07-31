function getTextNodes(root: Node) {
    let list: Text[] = [];
    if (root.nodeType === Node.TEXT_NODE) list.push(root as Text);
    [].slice.call(root.childNodes).map(n => {
        list = list.concat(getTextNodes(n));
    });
    return list;
}

function getPos(targetNode: Node, lineClamp: number) {
    const range = document.createRange();
    const texts = getTextNodes(targetNode);
    let lastHeight: number = null;
    let changeTimes = 0;
    range.setStart(texts[0], 0);
    (() => {
        for (let i = 0; i < texts.length; i++) {
            for (let j = 0; j < texts[i].length; j++) {
                range.setEnd(texts[i], j);
                const height = range.getBoundingClientRect().height;
                if (height !== lastHeight) {
                    changeTimes++;
                    lastHeight = height;
                }
                if (changeTimes > lineClamp) {
                    range.setStart(texts[i], j);
                    range.setEnd(texts[i], j);
                    return;
                }
            }
        }
    })();
    return range;
}

export default getPos;
export { getTextNodes };
