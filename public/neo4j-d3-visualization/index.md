# Neo4j D3 图可视化



<script>
window.dataUrl = window.location.href + "data.json"
window.libs = window.location.href + "libs"
</script>

{{<snippet Neo4j-静态数据>}}


```css

#neo4j-d3 {
  width: 100%;
  height: 100%;
}

.neo4jd3-graph {
  border: 1px solid #ddd;
  border-radius: 5px;
}

.neo4jd3-info {
  font-size: 16px;
  padding: 10px;
  position: absolute;
}
.neo4jd3-info a {
  border: 1px solid;
  display: inline-block;
  font-size: 14px;
  line-height: 1.428571429;
  margin-left: 5px;
  margin-top: 5px;
  padding: 6px 12px;
}
.neo4jd3-info a.class {
  color: white;
}
.neo4jd3-info a.property {
  background-color: #fff;
  border-color: #ccc;
  color: #333;
}
.neo4jd3-info a.btn {
  margin-left: 5px;
  margin-top: 5px;
  opacity: 1;
}
.neo4jd3-info a.info {
  background-color: rgb(165, 171, 182);
  border: 1px solid rgb(154, 161, 172);
  color: white;
}

.node.node-highlighted .ring {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  filter: alpha(opacity=50);
  opacity: 0.5;
  stroke: #888;
  stroke-width: 12px;
}
.node .outline {
  cursor: pointer;
  fill: rgb(165, 171, 182);
  pointer-events: all;
  stroke: rgb(154, 161, 172);
  stroke-width: 2px;
}
.node .ring {
  fill: none;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  stroke: #6ac6ff;
  stroke-width: 8px;
}
.node .context-menu-item {
  cursor: pointer;
  display: none;
}
.node .context-menu-item.context-show {
  display: block;
}
.node .context-menu-item:hover {
  fill: rgb(185, 185, 185);
}

.node.selected .ring,
.node:hover .ring {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
  filter: alpha(opacity=30);
  opacity: 0.3;
}
.node.selected .ring .context-menu-item,
.node:hover .ring .context-menu-item {
  fill: rgb(185, 185, 185);
}

.relationship {
  cursor: default;
}
.relationship.relationship-highlighted .text {
  fill: rgb(255, 0, 0);
  font-size: 12px;
  font-weight: bold;
}
.relationship.relationship-highlighted .outline {
  fill: rgb(255, 0, 0);
}
.relationship line {
  stroke: #aaa;
}
.relationship .outline {
  cursor: default;
}
.relationship .overlay {
  cursor: default;
  fill: #6ac6ff;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
}
.relationship text {
  cursor: default;
  fill:gray;
}
.relationship .active_text {
  fill: rgb(253, 204, 89);
}

.relationship.selected .overlay,
.relationship:hover .overlay {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
  filter: alpha(opacity=30);
  opacity: 0.3;
}

svg {
  cursor: pointer;
}

.iconfont-kg-neo4j3d {
  font-size: 20px;
  font-weight: bold;
}

```

```html

<script src="https://d3js.org/d3.v7.min.js"></script>


<div 
    id="neo4j-d3" 
    ref="neo4j-d3" 
>
</div>

```

```js

function loadScriptSync (src) {
	// get some kind of XMLHttpRequest
	var xhrObj = new XMLHttpRequest()
	// open and send a synchronous request
	xhrObj.open('GET',src, false);
	xhrObj.send('');
	// add the returned content to a newly created script tag
	var se = document.createElement('script');
	se.type = "text/javascript";
	se.text = xhrObj.responseText;
	document.getElementsByTagName('head')[0].appendChild(se);

}

// function loadCssSync (src) {
// 	// add the returned content to a newly created script tag
// 	var se = document.createElement('link');
// 	se.type = "text/css";
// 	se.rel="stylesheet"
//          se.href = src;	
// 	document.getElementsByTagName('head')[0].appendChild(se);

// }


libs = window.parent.libs
loadScriptSync(libs+"/neo4jd3.js")



url = window.parent.dataUrl

 const neo4jData = {
            "results": [
                {
                    "columns": ["user", "entity"],
                    "data": [
                        {
                            "graph": {
                                "nodes": [
                                    {
                                        "id": "1",
                                        "labels": ["Project"],
                                        "properties": {
                                            "name": "neo4j",
                                            "title": "neo4jd3.js",
                                            "description": "Neo4j graph visualization using D3.js.",
                                            "url": "https://eisman.github.io/neo4jd3"
                                        }
                                    },
                                    {
                                        "id": "2",
                                        "labels": ["website"],
                                        "properties": {
                                            "name": "github"
                                        }
                                    },
                                    {
                                        "id": "3",
                                        "labels": ["website"],
                                        "properties": {
                                            "name": "Google",
                                        }
                                    },
                                    {
                                        "id": "4",
                                        "labels": ["website"],
                                        "properties": {
                                            "name": "fb",
                                        }
                                    },
                                    {
                                        "id": "5",
                                        "labels": ["website"],
                                        "properties": {
                                            "name": "ali",
                                        }
                                    },
                                    {
                                        "id": "6",
                                        "labels": ["website"],
                                        "properties": {
                                            "name": "jd",
                                        }
                                    },
                                    {
                                        "id": "7",
                                        "labels": ["users"],
                                        "properties": {
                                            "name": "刘强东",
                                        }
                                    },
                                    {
                                        "id": "8",
                                        "labels": ["users"],
                                        "properties": {
                                            "name": "马云",
                                        }
                                    },
                                    {
                                        "id": "9",
                                        "labels": ["users"],
                                        "properties": {
                                            "name": "张勇 逍遥子",
                                        }
                                    },
                                ],
                                "relationships": [
                                    {
                                        "id": "1",
                                        "type": "DEVELOPES",
                                        "startNode": "1",
                                        "endNode": "2",
                                        "properties": {}
                                    },
                                    {
                                        "id": "2",
                                        "type": "DEVELOPES",
                                        "startNode": "1",
                                        "endNode": "3",
                                        "properties": {}
                                    },
                                    {
                                        "id": "3",
                                        "type": "DEVELOPES",
                                        "startNode": "1",
                                        "endNode": "4",
                                        "properties": {}
                                    },
                                    {
                                        "id": "4",
                                        "type": "DEVELOPES",
                                        "startNode": "1",
                                        "endNode": "5",
                                        "properties": {}
                                    },
                                    {
                                        "id": "5",
                                        "type": "DEVELOPES",
                                        "startNode": "1",
                                        "endNode": "6",
                                        "properties": {}
                                    },
                                    {
                                        "id": "6",
                                        "type": "possess",
                                        "startNode": "7",
                                        "endNode": "6",
                                        "properties": {}
                                    },
                                    {
                                        "id": "7",
                                        "type": "possess",
                                        "startNode": "8",
                                        "endNode": "5",
                                        "properties": {}
                                    },
                                    {
                                        "id": "8",
                                        "type": "possess",
                                        "startNode": "9",
                                        "endNode": "5",
                                        "properties": {}
                                    },
                                    {
                                        "id": "9",
                                        "type": "上级",
                                        "startNode": "8",
                                        "endNode": "9",
                                        "properties": {}
                                    },
                                    {
                                        "id": "10",
                                        "type": "上级",
                                        "startNode": "9",
                                        "endNode": "8",
                                        "properties": {}
                                    },
                                    {
                                        "id": "11",
                                        "type": "tools",
                                        "startNode": "1",
                                        "endNode": "1",
                                        "properties": {}
                                    },
                                ]
                            }
                        }
                    ]
                }
            ],
            "errors": []
        }

var neo4jd3 = new Neo4jd3('#neo4j-d3', {
    highlight: [
        {
            class: 'Project',
            property: 'name',
            value: 'neo4jd3'
        }, {
            class: 'User',
            property: 'userId',
            value: 'eisman'
        }
    ],
    minCollision: 60,
    neo4jData,
    nodeRadius: 25,
    onNodeDoubleClick: function(e, node, d3) {
        switch(node.id) {
            case '25':
                // Google
                window.open(node.properties.url, '_blank');
                break;
            default:
                var maxNodes = 5,
                    data = neo4jd3.randomD3Data(node, maxNodes);
                neo4jd3.updateWithD3Data(data);
                break;
        }
    },
    zoomFit: true
});

```


{{</snippet>}}


{{<snippet 控制面板 >}}

```css

iframe{
	height:200px;
}

.control{
	color:white
}

#info{
            text-align: left; 
}

```

```html
<div class="control">
<form id="info" onsubmit = "return false" >
  服务器: <input type="text" name="server" value="http://localhost:11010" /></p>
  用户名: <input type="text" name="name" value="neo4j" /></p>
  密 码: <input type="text" name="password" value="123456" /></p>
  <button onclick="sendConnectionData()" >连接服务器</button>
</form>
<div>
	<button onclick="sendCommand('cmd','match (n) return n limit 10')">查询类别</button>
	<button onclick="sendCommand('cmd','match (n)-[r]-(m) return * limit 10')">查询关系</button>
</div>
</div>
```

```js

  const iframeWrap = window.parent.document.querySelector('#控制面板');
   debugger
  iframeWrap.style.height = "200px"
 setTimeout(()=>{
	sendConnectionData()
 },1000)

  setTimeout(()=>{
	sendCommand("cmd","match (n) return n limit 10") 
 },1000)

 function sendConnectionData(){
	var formEl = document.forms.info;
	var formData = new FormData(formEl);
	var server = formData.get('server');
	var name = formData.get('name');
	var password = formData.get('password');
	
	let data = {server,name,password}
	sendCommand('db',data)

 }

 function sendCommand(cmd,data){
  const iframeWrap = window.parent.document.querySelector('#Neo4j-数据库数据');
    const parentData = {
        cmd,
	data
    }
    iframeWrap.contentWindow.postMessage(parentData, '*')
 }
  

```

{{</snippet>}}



{{<snippet Neo4j-数据库数据>}}


```css

#neo4j-d3 {
  width: 100%;
  height: 100%;
}

.neo4jd3-graph {
  border: 1px solid #ddd;
  border-radius: 5px;
}

.neo4jd3-info {
  font-size: 16px;
  padding: 10px;
  position: absolute;
}
.neo4jd3-info a {
  border: 1px solid;
  display: inline-block;
  font-size: 14px;
  line-height: 1.428571429;
  margin-left: 5px;
  margin-top: 5px;
  padding: 6px 12px;
}
.neo4jd3-info a.class {
  color: white;
}
.neo4jd3-info a.property {
  background-color: #fff;
  border-color: #ccc;
  color: #333;
}
.neo4jd3-info a.btn {
  margin-left: 5px;
  margin-top: 5px;
  opacity: 1;
}
.neo4jd3-info a.info {
  background-color: rgb(165, 171, 182);
  border: 1px solid rgb(154, 161, 172);
  color: white;
}

.node.node-highlighted .ring {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  filter: alpha(opacity=50);
  opacity: 0.5;
  stroke: #888;
  stroke-width: 12px;
}
.node .outline {
  cursor: pointer;
  fill: rgb(165, 171, 182);
  pointer-events: all;
  stroke: rgb(154, 161, 172);
  stroke-width: 2px;
}
.node .ring {
  fill: none;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  stroke: #6ac6ff;
  stroke-width: 8px;
}
.node .context-menu-item {
  cursor: pointer;
  display: none;
}
.node .context-menu-item.context-show {
  display: block;
}
.node .context-menu-item:hover {
  fill: rgb(185, 185, 185);
}

.node.selected .ring,
.node:hover .ring {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
  filter: alpha(opacity=30);
  opacity: 0.3;
}
.node.selected .ring .context-menu-item,
.node:hover .ring .context-menu-item {
  fill: rgb(185, 185, 185);
}

.relationship {
  cursor: default;
}
.relationship.relationship-highlighted .text {
  fill: rgb(255, 0, 0);
  font-size: 12px;
  font-weight: bold;
}
.relationship.relationship-highlighted .outline {
  fill: rgb(255, 0, 0);
}
.relationship line {
  stroke: #aaa;
}
.relationship .outline {
  cursor: default;
}
.relationship .overlay {
  cursor: default;
  fill: #6ac6ff;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
}
.relationship text {
  cursor: default;
  fill:gray;
}
.relationship .active_text {
  fill: rgb(253, 204, 89);
}

.relationship.selected .overlay,
.relationship:hover .overlay {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
  filter: alpha(opacity=30);
  opacity: 0.3;
}

svg {
  cursor: pointer;
}

.iconfont-kg-neo4j3d {
  font-size: 20px;
  font-weight: bold;
}

```

```html

<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/neo4j-driver@4.4.7/lib/browser/neo4j-web.min.js"></script>

<div 
    id="neo4j-d3" 
    ref="neo4j-d3" 
>
</div>

```

```js

function loadScriptSync (src) {
	// get some kind of XMLHttpRequest
	var xhrObj = new XMLHttpRequest()
	// open and send a synchronous request
	xhrObj.open('GET',src, false);
	xhrObj.send('');
	// add the returned content to a newly created script tag
	var se = document.createElement('script');
	se.type = "text/javascript";
	se.text = xhrObj.responseText;
	document.getElementsByTagName('head')[0].appendChild(se);

}

// function loadCssSync (src) {
// 	// add the returned content to a newly created script tag
// 	var se = document.createElement('link');
// 	se.type = "text/css";
// 	se.rel="stylesheet"
//          se.href = src;	
// 	document.getElementsByTagName('head')[0].appendChild(se);

// }


libs = window.parent.libs
loadScriptSync(libs+"/neo4jd3.js")


// async function  executeCommand(cmd){
//       var authToken = neo4j.auth.basic('neo4j', '123456')
//       var driver = neo4j.driver('bolt://localhost:11009', authToken, {
//         encrypted: false
//       })
//       var session = driver.session()
//       let data = await session.run(cmd, {})     
//       console.log(data)
// }

async function executeCommand(info,cmd){

	command = {
	"statements" : [{
	"statement" : cmd,
	"resultDataContents": ["graph"],
	"parameters" : {

	}
	} ]
}

	var encript = btoa(`${info.name}:${info.password}`)
	let params = {
		method: 'post', 
		headers: {
			'Authorization': `Basic ${encript}`, 
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(command)
	}
	//http://localhost:11010
	data = await fetch(`${info.server}/db/neo4j/tx`,params).then(r=>r.json())
	return data;
}


url = window.parent.dataUrl
//  executeCommand("match (n)-[r]-(m) return * limit 10").then((data)=>{
// 	display(data)
//  })

 function display(neo4jData){

var neo4jd3 = new Neo4jd3('#neo4j-d3', {
    highlight: [
        {
            class: '"Officer"',
            property: 'name',
            value: 'neo4jd3'
        }
    ],
    minCollision: 60,
    neo4jData,
    nodeRadius: 25,
    zoomFit: true
});
}

var info  
window.addEventListener('message', function (e) {
	let {cmd,data} = e.data
	debugger
	info = data && data.server ?data:info
        executeCommand(info,data).then((data)=>{
	display(data)
 })
 
})

```


{{</snippet>}}

## Neo4j 在线测试数据库
https://github.com/neo4j-graph-examples/demo.neo4jlabs.com
用户名密码和数据库名称一致



