/**
 * Copyright (c) 2017 zhengrenzhe
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getTextNodes } from "./utils";

function getPos(targetNode: Node, lineClamp: number) {
    const range = document.createRange();
    const texts = getTextNodes(targetNode);
    let lastHeight: number = null;
    let changeTimes = 0;
    range.setStart(texts[0], 0);
    (() => {
        for (let i = 0; i < texts.length; i++) {
            for (let j = 0; j < texts[i].length; j++) {
                // 依次将每一个text添加到range中，然后计算range高度
                // 当range高度发生变化后算作一行结束
                range.setEnd(texts[i], j);
                const height = range.getBoundingClientRect().height;
                if (lastHeight === null) lastHeight = height;
                if (height !== lastHeight) {
                    changeTimes++;
                    lastHeight = height;
                }
                // 当换行次数大于预定行数时，返回当前位置
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
