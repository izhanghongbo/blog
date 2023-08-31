---
title: "Svg使用"
date: 2023-03-30T20:36:49+08:00
draft: false
tags: ["SVG"]
categories: []
resources:
- name: "featured-image"
  src: "banner.jpeg"
---


{{< snippet 带箭头的线条 200 >}}

```html
<svg viewBox="0 0 100 100" width="200">
  <path d="M10,50 L90,50" stroke="red" stroke-width="2" marker-end="url(#arrowhead)" />
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="red" />
    </marker>
  </defs>
</svg>

```

{{</ snippet>}}



{{< snippet 弧线 200 >}}

```html
<svg viewBox="0 0 100 100" width="200">
  <path d="M 10,50 A 40,25 0 1 1 90,50" stroke="black" stroke-width="2" fill="none" />
</svg>


```

{{</ snippet>}}

A命令通常用于绘制圆弧，其参数包括：

```
A rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y
```

其中：

- `rx`和`ry`是椭圆的长轴和短轴的长度，表示圆弧的大小。例如，在上文的示例中，`rx`为40、`ry`为25。
- `x-axis-rotation`表示椭圆相对于水平轴旋转的角度。在上文的示例中，我们将其设置为0度，即不旋转。
- `large-arc-flag`和`sweep-flag`控制绘制弧线的方向。`large-arc-flag`取值为0或1，用于选择绘制小于或者大于180度的圆弧。`sweep-flag`取值为0或1，用于选择绘制从起点到终点的圆弧还是从终点到起点的圆弧。在上文的示例中，我们将`large-arc-flag`设置为1，表示绘制大于180度的圆弧；将`sweep-flag`设置为1，表示绘制从起点到终点的圆弧。
- `x`和`y`表示弧线的终点坐标。在上文的示例中，我们将其设置为`(90, 50)`。

需要注意的是，由于A命令的参数较为复杂，通常使用绘图工具来生成绘制圆弧的代码。
