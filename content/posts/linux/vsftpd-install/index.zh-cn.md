---
title: "安装配置Vsftpd"
date: 2022-09-10T14:19:57+08:00
draft: false
tags: ["FTP"]
categories: ["Linux"]
---

## 安装VSFTPD

```
apt install vsftpd
```

## 配置文件

打开`/etc/vsftpd.conf`,假如下面的配置

```sh
user_config_dir=/etc/vsftpd/vsftpd_user_config
```

创建目录`vsftpd_user_config`,在目录下创建一个与ftp用户相同名称的文件(jacob)，写入如下内容

```
write_enable=YES
```


