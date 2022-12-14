# Mathbox示例

{{< snippet Mathbox >}}

```css

canvas{
  height:100%;
}

```

```html
<script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@2.25.0/dist/editor.min.js"
    ></script>
<script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/three@0.137.0/build/three.min.js"
    ></script>
<script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/three@0.137.0/examples/js/controls/OrbitControls.js"
></script>
 <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/mathbox@latest/build/bundle/mathbox.js"
></script>

<div id="three-canvas">

</div>
```

```js
element = document.querySelector("#three-canvas");
mathbox = MathBox.mathBox({
        plugins: ["core", "controls", "cursor"],
        element: element,
        controls: {
          klass: THREE.OrbitControls,
        },
        camera: {
          fov: 45,
        },
      });
      three = mathbox.three;

      three.camera.position.set(-0.15, 0.15, 3.6);
      three.renderer.setClearColor(new THREE.Color(0xffffff), 1.0);

      colors = {
        x: new THREE.Color(0xff4136),
        y: new THREE.Color(0x2ecc40),
        z: new THREE.Color(0x0074d9),
      };

      view = mathbox
        .set({
          scale: 720,
          focus: 1,
        })
        .cartesian({
          range: [
            [-2, 2],
            [-1, 1],
            [-1, 1],
          ],
          scale: [2, 1, 1],
        });
      view.axis({
        color: colors.x,
      });
      view.axis({
        axis: 2, // "y" also works
        color: colors.y,
      });
      view.axis({
        axis: 3,
        color: colors.z,
      });

      mathbox
        .select("axis")
        .set("end", true)
        .set("width", 5)
        .bind("depth", function (t) {
          return 0.5 + 0.5 * Math.sin(t * 0.5);
        });

      view.array({
        id: "colors",
        live: false,
        data: [colors.x, colors.y, colors.z].map(function (color) {
          return [color.r, color.g, color.b, 1];
        }),
      });

      view
        .array({
          data: [
            [2, 0, 0],
            [0, 1.11, 0],
            [0, 0, 1],
          ],
          channels: 3, // necessary
          live: false,
        })
        .text({
          data: ["x", "y", "z"],
        })
        .label({
          color: 0xffffff,
          colors: "#colors",
        });
```

{{< /snippet >}}

