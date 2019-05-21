# ScratchCanvas

一个基于canvas实现“刮刮卡”功能的js库。

## 安装

使用npm:

```bash
$ npm install scratch-canvas
```

直接引入&lt;script&gt;:

```html
<script src="//cdn.jsdelivr.net/npm/scratch-canvas@0.0.1/dist/scratch-canvas.min.js"></script>
```

## 示例

[查看demo页面](https://vilfredli.github.io/scratch-canvas)

## 快速开始

首先需要在html中放置一个容器：

```html
<div class="container"></div>
```

在js中引入ScratchCanvas并将容器元素传递给构造函数后调用实例的init方法即可：

```js
import ScratchCanvas from 'scratch-canvas'

const containerElm = document.querySelector('.container')
const scratchCanvas = new ScratchCanvas(containerElm)
scratchCanvas.init()
```

## 配置

在创建实例时通过向第二个参数传入一个对象进行配置：

```js
const scratchCanvas = new ScratchCanvas(elm, {/* 配置项... */})
scratchCanvas.init()
```

可用配置项：

选项名 | 类型 | 默认值 | 可选值 | 描述
:-: | :-: | :-: | - | -
bg | String | null | 有效的图片url | 若bg的值为有效的图片url，则会在蒙层下自动生成背景
mask | String | #ccc | 有效的颜色字符串或图片url | 蒙层的填充内容
pureMask | Boolean | true | - | 是否为纯色蒙层，当使用图片作为蒙层时，必须显式地将该属性设置为false
width | Number | null | 正整数 | 生成的canvas标签的width属性值，不设置该值时canvas的width将会是容器元素的实际宽度
height | Number | null | 正整数 | 生成的canvas标签的height属性值，不设置该值时canvas的height将会是容器元素的实际高度
brushSize | Number | 25 | 正整数 | 笔刷(半径)大小
brushPress | Number | 1 | 0~1之间任意数字 | 笔刷压强
onCreated | Function | null | - | 实例初始化完毕被插入到dom节点后的回调函数
onScratch | Function | null | - | "刮除"蒙层时的回调函数，接收一个参数，该参数值为已"刮除"面积与总面积的百分比(对于一个像素掉，"已刮除"的定义是该像素点透明度小于0.25，而不是该像素点必须被mousedown/mousemove等事件处理过)
throttleWait | Number | 0 | 正数 | 节流函数的间隔时间参数，如果在使用过程中发现明显卡顿(刮除不连续属于正常现象)可以尝试调高该参数值

## 实例API

API名 | 描述
-|-
init() | 初始化并将生成的canvas插入到创建实例时传入的容器元素节点中，插入后会触发回调函数onCreated

## License

[MIT](./LICENSE)
