# 使用 Webpack 将多个 css 编译成一个 css



## 每个 React 使用各自的 css 文件
在CSS模块中，每个组件的样式文件（通常是.module.css或.module.scss等）都会在构建时生成唯一的类名，从而避免全局样式冲突。

比如，你有两个组件ComponentA和ComponentB，它们各自有一个样式文件（ComponentA.module.css和ComponentB.module.css），并且都定义了.button：

```css
/* ComponentA.module.css */
.button {
  background-color: blue;
}
```

```css
/* ComponentB.module.css */
.button {
  background-color: blue;
}
```

在对应的JSX文件中，你会这样引入：

```js
// ComponentA.js
import styles from './ComponentA.module.css';

function ComponentA() {
  return <button className={styles.button}>A的按钮</button>;
}

```

```js
// ComponentB.js
import styles from './ComponentB.module.css';

function ComponentB() {
  return <button className={styles.button}>B的按钮</button>;
}

```

在构建后，这两个.button会被转换成不同的唯一类名（例如ComponentA_button_abc和ComponentB_button_def），因此不会相互覆盖。

这样，即使两个不同组件的CSS模块中有相同的类名，也不会产生样式冲突。

## 构建 css编译成单独文件

如果你使用Webpack和CSS模块（CSS Modules），你可以使用MiniCssExtractPlugin插件来将所有的CSS合并到一个单一的CSS文件中。以下是配置的一个基本示例：

首先，你需要安装插件：

```bash
npm install --save-dev mini-css-extract-plugin

```

然后在你的webpack.config.js文件中进行配置：

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // ...其它配置
  module: {
    rules: [
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]'
              },
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      // ...其它规则
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // ...其它插件
  ],
};

```
在这个示例中，我为CSS模块和普通的CSS文件设置了两个不同的规则：

所有以.module.css结尾的文件被认为是CSS模块，并使用相应的配置。
所有其它的.css文件将被当作普通的CSS文件处理。
MiniCssExtractPlugin.loader会把所有的CSS提取到一个文件中。

配置完成后，运行Webpack构建，它会生成一个合并后的CSS文件，你可以在HTML中通过<link>标签引入这个CSS文件。

这样，无论你使用的是CSS模块还是全局CSS，所有的样式都将被合并到一个单一的CSS文件中。

在上面的webpack.config.js示例中，MiniCssExtractPlugin的配置使用了占位符[name]和[id]，这些占位符将根据每个入口点（entry point）或代码块（chunk）来动态生成文件名。

1.filename: '[name].css': 这里的[name]通常是每个入口点（entry point）的名称。例如，如果你在webpack.config.js中有这样的入口配置：

```js
entry: {
  main: './src/index.js',
  vendor: './src/vendor.js'
},

```

2.chunkFilename: '[id].css': 这是用于异步加载（lazy-loaded）的代码块（chunks）的名称。

如果你只有一个入口文件，一般你会得到一个名为main.css的CSS文件。

## 在HTML中引用

1.手动添加：如果你知道生成的CSS文件名，你可以直接在HTML文件的<head>标签内使用<link>标签手动引入。

```html
<link rel="stylesheet" href="path/to/generated/main.css">

```

2.自动添加：你也可以使用Webpack的HtmlWebpackPlugin插件自动将CSS文件引入到HTML中。

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 在plugins数组中添加
plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
  // ...其他插件
],

```

这样，HtmlWebpackPlugin会自动将生成的CSS文件插入到提供的HTML模板中。

通过这些方法，你可以确保正确引入由Webpack生成的CSS文件。
