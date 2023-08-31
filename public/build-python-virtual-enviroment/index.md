# 构建Python虚拟环境


## 使用virtualenv

#### 安装virtualenv

```
pip install virtualenv

```

#### 创建运行环境

```
virtualenv venv

```

#### 激活环境

```
cd venv
source ./bin/activate
```

#### 退出环境

```
deactivate
```

## 使用venv

#### 激活

```
python3 -m venv  .
source bin/activate
```

#### 退出

```
source bin/activate
```

## 为Jupiter设置虚拟环境

#### 在虚环境中安装ipykernel

```
pip install ipykernel
```

#### 为Jupiter设置环境

```
python -m ipykernel install --user --name=learn

```

#### 运行Jupiter

```
jupyter notebook

```

#### 在Jupiter的Kernel->Change Kernel中切换内核为learn

## Jupiter配置外网访问

生成配置文件
```
jupyter notebook --generate-config
```

修改配置文件
```
# 将ip设置为*，意味允许任何IP访问
c.NotebookApp.ip = '*'
# 这里的密码就是上边我们生成的那一串
c.NotebookApp.password = 'sha1:3c7ece6d01a3:aef0f9818ea49be2c2f2cc5f5a6228fd327ec00d'
# 服务器上并没有浏览器可以供Jupyter打开
c.NotebookApp.open_browser = False
# 监听端口设置为8888或其他自己喜欢的端口
c.NotebookApp.port = 8888
# 我们可以修改jupyter的工作目录，也可以保持原样不变，如果修改的话，要保证这一目录已存在
#c.MappingKernelManager.root_dir = '/root/jupyter_run'
# 允许远程访问
c.NotebookApp.allow_remote_access = True
```
