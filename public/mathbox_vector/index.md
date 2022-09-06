# Mathbox绘制线条

{{< snippet Mathbox >}}

```css

canvas{
  height:100%;
}

```

```html
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

  //绘制网格
  function drawGrid(view){
        view
        .grid({
          axes: "xy",
          divideX: 20,
          divideY: 20,
        })
        .grid({
          axes: "xz",
          divideX: 20,
          divideY: 20,
        })
        .grid({
          axes: "yz",
          divideX: 20,
          divideY: 20,
        });

  }

```

```js

  function drawLine(view){

      var data = [
        [0, 0,0],
        [0.5, 0,0.5],
        [0.5, 1,0.5],
        [1, 1,1],
      ];
      view.array({
        data: data,
        channels: 3,
      });


   view
        .line({
          color: 0x3090ff,
          width: 20,
          join: "miter",
        });


  }

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
            [0, 1],
            [0, 1],
            [0, 1],
          ],
          scale: [1, 1, 1],
        });

      //绘制坐标轴  
      view.axis({
         axis: "x",
        color: colors.x,
      });
      view.axis({
        axis: "y", // "y" also works
        color: colors.y,
      });
      view.axis({
        axis: "z",
        color: colors.z,
      });

      mathbox
        .select("axis")
        .set("end", true)
        .set("width", 5)
        .bind("depth", function (t) {
          return 0.5 + 0.5 * Math.sin(t * 0.5);
        });

      drawGrid(view)

      drawLine(view)

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
            [1, 0, 0],
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

