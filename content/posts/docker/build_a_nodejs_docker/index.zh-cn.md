---
title: "基于NodeJS构建Docker应用"
date: 2022-08-27T14:52:29+08:00
draft: false
tags: ["Docker","NodeJS"]
categories: ["Docker"]
---

# 创建一个NodeJS程序

```js
http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8080);
```

## 创建Dockerfile

```docker
FROM node:12

# 创建一个工作环境目录
WORKDIR /usr/src/app

# 复制package.json
COPY package*.json ./

# 安装依赖
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# 复制源码到docker的工作目录
COPY . .

EXPOSE 8080
# 运行程序
CMD [ "node", "server.js" ]

```

## 创建.dockerignore

```docker
node_modules
npm-debug.log
```

## 构建你的镜像

`-t` 给docker 打tag
```bash
docker build . -t hello
```

## 查看构建成功的镜像

```bash
docker images
```

## 运行镜像

使用 `-d` 模式运行镜像将以分离模式运行 Docker 容器，使得容器在后台自助运行
```bash
docker run -p 49160:8080 -d hello
```

## 查看运行中镜像

```bash
docker ps
```

结果：

```bash
CONTAINER ID   IMAGE                           COMMAND                  CREATED          STATUS                PORTS                                                                                                  NAMES
59cfd31c454a   hello                           "docker-entrypoint.s…"   12 minutes ago   Up 12 minutes         0.0.0.0:49160->8888/tcp                                                                                interesting_feynman
affb2d1fbf8c   vesoft/nebula-graphd:v3.0.0     "/usr/local/nebula/b…"   10 days ago      Up 3 days (healthy)   0.0.0.0:9669->9669/tcp, 0.0.0.0:52140->19669/tcp, 0.0.0.0:52141->19670/tcp                             nebula-docker-compose_graphd_1
```

## 停止镜像

```bash
# 59cfd31c454a为镜像Id 
docker stop 59cfd31c454a
```

## 进入容器

```bash
docker exec -it <container id> /bin/bash
```

结果：

```bash
root@59cfd31c454a:/usr/src/app# ls
Dockerfile  hello.js  package-lock.json  package.json
```

## 查看所有容器

```bash
docker container list -a
```

结果:

```bash
CONTAINER ID   IMAGE                               COMMAND                   CREATED          STATUS                        PORTS                                                                                                  NAMES
59cfd31c454a   hello                               "docker-entrypoint.s…"    19 minutes ago   Exited (137) 9 seconds ago                                                                                                           interesting_feynman
dcf5f511b71b   22c664b382c0                        "docker-entrypoint.s…"    23 minutes ago   Exited (137) 21 minutes ago                                                                                                          dazzling_banz
```

## 启动已经停止的容器

```bash
docker run <CONTAINER_ID>
```

## 删除容器

```bash
# 先停止
docker stop <CONTAINER_ID>
# 删除容器
docker container rm
```

## 删除镜像

```bash
docker image rm <IMAGE_ID>
```

## [源码](demo.zip)

[原创:https://nodejs.org/zh-cn/docs/guides/nodejs-docker-webapp/](https://nodejs.org/zh-cn/docs/guides/nodejs-docker-webapp/)
