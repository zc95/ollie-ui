# ollie-ui

组件库还在搭建中，暂时还不能投入使用！！！

[![stars](https://img.shields.io/github/stars/zc95/ollie-ui?style=flat-square&logo=GitHub)](https://github.com/zc95/ollie-ui)
[![forks](https://img.shields.io/github/forks/zc95/ollie-ui?style=flat-square&logo=GitHub)](https://github.com/zc95/ollie-ui)
[![issues](https://img.shields.io/github/issues/zc95/ollie-ui?style=flat-square&logo=GitHub)](https://github.com/zc95/ollie-ui/issues)
[![license](https://img.shields.io/github/license/zc95/ollie-ui?style=flat-square)](https://en.wikipedia.org/wiki/MIT_License)

ollie-ui 是一个 Vue 移动端 UI 组件库，适合在 vue2.X 技术栈项目中使用。

- 提供 20+ 高质量组件，覆盖移动端各类场景
- 灵活扩展，丰富的属性配置
- 高性能
- 完善的文档和示例
- 支持按需加载
- 移动端适配

## 组件

- [开发中] Button 按钮
- [开发中] Switch 开关
- [开发中] Tag 标签

## 安装

```bash
npm i ollie-ui
```

## 完整引入

```js
import Vue from 'vue';
import App from './App.vue';
import OllieUI from 'ollie-ui';

Vue.use(OllieUI);
import 'ollie-ui/lib/theme-chalk/index.css';

new Vue({
  render: h => h(App)
}).$mount('#app');
```

## 按需引入

### 按需引入方式一：babel-plugin-component

```bash
# 安装插件
npm i babel-plugin-component -D
```

```js
// 可以在 babel.config.js 中配置
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "ollie-ui",
        "style": false
      }
    ]
  ]
}
```

### 按需引入方式二：babel-plugin-import

```bash
# 安装插件
npm i babel-plugin-import -D
```

```js
// 在.babelrc 中添加配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "ollie-ui",
      "libraryDirectory": "lib",
      "style": false
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'ollie-ui',
      libraryDirectory: 'lib',
      style: false
    }, 'ollie-ui']
  ]
};
```

### 引入所需组件

接下来，如果你只希望引入部分组件，比如 Button 和 TabBar，那么需要在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import App from './App.vue';
import { Button, TabBar } from 'ollie-ui';

Vue.use(Button);
Vue.use(TabBar);

new Vue({
  render: h => h(App)
}).$mount('#app');
```

或者你只想在某个页面单独引入：

```html
<template>
  <div>
    <o-button></o-button>
  </div>
</template>

<script>
import { Button } from 'ollie-ui';

export default {
  components: {
    'ol-button': Button
  }
};
</script>
```
