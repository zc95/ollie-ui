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

目前组件库已发布一期组件的测试版本，还在快速迭代，注意留意版本变化

```bash
npm i walle-ui
```

## 基础使用

```js
import Vue from 'vue';
import App from './App.vue';

import WalleUI from 'walle-ui';
Vue.use(WalleUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
```
