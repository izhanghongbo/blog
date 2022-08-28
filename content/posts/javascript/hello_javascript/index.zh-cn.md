---
title: "Runtime使用"
date: 2022-08-21T19:06:20+08:00
draft: false
---

<div id="observablehq-62629335">
  <div class="observablehq-viewof-edgeColor"></div>
</div>
<script type="module">
  import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
  import define from "https://api.observablehq.com/@observablehq/hello-world.js?v=3";
  (new Runtime).module(define, name => {
    return Inspector.into("#observablehq-62629335 .observablehq-viewof-edgeColor")();
  });
</script>