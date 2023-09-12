---
title: "WebGL 模板"
date: 2023-09-01T10:22:46+08:00
draft: fase
tags: ["WebGL"]
categories: ["WebGL"]
resources:
- name: "featured-image"
  src: "banner.jpeg"
---

{{< snippet 一个简单的VertexShader >}}

```css
body {
  margin: 0;
}
canvas {
  width: 100vw;
  height: 100vh;
  display: block;
}

```

```html
<canvas id="canvas"></canvas>
<script src="https://webglfundamentals.org/webgl/resources/webgl-utils.js"></script>

```

```js

var vertexShader = `
  attribute vec4 a_Position;
  void main(){
    gl_Position = a_Position;
    gl_PointSize = 100.0;
  }

`

var fragmentShader = `
  void main(){
    gl_FragColor = vec4(1.0,0.5,1.0,1.0);

  }
`

function main(){
  var canvas = document.getElementById("canvas")
  var gl = canvas.getContext("webgl", {
  antialias: false,
  depth: false,
});
  const program = webglUtils.createProgramFromSources(gl, [vertexShader, fragmentShader]);
  var a_Position = gl.getAttribLocation(program,"a_Position");
  gl.vertexAttrib3f(a_Position,0.5,0,0);
  if(a_Position < 0){
    console.log("Can't find position")
  }

  gl.useProgram(program);
  gl.clearColor(0,0,0,1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.drawArrays(gl.POINTS,0,1);
  console.log("Hello world")
}

main()

```


{{</ snippet>}}

