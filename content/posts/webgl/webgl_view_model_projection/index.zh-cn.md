---
title: "WebGL 模型 视图 投影"
date: 2022-08-21T19:06:20+08:00
draft: false
tags: ["WebGL"]
categories: ["WebGL"]
---

<script>
window.MDN_URL = window.location.href + "/MDN.json"
</script>

{{<snippet WebGL >}}

```html
<script>

var newScript = document.createElement("script");
newScript.src = window.parent.MDN_URL;
document.head.appendChild(newScript);

</script>
<canvas id="canvas"></canvas>


```

{{</snippet>}}



{{<MDN>}}

# 齐次坐标系

<canvas id="canvas"></canvas>

<br>



<script id="vertex-shader" type="x-shader/x-vertex">
    // The individual position vertex
    attribute vec4 position;

    void main() {
      
      // the gl_Position is the final position in clip space after the vertex shader modifies it
      gl_Position = position;
    }
</script>

  <!--
    The fragment shader determines the color of the final pixel by setting gl_FragColor.
    The range of values is from 0.0 to 1.0.
  -->
  <script id="fragment-shader" type="x-shader/x-fragment">
    precision mediump float;
    uniform vec4 color;
    
    void main() {
      gl_FragColor = color;
    }
  </script>

<script>

var w  = 1.0

function WebGLBox() {

  // 设置 canvas 和 WebGL 上下文
  this.canvas = document.getElementById('canvas');
  let width = d3.select("#content").node().getBoundingClientRect().width
  this.canvas.width = 400;
  this.canvas.height = 400;
  this.gl = MDN.createContext(canvas);

  var gl = this.gl;

  // 设置一个 WebGL 程序，任何 MDN 对象相关的部分在本文之外定义
  this.webglProgram = MDN.createWebGLProgramFromIds(gl, 'vertex-shader', 'fragment-shader');
  gl.useProgram(this.webglProgram);

  // 保存 attribute 和 uniform 位置
  this.positionLocation = gl.getAttribLocation(this.webglProgram, 'position');
  this.colorLocation = gl.getUniformLocation(this.webglProgram, 'color');

  // 告诉 WebGL 在绘制时测试深度，所以如果一个正方形后面有另一个正方形
  // 另一个正方形不会被绘制
  gl.enable(gl.DEPTH_TEST);

}

WebGLBox.prototype.draw = function(settings) {

  // 创建一下 attribute 数据; 这些是最终绘制到屏幕上的三角形
  // 有两个形成一个正方形

 var data = new Float32Array([

  //Triangle 1
  settings.left,  settings.bottom, settings.depth, settings.w,
  settings.right, settings.bottom, settings.depth, settings.w,
  settings.left,  settings.top,    settings.depth, settings.w,

  //Triangle 2
  settings.left,  settings.top,    settings.depth, settings.w,
  settings.right, settings.bottom, settings.depth, settings.w,
  settings.right, settings.top,    settings.depth, settings.w
 ]);

  // 使用 WebGL 将其绘制到屏幕上

  // 性能要点：为每个绘制创建新的缓冲器很慢
  // 这个方法仅用于说明

  var gl = this.gl;

  // 创建一个缓冲区并绑定数据
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

  // 设置指向 attribute 数据的指针（三角形）
  gl.enableVertexAttribArray(this.positionLocation);
  gl.vertexAttribPointer(this.positionLocation, 4, gl.FLOAT, false, 0, 0);

  // 设置将在所有三角形之间共享的 color uniform
  gl.uniform4fv(this.colorLocation, settings.color);

  // 在屏幕上绘制该三角形
  gl.drawArrays(gl.TRIANGLES, 0, 6);
}

var box = new WebGLBox();
box.draw({

  top    : 0.5,             // x
  bottom : -0.5,            // x
  left   : -0.5,            // y
  right  : 0.5,             // y
  w      : w,             // w - 放大这个盒子

  depth  : 0,               // z
  color  : [1, 0.4, 0.4, 1] // red
});

box.draw({

  top    : 0.9,             // x
  bottom : 0,               // x
  left   : -0.9,            // y
  right  : 0.9,             // y
  w      : w,             // w - 放大这个盒子

  depth  : 0.5,             // z
  color  : [0.4, 1, 0.4, 1] // green
});

box.draw({

  top    : 1,               // x
  bottom : -1,              // x
  left   : -1,              // y
  right  : 1,               // y
  w      : w,             // w - 放大这个盒子

  depth  : 0.5,            // z
  color  : [0.4, 0.4, 1, 1] // blue
});

</script>

## 模型转换

<canvas id="canvas-cube"></canvas>

<script id="vertex-shader-cube" type="x-shader/x-vertex">
    // Each point has a position and color
    attribute vec3 position;
    attribute vec4 color;
    
    // The transformation matrix
    uniform mat4 model;
    uniform mat4 projection;

    // Pass the color attribute down to the fragment shader
    varying vec4 vColor;

    void main() {
      
      //Pass the color down to the fragment shader
      vColor = color;
      
      // Multiply the 
      gl_Position = projection * model * vec4(position, 1.0);
    }
</script>

  <!-- The fragment shader determines the color of the final pixel by setting gl_FragColor -->
<script id="fragment-shader-cube" type="x-shader/x-fragment">
    precision mediump float;
    varying vec4 vColor;
    
    void main() {
      gl_FragColor = vColor;
      // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
</script>

<script>

function CubeDemo () {
  
  // Prep the canvas
  this.canvas = document.getElementById("canvas-cube");
  this.canvas.width = 400
  this.canvas.height = 400;
  
  // Grab a context
  this.gl = MDN.createContext(this.canvas);

  this.transforms = {}; // All of the matrix transforms
  this.locations = {}; //All of the shader locations
  
  // Get the rest going
  this.buffers = MDN.createBuffersForCube(this.gl, MDN.createCubeData() );
  this.webglProgram = this.setupProgram();
  
}

CubeDemo.prototype.setupProgram = function() {
  
  var gl = this.gl;
    
  // Setup a WebGL program
  var webglProgram = MDN.createWebGLProgramFromIds(gl, "vertex-shader-cube", "fragment-shader-cube");
  gl.useProgram(webglProgram);
  
  // Save the attribute and uniform locations
  this.locations.model = gl.getUniformLocation(webglProgram, "model");
  this.locations.projection = gl.getUniformLocation(webglProgram, "projection");
  this.locations.position = gl.getAttribLocation(webglProgram, "position");
  this.locations.color = gl.getAttribLocation(webglProgram, "color");
  
  // Tell WebGL to test the depth when drawing
  gl.enable(gl.DEPTH_TEST);
  
  return webglProgram;
};

CubeDemo.prototype.computePerspectiveMatrix = function() {
  
  var fieldOfViewInRadians = Math.PI * 0.1;
  var aspectRatio = window.innerWidth / window.innerHeight;
  var nearClippingPlaneDistance = 1;
  var farClippingPlaneDistance = 50;
  
  this.transforms.projection = MDN.perspectiveMatrix(
    fieldOfViewInRadians,
    aspectRatio,
    nearClippingPlaneDistance,
    farClippingPlaneDistance
  );
};

CubeDemo.prototype.computeModelMatrix = function( now ) {

  //Scale up
  var scale = MDN.scaleMatrix(5, 5, 5);
  
  // Rotate a slight tilt
  var rotateX = MDN.rotateXMatrix( now * 0.0003 );
  
  // Rotate according to time
  var rotateY = MDN.rotateYMatrix( now * 0.0005 );

  // Move slightly down
  var position = MDN.translateMatrix(0, 0, -20);
  
  // Multiply together, make sure and read them in opposite order
  this.transforms.model = MDN.multiplyArrayOfMatrices([
    position, // step 4
    rotateY,  // step 3
    rotateX,  // step 2
    scale     // step 1
  ]);
  
  
  // Performance caveat: in real production code it's best not to create
  // new arrays and objects in a loop. This example chooses code clarity
  // over performance.
};

CubeDemo.prototype.draw = function() {
  
  var gl = this.gl;
  var now = Date.now();
  
  // Compute our matrices
  this.computeModelMatrix( now );
  this.computePerspectiveMatrix( 0.5 );
  
  // Update the data going to the GPU
  this.updateAttributesAndUniforms();
  
  // Perform the actual draw
  gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
  
  // Run the draw as a loop
  requestAnimationFrame( this.draw.bind(this) );
};

CubeDemo.prototype.updateAttributesAndUniforms = function() {

  var gl = this.gl;
  
  // Setup the color uniform that will be shared across all triangles
  gl.uniformMatrix4fv(this.locations.model, false, new Float32Array(this.transforms.model));
  gl.uniformMatrix4fv(this.locations.projection, false, new Float32Array(this.transforms.projection));
  
  // Set the positions attribute
  gl.enableVertexAttribArray(this.locations.position);
  gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.positions);
  gl.vertexAttribPointer(this.locations.position, 3, gl.FLOAT, false, 0, 0);
  
  // Set the colors attribute
  gl.enableVertexAttribArray(this.locations.color);
  gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.colors);
  gl.vertexAttribPointer(this.locations.color, 4, gl.FLOAT, false, 0, 0);
  
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.elements );
  
};

var cube = new CubeDemo();

cube.draw();

</script>	



[原文](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/WebGL_model_view_projection)
