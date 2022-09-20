# Rsync数据同步


## 通过SSH备份数据到远程服务器

`test`为本地机器上的目录，`jacob@kali`为ssh账号和地址，`/home/jacob/mydocument/`为要备份的远程目录
```bash
rsync -av  test jacob@kali:/home/jacob/mydocument/
```

