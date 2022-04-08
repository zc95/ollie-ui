import Vue from 'vue';
import App from './App.vue';
import router from './router';
import WalleUI from '../src/index.js';

Vue.use(WalleUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
