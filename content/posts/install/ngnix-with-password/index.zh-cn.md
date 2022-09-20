---
title: "使用htpasswd实现Nginx验证访问"
date: 2022-08-20T22:36:36+08:00
draft: false
tags: ["Nginx"]
resources:
- name: "featured-image"
  src: "bg.jpeg"
---
## 安装htpasswd

```bash
yum -y install httpd-tools 
```

## 生成密码

```bash
htpasswd -c ./passwd jacob

```

执行上面这个命令后，会在当前路径下生成一个passwd的文件

## 配置Nginx

打开`/etc/nginx/conf.d`中的配置文件，在location 中假如下面2行，`auth_basic_user_file`中填写刚成的passwd文件路径
```bash
    location / {
            try_files $uri $uri/ =404;
            auth_basic "Basic Authentication";
            auth_basic_user_file "/etc/nginx/conf.d/passwd";
    }
```

## 配置没有index文件的静态网站

```bash
    server {
      listen 9001;
      listen [::]:9001;
  
      server_name mathbox.bugraph.com;
  
      root /home/jacob/mydocument/projects/mathbox;
      index index.html;
  
      location / {
       add_header X-Robots-Tag "noindex, follow" always;
       autoindex on;
       autoindex_exact_size off;
       autoindex_format html;
       autoindex_localtime on;
       try_files $uri $uri/ =404;
     }
  }
```

[转载](https://blog.51cto.com/u_15127535/4016407)

