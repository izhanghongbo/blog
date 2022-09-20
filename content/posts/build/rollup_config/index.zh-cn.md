---
title: "Rollup配置"
date: 2022-09-15T14:15:06+08:00
draft: false
tags: ["Build"]
categories: ["Build"]
resources:
- name: "featured-image"
  src: "banner.jpeg"
---

## 编译文件

`rollup.config.js`
```js 
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import fs from "fs";

let components = fs.readdirSync("./src/components");
let interfaces = fs.readdirSync("./src/interfaces");
interfaces = interfaces.map((filename) => {
  return {
    input: `./src/interfaces/${filename}`,
    output: {
      file: `dist/interfaces/${filename}`,
      format: "cjs",
    },
    plugins: [babel({ runtimeHelpers: true })],
  };
});
components = components.map((filename) => {
  return {
    input: `./src/components/${filename}`,
    output: {
      file: `dist/components/${filename}`,
      format: "cjs",
    },
    plugins: [
      babel({ runtimeHelpers: true }),
      postcss({ extract: false, inject: true }),]
  };
});

let config = [{
  input:"./src/interfaces/startup.js",
  plugins: copy({
    targets: [{ src: "./src/config.json", dest: "./dist/" }
    ]
  })
}]
let configs = [...interfaces, ...components].concat(config)

export default config
```

