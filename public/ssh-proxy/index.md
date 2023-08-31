# SSH设置代理


# 打开.ssh/config 输入如下内容可以为bitbucket 设置代理

```shell
Host bitbucket.org
   ProxyCommand /usr/bin/nc -X 5 -x 127.0.0.1:1080 %h %p
   Port 22
   User jacob
   IdentityFile ~/.ssh/id_rsa
```


