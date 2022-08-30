---
title: "ThreeJS示例"
date: 2022-08-26T22:44:23+08:00
draft: false
tags: ["Threejs","WebGL"]
categories: ["Threejs"]
---

{{< snippet Threejs >}}

```css

canvas{
	height:100%;
}

```

```html
<script src="https://cdn.jsdelivr.net/npm/three@0.137.0/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.137.0/examples/js/controls/OrbitControls.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mathbox@latest/build/bundle/mathbox.js"></script>
<script src="https://d3js.org/d3.v6.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">



<div id="three-canvas">

</div>
```

```js


var url = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
 var data = fetch(url+"flare.json").then(d=>d.json()).then(d=>{
    console.log(d)
}) 

var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
let width = d3.select("#three-canvas").node().getBoundingClientRect().width 
renderer.setSize(width,400);

// Append Renderer to DOM
let canvas = document.getElementById("three-canvas")
canvas.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
var cube = new THREE.Mesh( geometry, material );

// Add cube to Scene
scene.add( cube );

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

render();

```
{{< /snippet >}}