import TabBar from './src/tab-bar.vue';

TabBar.install = function (Vue) {
  Vue.component(TabBar.name, TabBar);
};

export default TabBar;
