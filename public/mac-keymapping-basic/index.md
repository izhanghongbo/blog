# Mac安装Linux系统键盘映射


# 键盘映射

## 打开下面的文件

```sh
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



