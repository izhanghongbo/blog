---
title: "ForceLayout示例"
date: 2022-08-26T22:44:23+08:00
draft: false
tags: ["Layout","D3", "Threejs"]
categories: ["D3"]
---

<script>
window.dataUrl = window.location.href + "flare.json"
</script>

{{<snippet 示例>}}

```css
#three-canvas{
    position:relative
}

#three-canvas button{
    position:absolute
}

```

```html
<script src="https://cdn.jsdelivr.net/npm/three@0.137.0/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.137.0/examples/js/controls/OrbitControls.js"></script>
<script src="https://d3js.org/d3.v6.min.js"></script>
<script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/d3-force-3d@3.0.3/dist/d3-force-3d.min.js"
></script>

<div id="three-canvas">

<button onclick="onRun()">运行布局</button>
</div>

</div>
```

```js

function onTick(){
    console.log(graph)
    
    let positions = pointsGeometry.attributes.position.array
    for(let i = 0;i< positions.length;i+=3){
        positions[i] = nodes[i/3].x/100
        positions[i+1] = nodes[i/3].y/100
        positions[i+2] = 0
    }
   pointsGeometry.attributes.position.needsUpdate = true

linePositions = lineGeometry.attributes.position.array
   graph.links.forEach((l,idx)=>{
    let startNode = l.source
    let endNode = l.target

    linePositions[idx *6] = startNode.x/100;
    linePositions[idx *6 +1] = startNode.y/100;
    linePositions[idx * 6+2] = 0;

    linePositions[idx *6 + 3] = endNode.x/100;
    linePositions[idx *6+ 4] = endNode.y/100;
    linePositions[idx *6+ 5] = 0;
   })
      lineGeometry.attributes.position.needsUpdate = true
}


function onRun(){
    nodes = graph.nodes
    links = graph.links
    simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody())
    .force("link", d3.forceLink(links).strength(0.05))
    // .force("center", d3.forceCenter())
    .force("tick", onTick);

    simulation.restart()
}

function lineCloud(graph){
  let points = [];
  let nodes = graph.nodes;
  let links = graph.links.forEach((link) => {
    let startNode = nodes.find((n) => n.id == link.sourceId);
    let endNode = nodes.find((n) => n.id == link.targetId);
    points.push(startNode.position);
    points.push(endNode.position);
  });
  lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: "#3498db" });
  let lines = new THREE.LineSegments(lineGeometry, material);
  return lines;
}

function pointCloud(graph)
 {
  pointsGeometry = new THREE.BufferGeometry();
  let points = [];
  graph.nodes.forEach((n) => {
    let vertex = n.position;
    points.push(vertex);
  });
  pointsGeometry.setFromPoints(points);

  // let pointsMaterial = new THREE.PointsMaterial({
  //   size: 8,
  //   sizeAttenuation: false,
  //   color: "#92F22A",
  //   map: circle_sprite_aa,
  //   transparent: true,
  //   alphaTest: 0.5
  // });

  let pointsMaterial = new THREE.ShaderMaterial({
    vertexShader: nodeVertextShader,
    fragmentShader: nodeFragmentShader,
    transparent: true,
    alphaTest: 0.1
  });

  return new THREE.Points(pointsGeometry, pointsMaterial);
}


function parseGraph(data) {
        var id = 0;
        var nodes = [];
        var links = [];

        function traval(root, children) {
            if (!children) {
                return;
            }
            let node = {
                id: id,
                property: {
                    name: root.name
                }
            };
            node.position = new THREE.Vector3(
                Math.random() * 5 * 2 - 5,
                Math.random() * 5 * 2 - 5,
                Math.random() * 5 * 2 - 5
            );
            nodes.push(node);
            let neibours = root.children
                .map((c) => {
                    id++;
                    let n = {
                        id: id,
                        name: c.name
                    };
                    n.position = new THREE.Vector3(
                        Math.random() * 5 * 2 - 5,
                        Math.random() * 5 * 2 - 5,
                        Math.random() * 5 * 2 - 5
                    );
                    return {
                        node: n,
                        children: c.children
                    };
                })
                .forEach((c) => {
                    nodes.push(c.node);
                    let link = {
                        id: node.id + "-" + c.node.id,
                        source: node,
                        target: c.node,
                        sourceId: node.id,
                        targetId: c.node.id
                    };
                    links.push(link);
                    traval(c, c.children);
                });
        }

        traval(data, data.children);
        return {
            nodes,
            links
        };
}

var url = window.parent.dataUrl 
var data = fetch(url).then(d=>d.json()).then(d=>{
	graph = parseGraph(d)
	nodeCloud = pointCloud(graph)
	edgeCloud = lineCloud(graph)

	scene.add(nodeCloud);
        scene.add(edgeCloud);
})

var nodeVertextShader = `
precision highp float;
void main() {
    vec3 finalPosition = position;
    vec4 mvPosition = modelViewMatrix * vec4( finalPosition, 1.0 );
    float vSize = 3.0 * ( 50.0 / -mvPosition.z );
    gl_PointSize = vSize;
    gl_Position = projectionMatrix * mvPosition;
} 
`

var nodeFragmentShader = `
void antiAlia(){
  // anti-aliased support
  float len = length(gl_PointCoord- vec2(0.5, 0.5));
  float delta = 0.0, alpha = 1.0;
  delta = fwidth(len);
  alpha = smoothstep(.495-delta, 0.495 + delta, len);
  vec4 bColor = vec4(0.0);
  gl_FragColor = mix(gl_FragColor, bColor, alpha);
  gl_FragColor = gl_FragColor * (1.0 - alpha);
}

void renderCircle(vec4 color){
    float r = length(gl_PointCoord- vec2(0.5, 0.5)), delta = 0.0, alpha = 1.0;
    if (r > .5) {
        discard;
    }
    gl_FragColor = color;
}
void main() {
    vec4 color = vec4(231.0/255.0, 76.0/255.0, 60.0/255.0,1.0);
    float len = length(gl_PointCoord- vec2(0.5, 0.5));
    renderCircle(color);
    antiAlia();
}
`

var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;


// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

const controls = new THREE.OrbitControls( camera, renderer.domElement );


// Configure renderer size
let width = d3.select("#three-canvas").node().getBoundingClientRect().width
let height = 400;
 
renderer.setSize(width,height);

// Append Renderer to DOM
let canvas = document.getElementById("three-canvas")
canvas.appendChild( renderer.domElement );

// Render Loop
var render = function () {
  requestAnimationFrame( render );
  controls.update()
  // Render the scene
  renderer.render(scene, camera);
};

render();



```

{{</snippet>}}
