# snippet使用


{{< snippet 示例 >}}

```css
p {
  color: red;
}
button {
  background-color: pink;
}
```

```html
<script src="https://cdn.jsdelivr.net/npm/three@0.137.0/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.137.0/examples/js/controls/OrbitControls.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mathbox@latest/build/bundle/mathbox.js"></script>
<p> Some text </p>
<button onclick="getTime()">What time is it??</button>
<p id="demo"></p>
```

```js

function getTime() {
	
  document.getElementById('demo').innerHTML = THREE.REVISION;
}
```
{{< /snippet >}}
