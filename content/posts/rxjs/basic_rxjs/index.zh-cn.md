---
title: "RXJS 基础"
date: 2022-08-26T22:44:23+08:00
draft: false
tags: ["RXJS"]
categories: ["RXJS"]
---

<style>

</style>

<button>点击</button>
<div id="click-result"></div>

<script type="module">
 import {hello} from './common.js'

 let button = document.querySelector("button")
 let result = document.querySelector("#click-result")

        let click$ = Rx.Observable.fromEvent(button, 'click');
 click$.subscribe(e=>{
  const span= document.createElement("span");
  span.innerHTML = e.pageX +"<br>"

  result.appendChild(span)

 })
</script>

## fromEvent

```js
  let click$ = Rx.Observable.fromEvent(button, 'click');
  click$.subscribe(e=>{
  console.log(e)
  const span= document.createElement("span");
  span.innerHTML = e.pageX

  result.appendChild(span)

 })
```
