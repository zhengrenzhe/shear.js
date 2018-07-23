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

## Support

-   Chrome 23+
-   Firefox 22+
-   Opera 15+
-   Yandex 14.12
-   Safari 6.2+
-   iOS 7+ safari

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| not support                                                                                                                                                                                                     | 22+                                                                                                                                                                                                               | 23+                                                                                                                                                                                                           | 6.2+                                                                                                                                                                                                          | 15+                                                                                                                                                                                                       |

Unfortunately, because IE/Edge does not support the relevant API, shear.js not support IE/Edge.

## Install

yarn

```
yarn add shear.js
```

npm

```
npm install shear.js
```

## Usage

[download](https://raw.githubusercontent.com/zhengrenzhe/shear.js/master/dist/shear-umd.js) shear.js in your project, or use ES6 module:

```
import shear from 'shear.js';
```

display 3 lines, remaining hidden

```
shear(document.getElementById('target'), 3);
```

display 3 lines, add html string at the end

```
shear(document.getElementById('target'),  3, '<span>（展开）</span>');
```

## Example

<p>before</p>

![](https://dn-droiz.qbox.me/p11.png)

<p>after</p>

![](https://dn-droiz.qbox.me/p2.png)

<p>before</p>

![](https://dn-droiz.qbox.me/p3.png)

<p>after</p>

![](https://dn-droiz.qbox.me/p4.png)

<a href="https://codepen.io/droiz/pen/YYWBBw/">codepen.io</a>

<hr />

**shear.js** 是一个零依赖的 javascript 工具，它使用 [Selection API](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection) 来根据实际的可视内容截断多行文字，并返回原始与截断后的内容。由于原理与以往的同类工具不同，shear.js 具有以下特性：

-   **目标元素无需设置为块级元素**
-   **在目标元素内进行垮 dom 节点截断，保留目标元素内的原始 dom 节点**
-   在截断的尾部插入 html 字符串
-   零依赖
-   轻量级（UMD: 1.3kb, ES Module 1.1kb）

## 支持

-   Chrome 23+
-   Firefox 22+
-   Opera 15+
-   Yandex 14.12
-   Safari 6.2+
-   iOS 7+ safari

不幸的是，由于 IE/Edge 不支持相关 API，shear.js 目前不支持 IE/Edge。

## 安装

yarn

```
yarn add shear.js
```

npm

```
npm install shear.js
```

## 使用

[下载](https://raw.githubusercontent.com/zhengrenzhe/shear.js/master/dist/shear-umd.js) shear.js 到你的项目中，或使用 ES6 模块

```
import shear from 'shear.js';
```

显示 3 行，剩余的隐藏

```
shear(document.getElementById('target'), 3);
```

显示 3 行，末尾添加 html 字符串

```
shear(document.getElementById('target'),  3, '<span>（展开）</span>');
```

## 示例

<p>截断前</p>

![](https://dn-droiz.qbox.me/p11.png)

<p>截断后</p>

![](https://dn-droiz.qbox.me/p2.png)

<p>截断前</p>

![](https://dn-droiz.qbox.me/p3.png)

<p>截断后</p>

![](https://dn-droiz.qbox.me/p4.png)

<a href="https://codepen.io/droiz/pen/YYWBBw/">codepen.io</a>
