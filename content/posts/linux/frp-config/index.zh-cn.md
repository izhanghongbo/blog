---
title: "Frp 内网穿透"
date: 2022-09-10T14:53:27+08:00
draft: false
tags: ["Linux"]
categories: ["Linux"]
---

## 下载代码
[下载地址](https://github.com/fatedier/frp/releases)

## 运行服务端（公网服务器）

服务端配置

```
[common]
token = xxxxx
bind_port = 7000
vhost_http_port = 8081
dashboard_port = 7500
dashboard_user = admin
dashboard_pwd = admin
```

```
./frps -c ./frps.ini
```

## 运行客户端（本地电脑）

客户端配置

```
[common]
server_addr = **.163.203.***
server_port = 7000
token = xxxxx

[web]
type = http
local_ip = 192.168.31.26
local_port = 8081
custom_domains = kali.bugraph.com
```

```
./frpc -c ./frpc.ini
```

## 设置自启动
在`/etc/systemd/system/`目录下创建frps.service文件，内容如下

```
[Unit]
Description=Frp Server Service
After=network.target

[Service]
Type=simple
User=nobody
Restart=on-failure
RestartSec=5s
ExecStart=/usr/local/frp/frps -c /usr/local/frp/frps.ini

[Install]
WantedBy=multi-user.target
```


转载[https://zhuanlan.zhihu.com/p/341551501](https://zhuanlan.zhihu.com/p/341551501)