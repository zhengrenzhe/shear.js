function createElement(content: string) {
    let wrap = document.createElement('DIV');
    wrap.innerHTML = content;
    if (!wrap.firstElementChild) throw new TypeError(`after '${content}' is an illegal html tag string.`);
    return wrap.firstElementChild;
}

export default function shear(target: Element, line_count = 0, after_html = '') {
    let sel = window.getSelection();

    let full_html = target.innerHTML
    let full_text = target.textContent;

    sel.selectAllChildren(target);
    sel.collapseToStart();

    for (let i = 0; i < line_count; i++) {
        (sel as any).modify('extend', 'right', 'character');
        (sel as any).modify('extend', 'right', 'lineboundary');
        if (!target.contains(sel.getRangeAt(0).endContainer)) {
            sel.selectAllChildren(target);
            break;
        }
    }

    let cut_node = sel.getRangeAt(0).cloneContents();
    let wrap = document.createElement('DIV');
    wrap.appendChild(cut_node);
    let cut_html = wrap.innerHTML;
    let cut_text = cut_node.textContent;

    target.innerHTML = cut_html;

    sel.selectAllChildren(target);
    sel.collapseToEnd();

    let cut_html_with_after_html = '';
    let cut_text_with_after_html = '';
    let br = createElement('<br/>');
    if (after_html !== '') {
        let insert = createElement(after_html);
        target.appendChild(br);
        target.appendChild(insert);
        let rect = insert.getBoundingClientRect();
        for (let i = 0; i < 1000; i++) {
            (sel as any).modify('extend', 'left', 'character');
            if (sel.getRangeAt(0).getBoundingClientRect().width >= rect.width) {
                sel.deleteFromDocument();
                break;
            }
        }
        target.removeChild(br);
        cut_html_with_after_html = target.innerHTML;
        cut_text_with_after_html = target.textContent;
    }

    return {
        full_html,
        full_text,
        cut_html,
        cut_text,
        cut_html_with_after_html,
        cut_text_with_after_html
    }
}
