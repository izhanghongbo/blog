# Apache Arrow 基础


{{<snippet RecordBatch-From-Vector 200 >}}

```css
#result{
	color:green;
}
```

```html
<script src="https://cdn.jsdelivr.net/npm/apache-arrow@9.0.0/Arrow.es2015.min.js"></script>
<div id="result"></div>
```

```js

let {makeVector,RecordBatch} = Arrow

const i32s = new Int32Array([1,2,3,4,5,6,7]);
let i32 = makeVector(i32s)

const batch = new RecordBatch({ "name": i32.data[0] });
i32 = batch.getChildAt(0);
log("表格第一行数据:" + i32.get(0))

log("列名称:" + batch.schema.fields[0].name)

```

{{</snippet>}}

# 引用

[字符串的存储格式](https://drill.apache.org/docs/value-vectors/)

[ApacheArrow物理内存布局](https://arrow.apache.org/docs/format/Columnar.html)

[ApacheArrow Graph Schema](https://github.com/trxcllnt/arrow/blob/arrow-graph-fbs/format/GraphSchema_Triples_Quads.fbs)
