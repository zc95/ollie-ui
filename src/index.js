import Button from '../packages/button/index';
import TabBar from '../packages/tab-bar/index';

const components = [Button, TabBar];

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  TabBar
};
