---
title: "Linux 基础"
date: 2022-09-10T14:53:27+08:00
lastmod: 2022-09-10T14:53:27+08:00
draft: false
images: []
resources:
- name: "featured-image"
  src: "banner.png"

tags: ["Linux"]
categories: ["Linux"]

---

## Group 相关

* 创建组

```sh
newgrp docker
```

* 查看组

```sh
groups
```

* 把用户添加到group中

```sh
#把jacob加入到docker组中
usermod -gG docker jacob
```

## 切换文本模式和图形模式

* 文本模式
```
systemctl set-default multi-user.target
1
```

* 图形模式

```
systemctl set-default graphical.target
```

## 中文乱码问题

在终端下输入命令，修改字符集
```sh
export LANGUAGE=zh_CN.UTF-8
export LANG=zh_CN.UTF-8
export LC_ALL=zh_CN.UTF-8
locale-gen zh_CN.UTF-8
```



