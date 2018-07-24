function travelTextNode(root: Node, list: Node[]) {
    if (root.nodeType === Node.TEXT_NODE) list.push(root);
    [].slice.call(root.childNodes).forEach(n => travelTextNode(n, list));
}

// 返回目标节点内的所有子文本节点
function getTextNodes(targetNode: Node) {
    const textNodeList: Text[] = [];
    travelTextNode(targetNode, textNodeList);
    return textNodeList;
}
