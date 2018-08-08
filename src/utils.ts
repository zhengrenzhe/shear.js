/**
 * Copyright (c) 2017 zhengrenzhe
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const isMS = !("modify" in window.getSelection());

export function toArr<T>(iterable: ArrayLike<T>): T[] {
    return [].slice.call(iterable);
}

export function createFragment(htmlString: string) {
    const wrapper = document.createElement("DIV");
    wrapper.innerHTML = htmlString;

    const fragment = document.createDocumentFragment();
    toArr(wrapper.childNodes).forEach(n => fragment.appendChild(n));

    return fragment;
}

export function getTextNodes(root: Node) {
    let list: Text[] = [];
    if (root.nodeType === Node.TEXT_NODE) list.push(root as Text);
    toArr(root.childNodes).map(n => {
        list = list.concat(getTextNodes(n));
    });
    return list;
}
