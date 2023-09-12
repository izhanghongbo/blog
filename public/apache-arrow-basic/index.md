# Apache Arrow 基础


{{<snippet Vector 200 >}}

```css
#result {
  color: gray;
}
```

```html
<script src="https://cdn.jsdelivr.net/npm/apache-arrow@9.0.0/Arrow.es2015.min.js"></script>
<script src="/hello.js"></script>
<div id="result"></div>
```

```js
let { makeVector, RecordBatch } = Arrow;

const i32s = new Int32Array([1, 2, 3, 4, 5, 6, 7]);
let i32 = makeVector(i32s);

const batch = new RecordBatch({ name: i32.data[0] });
i32 = batch.getChildAt(0);
log("表格第一行数据:" + i32.get(0));

log("列名称:" + batch.schema.fields[0].name);
```

{{</snippet>}}


{{<snippet Dictionary 200 >}}

```css
#result {
  color: gray;
}
```

```html
<script src="https://cdn.jsdelivr.net/npm/apache-arrow@9.0.0/Arrow.es2015.min.js"></script>
<div id="result"></div>
```

```js
let { makeVector, Field,RecordBatch,Dictionary,vectorFromArray,Utf8,Int32 } = Arrow;

const dictionary = ['foo', 'bar', 'baz'];
const dictionaryVec = vectorFromArray(dictionary, new Utf8).memoize();
let indices = Array.from({length: dictionary.length}, (v, i) => i)

let type = new Field('dict', new Dictionary(new Utf8(), new Int32()))

const vector = makeVector({
            data: indices,
            dictionary: dictionaryVec,
            type: new Dictionary(dictionaryVec.type, new Int32)
        });

log("baz的索引:"+vector.indexOf("baz"))

```

{{</snippet>}}


{{<snippet Struct 200 >}}

```css
#result {
  color: gray;
}
```

```html
<script src="https://cdn.jsdelivr.net/npm/apache-arrow@9.0.0/Arrow.es2015.min.js"></script>
<div id="result"></div>
```

```js
let properties = [
  { name: "jacob", age: 22 },
  { name: "Ben", age: 33, city: "SF" },
];

let newProperties = [{ name: "sean", age: 31 }];
let { Schema, Field, Float32, Struct, Utf8, Vector, vectorFromArray } = Arrow;

let propertyVec = vectorFromArray(properties);
let newPropertyVec = vectorFromArray(newProperties);

let concatedVec = propertyVec.concat(newPropertyVec);
log("全部的Vector:<br/>" + propertyVec);
log("第一行数据的名字:<br/>" + propertyVec.get(0).name);
log("追加后的数据:<br/>" + concatedVec);
```

{{</snippet>}}


{{<snippet Schema 200 >}}

```css
#result {
  color: gray;
}
```

```html
<script src="https://cdn.jsdelivr.net/npm/apache-arrow@9.0.0/Arrow.es2015.min.js"></script>
<div id="result"></div>
```

```js
let properties = [
  { name: "jacob", age: 22 },
  { name: "Ben", age: 33, city: "SF" },
];

let newProperties = [{ name: "sean", age: 31 }];
let {
  Table,
  Schema,
  RecordBatch,
  Field,
  Float32,
  Int32,
  Struct,
  Utf8,
  Vector,
  makeData,
  vectorFromArray,
  makeTable,
  List
} = Arrow;

const values = [1, 2];
const vector = vectorFromArray(values);

const nodes = [
  {
    id: "1",
    color: 0xfff000,
    label: "Movie",
    position: { x: 1, y: 2, z: 3 },
    properties: {
      name: "jacob",
      age: 22,
    },
  },
  {
    id: "2",
    color: 0xfff000,
    label: "Movie",
    position: { x: 1, y: 2, z: 3 },
    properties: {
      name: "test",
      age: 22,
    },
  },
];

const nodesVector = vectorFromArray(nodes);

  const labels = [["User", "Person"], ["3", "4", "5"]];
    const labelVector = vectorFromArray(labels,new List(new Field("label",new Utf8)) );
let fields = [Field.new("id",new Int32()),Field.new("label",new List(new Field("label",new Utf8)) ),Field.new("nodes",new Struct())]
let schema = new Schema(fields)
const data = makeData({ type: new Struct(schema.fields), children:[vector,labelVector,nodesVector] });
let recordBatch = new RecordBatch(schema,data)

// const batch = new RecordBatch({id:idVec,nodes:nodesVec});
let graphTable = new Table([recordBatch])

log("label:"+graphTable.getChild("nodes").get(1).label)
let labels2 = graphTable.getChild("label").get(0)
log("List:"+labels2)

```

{{</snippet>}}

{{<snippet Table 200 >}}

```css
#result {
  color: gray;
}
```

```html
<script src="https://cdn.jsdelivr.net/npm/apache-arrow@9.0.0/Arrow.es2015.min.js"></script>
<div id="result"></div>
```

```js
let properties = [
  { name: "jacob", age: 22 },
  { name: "Ben", age: 33, city: "SF" },
];

let newProperties = [{ name: "sean", age: 31 }];
let {
  Table,
  Schema,
  RecordBatch,
  Field,
  Float32,
  Int32,
  Struct,
  Utf8,
  Vector,
  vectorFromArray,
  makeTable,
} = Arrow;

const values = [1, 2];
const vector = vectorFromArray(values);

const nodes = [
  {
    id: "1",
    color: 0xfff000,
    label: "Movie",
    position: { x: 1, y: 2, z: 3 },
    properties: {
      name: "jacob",
      age: 22,
    },
  },
  {
    id: "2",
    color: 0xfff000,
    label: "Movie",
    position: { x: 1, y: 2, z: 3 },
    properties: {
      name: "test",
      age: 22,
    },
  },
];

const nodesVector = vectorFromArray(nodes);

const batch = new RecordBatch({id:vector ,nodes: nodesVector });
let graphTable = new Table([batch])
let ns = graphTable.getChild("nodes")
log("第一行数据的label:" + ns.get(0).label);

const newId = [3,4]
const newNodes = [
  {
    id: "3",
    color: 0xfff000,
    label: "Movie",
    position: { x: 1, y: 2, z: 3 },
    properties: {
      name: "Rob",
      age: 22,
    },
  },
  {
    id: "4",
    color: 0xfff000,
    label: "Movie",
    position: { x: 1, y: 2, z: 3 },
    properties: {
      name: "Susana",
      age: 22,
    },
  },
];

let newIdVec = vectorFromArray(newId)
let neweNodeVec = vectorFromArray(newNodes)
const newBatch = new RecordBatch({id:newIdVec ,nodes: neweNodeVec });
const newTable = new Table([newBatch])
let newNodesVec = newTable.getChild("nodes")
log("新Table的property:" + newNodesVec.get(0).properties.name);


let concatTable = graphTable.concat(newTable)
let concatVec = concatTable.getChild("nodes")

log("concat table's last row properties:"+concatTable.getChild("nodes").get(3).properties.name)

//Change property's value
let jacobProperty = concatTable.getChild("nodes").get(0).properties
jacobProperty.name = "S"
concatTable.getChild("nodes").get(0).properties = jacobProperty

log("rename:"+concatTable.getChild("nodes").get(0).properties.name)


```

{{</snippet>}}

# 引用

[字符串的存储格式](https://drill.apache.org/docs/value-vectors/)

[ApacheArrow 物理内存布局](https://arrow.apache.org/docs/format/Columnar.html)

[ApacheArrow Graph Schema](https://github.com/trxcllnt/arrow/blob/arrow-graph-fbs/format/GraphSchema_Triples_Quads.fbs)

