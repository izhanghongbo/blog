---
title: "SSH设置代理"
date: 2023-08-29T23:24:15+08:00
draft: false
tags: []
categories: []
resources:
- name: "featured-image"
  src: "banner.jpeg"
---

# 打开.ssh/config 输入如下内容可以为bitbucket 设置代理

```shell
Host bitbucket.org
   ProxyCommand /usr/bin/nc -X 5 -x 127.0.0.1:1080 %h %p
   Port 22
   User jacob
   IdentityFile ~/.ssh/id_rsa
```

