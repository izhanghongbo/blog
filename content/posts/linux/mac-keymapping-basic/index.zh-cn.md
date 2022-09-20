---
title: "MacBook安装Linux系统键盘映射"
date: 2022-09-10T13:18:55+08:00
draft: false
tags: []
categories: ["其他"]
resources:
- name: "featured-image"
  src: "banner.png"

---

# 键盘映射

实现Supper 与 Control 键互换

## 打开下面的文件

```bash
sudo vi usr/share/X11/xkb/symbols/pc
```

## 编辑映射

```
key <LCTL> {    [ Super_L       ]   };
key <LWIN> {    [ Control_L     ]   };

...

key <RCTL> {    [ Super_R       ]   };
key <RWIN> {    [ Control_R     ]   };
```


