---
title: "Airflow"
date: 2022-11-02T20:22:46+08:00
draft: true
tags: []
categories: []
resources:
- name: "featured-image"
  src: "banner.jpeg"
---

## 下载源码
https://github.com/apache/airflow/tree/main/airflow

## 设置虚拟环境dfdf

设置虚拟环境
```sh
python3 -m venv .
```

激活虚拟环境

```sh
source bin/activatesource bin/activate
```
退出虚拟环境

```
deactivate
```



## 安装

```sh
pip install .
```

## 初始化数据库

```
airflow db init
```

## 重置数据库

```
airflow db reset
```

## 编译静态文件

```
 python setup.py compile_assets
```

## 创建用户

```sh
FLASK_APP=airflow.www.app flask fab create-admin
```
或者

```sh
airflow users create \
    --username admin \
    --firstname admin \
    --password admin  \
    --lastname admin \
    --role Admin \
    --email izhanghongbo@gmail.com
```

## 运行

```sh
airflow scheduler & airflow webserver --port 8080
```

## 进入容器

```sh
docker exec -it airflow_webserver bash
```

## docker-compose 文件

```yaml
version: '3'
x-airflow-common:
  &airflow-common
  image: apache/airflow:2.3.0
  environment:
    - AIRFLOW__CORE__EXECUTOR=LocalExecutor
    - AIRFLOW__CORE__SQL_ALCHEMY_CONN=postgresql+psycopg2://postgres:postgres@postgres:5432/airflow
    - AIRFLOW__CORE__FERNET_KEY=FB0o_zt4e3Ziq3LdUUO7F2Z95cvFFx16hU8jTeR1ASM=
    - AIRFLOW__CORE__LOAD_EXAMPLES=False
    - AIRFLOW__CORE__LOGGING_LEVEL=INFO
  volumes:
    - ./dags:/opt/airflow/dags
    - ./airflow-data/logs:/opt/airflow/logs
    - ./airflow-data/plugins:/opt/airflow/plugins
    - ./airflow-data/airflow.cfg:/opt/airlfow/airflow.cfg
  depends_on:
    - postgres

services:
  postgres:
    image: postgres:12
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=airflow
      - POSTGRES_PORT=5432
    ports:
      - "5432:5432"

  airflow-init:
    << : *airflow-common
    container_name: airflow_init
    entrypoint: /bin/bash
    command:
      - -c
      - airflow users list || ( airflow db init &&
        airflow users create
          --role Admin
          --username airflow
          --password airflow
          --email airflow@airflow.com
          --firstname airflow
          --lastname airflow )
    restart: on-failure

  airflow-webserver:
    << : *airflow-common
    command: airflow webserver
    ports:
      - 8080:8080
    container_name: airflow_webserver
    restart: always

  airflow-scheduler:
    << : *airflow-common
    command: airflow scheduler
    container_name: airflow_scheduler
    restart: always

```

## 编译docker

```
export DOCKER_BUILDKIT=1
docker build . \
    --tag "my-stable-airflow:0.0.1"
```
