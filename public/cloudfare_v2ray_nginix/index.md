# Cloudfare Nginx V2ray 配置


## 时间校准

```bash
sudo timedatectl set-ntp true # 启用 NTP 服务
sudo ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime # 将时区设为“亚洲/上海”
sudo hwclock --systohc # 将硬件时钟调整到与当前系统时间一致
date -R # 以 RFC 5322 格式输出日期和时间。例如 Mon, 18 Jan 2021 11:04:16 +0800
```

## 安装V2ray

```bash
# 下载脚本
curl -O https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh
curl -O https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-dat-release.sh
# 安装
install-release.sh

```

## 配置V2ray


### 查看V2ray状态

```bash
systemctl status v2ray
```
  这里会列出v2ray用的安装路径和配置文件路径

```bash
 v2ray.service - V2Ray Service
   Loaded: loaded (/etc/systemd/system/v2ray.service; disabled; vendor preset: disabled)
  Drop-In: /etc/systemd/system/v2ray.service.d
           └─10-donot_touch_single_conf.conf
   Active: active (running) since Sun 2022-08-21 17:34:27 CST; 1h 47min ago
     Docs: https://www.v2fly.org/
 Main PID: 32669 (v2ray)
    Tasks: 8
   Memory: 27.2M
   CGroup: /system.slice/v2ray.service
           └─32669 /usr/local/bin/v2ray -config /usr/local/etc/v2ray/config.json

Aug 21 17:34:27 superb-code-2.localdomain systemd[1]: Started V2Ray Service.
Aug 21 17:34:28 superb-code-2.localdomain v2ray[32669]: V2Ray 4.45.2 (V2Fly, a community-driven edition of V2Ray.) Custom ...md64)
Aug 21 17:34:28 superb-code-2.localdomain v2ray[32669]: A unified platform for anti-censorship.
Aug 21 17:34:28 superb-code-2.localdomain v2ray[32669]: 2022/08/21 17:34:28 [Info] main/jsonem: Reading config: /usr/local....json
Aug 21 17:34:28 superb-code-2.localdomain v2ray[32669]: 2022/08/21 17:34:28 [Warning] V2Ray 4.45.2 started
Hint: Some lines were ellipsized, use -l to show in full.
```

### 编辑配置文件

```bash
{
  "inbounds": [{
    "port": 10000,
    "listen": "127.0.0.1",
    "protocol": "vmess",
    "settings": {
      "clients": [
        {
          "id": "uuid",
          "level": 1,
          "alterId": 0
        }
      ]
    },
    "streamSettings": {
      "network": "ws",
      "wsSettings": {
        "path": "/test"
      }
    }
  }],
  "outbounds": [{
    "protocol": "freedom",
    "settings": {}
  },{
    "protocol": "blackhole",
    "settings": {},
    "tag": "blocked"
  }],
  "routing": {
    "rules": [
      {
        "type": "field",
        "ip": ["geoip:private"],
        "outboundTag": "blocked"
      }
    ]
  }
}
```

## Nginx 配置

打开文件夹`/etc/nginx/conf.d`,找到域名相关的配置文件xxxx.com.conf

```bash
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  server_name blog.bugraph.com;

  return 301 https://$host$request_uri;
}

server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;

  ssl_certificate /etc/ssl/cert_s.pem;
  ssl_certificate_key /etc/ssl/key_s.pem;
  ssl_client_certificate /etc/ssl/cloudflare.crt;
  ssl_verify_client on;
  ssl_session_timeout 1d;
  ssl_session_cache shared:MozSSL:10m;  # about 40000 sessions
  ssl_session_tickets off;

  # intermediate configuration
  # ssl_protocols TLSv1.2 TLSv1.3;
  ssl_protocols TLSv1.2;
  ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
  ssl_prefer_server_ciphers off;

  # HSTS (ngx_http_headers_module is required) (63072000 seconds)
  add_header Strict-Transport-Security "max-age=63072000" always;

  server_name blog.bugraph.com;

  root /var/www/izhanghongbo.github.io;
  index index.html index.htm index.nginx-debian.html;


  location / {
    try_files $uri $uri/ =404;
  }

  location /debug {

        return  200 xforwardedfor:$proxy_add_x_forwarded_for--remote_addr:$remote_addr--scheme:$scheme--host:$host";
  }

  location /test {
    if ($http_upgrade != "websocket") {
      return 404;
    }
    proxy_redirect off;
    proxy_pass http://127.0.0.1:10000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;

    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }

```
{{< year >}}










[转载](https://ericclose.github.io/V2Ray-TLS-WebSocket-Nginx-with-Cloudflare.html)










