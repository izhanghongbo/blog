# 自定义 create-react-app模板


## 文件夹结构

创建一个名为`cra-template-base`的模板,`packgage.json` `template.json`,`gitignore`为必备文件

```bash
cra-template-base
├── README.md
├── package.json
├── template
│   ├── babel.config.js
│   ├── build.sh
│   ├── gitignore
│   ├── rollup.config.js
│   └── src
│       ├── components
│       ├── config.json
│       ├── interfaces
│       │   ├── execute.js
│       │   ├── expand.js
│       │   ├── help.js
│       │   ├── meta.js
│       │   └── startup.js
│       └── utils.js
└── template.json

```

## package.json文件内容

```json
{
  "main": "template.json",
  "name":"test",
  "files": [
   "template",
   "template.json"
  ]
}
```

## template.json文件内容

```json
{
  "package": {
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "prebuild": "rimraf dist",
      "build": "NODE_ENV=production rollup -c"
    },
    "author": "",
    "license": "ISC",
    "peerDependencies": {
      "react": "^16.9.3",
      "react-redux": "^5.0.1",
      "redux": "^4.0.1"
    },
    "devDependencies": {
      "@babel/core": "^7.18.9",
      "@babel/plugin-transform-runtime": "^7.18.9",
      "babel-preset-react-app": "^10.0.1",
      "postcss": "^8.4.14",
      "rollup": "^2.77.0",
      "rollup-plugin-babel": "^4.4.0",
      "rollup-plugin-copy": "^3.4.0",
      "rollup-plugin-postcss": "^4.0.2"
    },
    "dependencies": {
      "@babel/preset-flow": "^7.18.6",
      "@babel/runtime": "^7.18.9",
      "neo4j-driver": "^4.4.7"
    }

  }
}
```

## 根据模板创建项目

```bash
npx  create-react-app test --template file:./cra-template-base
```

{{< codepen id="https://codepen.io/zhang-hongbo/pen/qBoONEX" >}}
