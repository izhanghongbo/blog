# Lodash使用


{{<snippet Lodash使用 200 >}}

```css
body{
	color:gray;
}

```

```html

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>

<div id="result"></div>

```

```js
//  _.add(6, 4);


resultPanel = document.querySelector("#result")

function log(message){
const node = document.createElement("label");
node.innerHTML = message;
resultPanel.appendChild(node)

const br = document.createElement("br");
resultPanel.appendChild(br)
}

var a = _.add(4,5)
log("_.add(4,5) -> "+a)

var object = { 'a': 1, 'b': 2 };
 
a= _.isMatch(object, { 'b': 2 });
log("isMatch =>"+a)



```

{{</snippet>}}
