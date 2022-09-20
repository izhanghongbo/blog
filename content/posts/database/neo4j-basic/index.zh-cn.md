---
title: "Neo4j Basic"
date: 2022-09-09T21:23:26+08:00
draft: false
tags: ["Neo4j"]
categories: ["Database"]
---

## 导入数据

```bash
bin/neo4j-admin load --from=/dumps/neo4j/neo4j-<timestamp>.dump --database=neo4j --force

```

## 导出数据

```bash
neo4j-admin dump --database=neo4j --to=/export/00001.dump
```

## 引用

[导入/导出数据](https://neo4j.com/docs/operations-manual/current/backup-restore/restore-dump/)

[数据源](https://github.com/neo4j-graph-examples)

[构建Neo4j Desktop App](https://neo4j.com/developer/graph-apps/building-a-graph-app/)
