---
title: "Frp 内网穿透"
date: 2022-09-10T14:53:27+08:00
draft: false
tags: ["Linux"]
categories: ["Linux"]
resources:
- name: "featured-image"
  src: "banner.png"

---

## 下载代码
[下载地址](https://github.com/fatedier/frp/releases)

## 运行服务端（公网服务器）

服务端配置

```
[common]
token = xxxxx
bind_port = 7000
vhost_http_port = 9000
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

[web1]
type = http
local_ip = 192.168.31.26
local_port = 8080
custom_domains = kali.bugraph.com

[web2]
type = http
local_ip = 192.168.31.26
local_port = 8081
custom_domains = database.bugraph.com
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

## 远程访问本机

```bash
database.bugraph.com:9000
kali.bugraph.com:9000
```

2个服务都是通过9000端口访问,如果想通过80，可以通过配置Nginx实现，Nginx的配置如下

## 配置Nginx


```json
server {
    listen 80;
    server_name galaxybase.bugraph.com kali.bugraph.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name galaxybase.bugraph.com kali.bugraph.com;
   ssl_certificate /etc/ssl/cert_s.pem;
  ssl_certificate_key /etc/ssl/key_s.pem;
  ssl_client_certificate /etc/ssl/cloudflare.crt;

    client_max_body_size 50m;
    client_body_buffer_size 256k;
    client_header_timeout 3m;
    client_body_timeout 3m;
    send_timeout 3m;
    proxy_connect_timeout 300s;
    proxy_read_timeout 300s;
    proxy_send_timeout 300s;
    proxy_buffer_size 64k;
    proxy_buffers 4 32k;
    proxy_busy_buffers_size 64k;
    proxy_temp_file_write_size 64k;
    proxy_ignore_client_abort on;

    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_redirect off;
        proxy_set_header Host $host:80;
        proxy_ssl_server_name on;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```




转载[https://zhuanlan.zhihu.com/p/341551501](https://zhuanlan.zhihu.com/p/341551501)