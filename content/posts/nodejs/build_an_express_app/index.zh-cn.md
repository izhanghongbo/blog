---
title: "构建Express应用程序"
date: 2022-08-27T15:28:33+08:00
draft: false
tags: ["NodeJS","Express"]
categories: ["NodeJS"]
---

## 初始化项目

```bash
npm init
```

## 安装Express

```bash
npm install express --save
```

以上命令会将 Express 框架安装在当前目录的 node_modules 目录中， node_modules 目录下会自动创建 express 目录。以下几个重要的模块是需要与 express 框架一起安装的：

`body-parser` - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。

`cookie-parser` - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。

`multer` - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

```bash
npm install body-parser --save
npm install cookie-parser --save
npm install multer --save
```

## 查看Express版本

```bash
npm list express
```

## 框架实例

```nodejs

var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8888, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})

```

## [源码](demo.zip)
