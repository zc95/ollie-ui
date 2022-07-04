import Vue from 'vue';
import App from './App.vue';
import router from './router';

import OllieUI from '../src/index.js';
Vue.use(OllieUI);
import '../packages/theme-chalk/src/index.less'; // 此处只是为了方便，实际使用的时候需要引入打包后的css文件

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
