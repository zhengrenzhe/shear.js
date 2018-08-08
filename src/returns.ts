/**
 * Copyright (c) 2017 zhengrenzhe
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function returns(
    isCuted: boolean,
    fullHTML = "",
    cutedHTML = "",
    cutedWithAfterHTML = "",
) {
    return {
        isCuted,
        fullHTML,
        cutedHTML,
        cutedWithAfterHTML,
    };
}

export { returns };
