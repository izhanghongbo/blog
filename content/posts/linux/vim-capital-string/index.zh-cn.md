---
title: "Vi 大小写字母转换"
date: 2022-09-16T08:09:38+08:00
draft: false
tags: []
categories: []
resources:
- name: "featured-image"
  src: "banner.png"
---

gu      ---- 把选择范围全部小写
gU      ---- 把选择范围全部大写

## `字母`级别大小写转化

只是想修改光标当前的字母的大小写，可以使用shift +“~”（键盘左上角数字1左边的键）在反复转换。

## `单词`级别的大小写转换

guw或gue---- 两个命令功能是一样的：光标后面的“字”会变成小写

gUw或gUe---- 两个命令功能是一样的：光标后面的“字”会变成大写
 
gu6w或gu6e---- 两个命令功能是一样的：光标后面的6个“字”会变成小写

gU6w或gU6e---- 两个命令功能是一样的：光标后面的6个“字”会变成小写


[来源](https://www.cnblogs.com/badboy200800/p/9880269.html)

## 快速删除引号内的字符串

`di"：delete all content inside "，结果字符串为""`

## 跳转到指定的字符`f=`跳转到=所在位置

