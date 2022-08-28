# Vim使用


## 安装vim-plug

1. 下载vim-plug

```bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```
neovim 的安装路径是`/.config/nvim/autoload`

2. 安装插件

以安装[markdow-previws](https://github.com/iamcco/markdown-preview.nvim)为例

打开`~/.config/nvim/init.vim` 插入下面的代码
```bash
Plugin 'iamcco/markdown-preview.nvim'

```
打开NeoView/vim,在命令模式下执行如下命令

```bash
:source %
:PluginInstall
:call mkdp#util#install()
```
运行Markdown Preview

```bash
:MarkdownPreview
```


