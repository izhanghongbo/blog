---
title: "Timeshift 备份与还原"
date: 2022-09-10T18:05:26+08:00
draft: false
tags: ["Linux"]
categories: ["Linux"]
resources:
- name: "featured-image"
  src: "banner.jpg"
---

## 查看硬盘（U盘）

```sh
 lsblk
```

结果如下，可以看出sdc是U盘
```sh
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda      8:0    0 233.8G  0 disk
|-sda1   8:1    0   512M  0 part /boot/efi
|-sda2   8:2    0 232.3G  0 part /
`-sda3   8:3    0   976M  0 part [SWAP]
sdb      8:16   1     0B  0 disk
sdc      8:32   1  29.3G  0 disk
`-sdc1   8:33   1  29.3G  0 part
```

## 格式化U盘

```sh
parted /dev/sdc  mklabel gpt
parted /dev/sdc  mkpart primary 0% 100%
mkfs.ext4  /dev/sdc

```


