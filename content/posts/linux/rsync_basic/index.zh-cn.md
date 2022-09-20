---
title: "Rsync数据同步"
date: 2022-09-15T06:06:02+08:00
draft: false
tags: []
categories: []
resources:
- name: "featured-image"
  src: "banner.webp"
---

## 通过SSH备份数据到远程服务器

`test`为本地机器上的目录，`jacob@kali`为ssh账号和地址，`/home/jacob/mydocument/`为要备份的远程目录
```bash
rsync -av  test jacob@kali:/home/jacob/mydocument/
```
