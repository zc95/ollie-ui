# walle-ui

组件库还在搭建中，暂时还不能投入使用！！！

[![stars](https://img.shields.io/github/stars/zc95/walle-ui?style=flat-square&logo=GitHub)](https://github.com/zc95/walle-ui)
[![forks](https://img.shields.io/github/forks/zc95/walle-ui?style=flat-square&logo=GitHub)](https://github.com/zc95/walle-ui)
[![issues](https://img.shields.io/github/issues/zc95/walle-ui?style=flat-square&logo=GitHub)](https://github.com/zc95/walle-ui/issues)
[![license](https://img.shields.io/github/license/zc95/walle-ui?style=flat-square)](https://en.wikipedia.org/wiki/MIT_License)

walle-ui 是一个 Vue 移动端 UI 组件库，适合在 vue2.X 技术栈项目中使用。

- 提供 20+ 高质量组件，覆盖移动端各类场景
- 灵活扩展，丰富的属性配置
- 高性能
- 完善的文档和示例
- 支持按需加载
- 移动端适配
- 主题色配置

## 组件

- [开发中] Button 按钮
- [开发中] Popup 弹出层
- [开发中] Dialog 模态窗
- [开发中] ActionSheet 动作面板
- [开发中] TabBar 选项卡

## 安装

```bash
npm i walle-ui
```

## 完整引入

```js
import Vue from 'vue';
import App from './App.vue';
import WalleUI from 'walle-ui';

Vue.use(WalleUI);

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
        "libraryName": "walle-ui",
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
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
```

### 引入所需组件

接下来，如果你只希望引入部分组件，比如 Button 和 TabBar，那么需要在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import App from './App.vue';
import { Button, TabBar } from 'walle-ui';

Vue.use(Button);
Vue.use(TabBar);

new Vue({
  render: h => h(App)
}).$mount('#app');
```
