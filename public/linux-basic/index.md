# Linux 基础


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




