# Neo4j Basic


## 导入数据

```sh
bin/neo4j-admin load --from=/dumps/neo4j/neo4j-<timestamp>.dump --database=neo4j --force

```

## 导出数据

```sh
neo4j-admin dump --database=neo4j --to=/export/00001.dump
```


[官方手册](https://neo4j.com/docs/operations-manual/current/backup-restore/restore-dump/)
[数据源](https://github.com/neo4j-graph-examples)


