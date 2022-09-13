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

## 常用功能

* 跳转到第一行（gg）
* 跳转到最后一行（G/shift+g）

[Neovim构建javascript IDE](https://jsdev.org/env/ide/neovim/)
[视频教程](https://frontendmasters.com/courses/vim-fundamentals/)
[Vim IDE](https://github.com/LunarVim/nvim-basic-ide)
