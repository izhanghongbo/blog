# Nodejs 基础


# 查看NodeJS 版本

```bash
node -v
```
# 创建一个Http服务器

```js
var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
```

# 使用npm

在项目根目录下运行`npm init`创建package.json
```bash
npm init
```


