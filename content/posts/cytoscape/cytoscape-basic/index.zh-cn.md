---
title: "Cytoscape 基础"
date: 2023-03-29T01:40:33+08:00
draft: true
tags: ["Cytoscape", "Graph"]
categories: ["Cytoscape"]
resources:
  - name: "featured-image"
    src: "banner.jpeg"
---

{{<snippet 示例>}}

```css
#cy {
  width: 100%;
  height: 300px;
  display: block;
}
```

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.23.0/cytoscape.min.js"></script>

<div id="cy"></div>
```

```js
var cy = cytoscape({
  container: document.getElementById("cy"), // container to render in

  elements: [
    // list of graph elements to start with
    {
      // node a
      data: { id: "a" },
    },
    {
      // node b
      data: { id: "b" },
    },
    {
      // edge ab
      data: { id: "ab", source: "a", target: "b" },
    },
  ],

  style: [
    // the stylesheet for the graph
    {
      selector: "node",
      style: {
        "background-color": "#666",
        label: "data(id)",
      },
    },

    {
      selector: "edge",
      style: {
        width: 3,
        "line-color": "#ccc",
        "target-arrow-color": "#ccc",
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
      },
    },
  ],

  layout: {
    name: "grid",
    rows: 1,
  },
});

var newNode = {
  data: { id: "c" },
};

// add the new node to the graph
cy.add(newNode);
```

{{</snippet>}}
