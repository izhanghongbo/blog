---
title: "安装Galaxybase"
date: 2022-09-07T16:56:16+08:00
draft: false
tags: []
categories: []
---

## [下载Galaxybase镜像](https://www.galaxybase.com/download)

## 解压安装

```bash
tar -xzif galaxybase-standalone-20220721170804.tar.gz
cd galaxybase-<release_version>/bin
```

## 在galaxybase目录下新建`env`文件

```bash
export GALAXYBASE_HOME=/home/jacob/mydocument/software/galaxybase-20220721170804
export PATH =$PATH:$GALAXYBASE_HOME/bin
```
运行`source .env`,现在在任何目录都可以运行`galaxybase-depoly`命令了

## 查看版本

```bash
 ./galaxybase-deploy version
```

## 安装Docker

`galaxybase-deploy install docker`

如果本地已经安装，这部分可以跳过

## 安装Galaxybase 
运行命令`galaxybase-deploy image install`

## 运行Galaxybase

```bash
# 在工程目录下创建一数据文件home-data
# 运行下面命令启动Galaxybase
 galaxybase-deploy build graph --home home-data
```
使用`ss -lntp`查看当前运行的端口,51314端口为galaxybase的节点管理平台的页面端口

```bash
State        Recv-Q        Send-Q               Local Address:Port                Peer Address:Port       Process
LISTEN       0             4096                     127.0.0.1:1098                     0.0.0.0:*
LISTEN       0             128                        0.0.0.0:22                       0.0.0.0:*
LISTEN       0             4096                     127.0.0.1:1080                     0.0.0.0:*
LISTEN       0             4096                     127.0.0.1:34683                    0.0.0.0:*
LISTEN       0             128                              *:12001                          *:*
LISTEN       0             50                               *:38257                          *:*
LISTEN       0             50                               *:51314                          *:*
LISTEN       0             50                               *:51315                          *:*
LISTEN       0             32                               *:21                             *:*
LISTEN       0             128                           [::]:22                          [::]:*

```

数据库管理平台：http://192.168.31.191:51314
用户名 admin 密码 admin
数据库可视化：http://192.168.31.191:8888
用户名 admin 密码 admin

## [教程](https://www.bilibili.com/video/BV1iY4y1F7Hn
## [数据导入](https://github.com/galaxybase/graph-database-benchmark)
## [可视化](https://github.com/galaxybase/GalaxyVis)