---
title: "安装Galaxybase"
date: 2022-09-07T16:56:16+08:00
draft: false
tags: []
categories: []
---

## [下载Galaxybase镜像](https://www.galaxybase.com/download)

## 解压安装

```sh
tar -xzif galaxybase-standalone-20220721170804.tar.gz
cd galaxybase-<release_version>/bin
```

## 查看版本

```sh
 ./galaxybase-deploy version
```

## 安装Docker

如果本地已经安装，这部分可以跳过

```sh
./galaxybase-deploy install docker
```

## [教程](https://www.bilibili.com/video/BV1iY4y1F7Hn