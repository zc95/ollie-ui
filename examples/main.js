import Vue from 'vue';
import App from './App.vue';
import router from './router';
import OllieUI from '../src/index.js';

Vue.use(OllieUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
