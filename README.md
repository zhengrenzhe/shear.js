<h1>shear.js</h1>

<p>
<a href="https://www.npmjs.com/package/shear.js">
<img src="https://badge.fury.io/js/shear.js.svg" alt="npm" />
</a>
</p>

**shear.js** is a zero dependency javascript plugin, It uses [Selection API](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection) to truncate multiple lines of text based on the actual visual content, and return the original and truncated content.

## Features

-   **the target element need not be set as a block level element**
-   **truncate across dom nodes within the target element, keep the original dom node within the target element**
-   **insert the html string at the end of the truncation**
-   zero dependency
-   very lightweight (2.2kb)

## Browser Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari
| :---: | :---: | :---: | :---: | :---: |
| not support | 16+ | 16+ | 15+ | 6+ |

Unfortunately, because IE/Edge does not support the relevant API, shear.js not support IE/Edge.

## Install

yarn

```
yarn add shear.js
```

## Usage

```
import shear from "shear.js";
```

display three lines

```
shear(document.getElementById('target'), 3);
```

display three lines, add html string at the end of the DOM

```
shear(document.getElementById('target'),  3, '<span>...(More)</span>');
```

## Example

[Codepen](https://codepen.io/droiz/full/YYWBBw)