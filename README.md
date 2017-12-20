<h1 align="center">shear.js</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/shear.js">
        <img src="https://badge.fury.io/js/shear.js.svg" alt="npm" />
    </a>
</p>

**shear.js** is a zero dependency javascript plugin, It uses [Selection API](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection) to truncate multiple lines of text based on the actual visual content, and return the original and truncated content. Because the principle is different from the same kind of tools in the past, it has the following features:

- **the target element need not be set as a block level element**
- **truncate across dom nodes within the target element, keep the original dom node within the target element**
- insert the html string at the end of the truncation
- zero dependency
- very lightweight(1.4kb)

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

![](https://raw.githubusercontent.com/zhengrenzhe/shear.js/master/example/imgs/p1.png)

<p>after</p>

![](https://raw.githubusercontent.com/zhengrenzhe/shear.js/master/example/imgs/p2.png)

<p>before</p>

![](https://raw.githubusercontent.com/zhengrenzhe/shear.js/master/example/imgs/p3.png)

<p>after</p>

![](https://raw.githubusercontent.com/zhengrenzhe/shear.js/master/example/imgs/p4.png)

<a href="https://codepen.io/droiz/pen/YYWBBw/">codepen.io</a>


<hr />

**shear.js** 是一个零依赖的javascript工具，它使用 [Selection API](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection) 来根据实际的可视内容截断多行文字，并返回原始与截断后的内容。由于原理与以往的同类工具不同，shear.js具有以下特性：

- **目标元素无需设置为块级元素**
- **在目标元素内进行垮dom节点截断，保留目标元素内的原始dom节点**
- 在截断的尾部插入html字符串
- 零依赖
- 轻量级（1.4kb）

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

[下载](https://raw.githubusercontent.com/zhengrenzhe/shear.js/master/dist/shear-umd.js) shear.js到你的项目中，或使用ES6模块
```
import shear from 'shear.js';
```

显示3行，剩余的隐藏
```
shear(document.getElementById('target'), 3);
```

显示3行，末尾添加html字符串
```
shear(document.getElementById('target'),  3, '<span>（展开）</span>');
```

## 示例

<p>截断前</p>

![](https://raw.githubusercontent.com/zhengrenzhe/shear.js/master/example/imgs/p1.png)

<p>截断后</p>

![](https://raw.githubusercontent.com/zhengrenzhe/shear.js/master/example/imgs/p2.png)

<p>截断前</p>

![](https://raw.githubusercontent.com/zhengrenzhe/shear.js/master/example/imgs/p3.png)

<p>截断后</p>

![](https://raw.githubusercontent.com/zhengrenzhe/shear.js/master/example/imgs/p4.png)

<a href="https://codepen.io/droiz/pen/YYWBBw/">codepen.io</a>
