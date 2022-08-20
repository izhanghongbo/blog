---
title: "Linux免密登录设置"
date: 2022-08-20T18:46:09+08:00
author: "Jacob"
tags: ["Linux", "SSH"]
categories: ["Linux"]
draft: true
---

## 生成秘钥
查看你的本地是否存在 ~/.ssh文件夹，如果不存在则用如下命令生成秘钥

```sh
 ssh-keygen -t rsa
```

## 上传公钥到服务器

进入 ～/.ssh文件夹中有id_rsa（私钥文件）id_rsa.pub(公钥文件)，将公钥文件id_rsa.pub上传到服务器的.ssh/`authorized_keys`文件中

## 登录服务器

```sh
ssh -o ServerAliveInterval=30 root@66.112.216.xxx -p 27934
```

