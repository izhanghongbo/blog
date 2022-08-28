---
title: "hugo中使用react"
date: 2022-08-21T19:06:20+08:00
draft: false
---

<style>
  #root{

  }

  #root button{
    color:red
  }
</style>


{{< raw-html >}}
<div id="root"></div>

<div id = "svgcontainer">
      </div>
      <script language = "javascript">
         var width = 300;
         var height = 300;
         var svg = d3.select("#svgcontainer")
            .append("svg")
            .attr("width", width)
            .attr("height", height);
         svg.append("line")
            .attr("x1", 100)
            .attr("y1", 100)
            .attr("x2", 200)
            .attr("y2", 200)
            .style("stroke", "rgb(255,0,0)")
            .style("stroke-width", 2);
   </script>

{{</ raw-html >}}


## 在文章中嵌入下面下代码

```html
< raw-html >
<div id="root"></div>
</ raw-html >

```

## 新建react代码
在`static/js/posts/`目目录下创建以文章title为名的文件
