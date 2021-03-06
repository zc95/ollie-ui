/* Automatically generated by './build/bin/build-entry.js' */

import Button from '../packages/button/index.js';
import Switch from '../packages/switch/index.js';
import Tag from '../packages/tag/index.js';

const components = [Button, Switch, Tag];

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
  version: '1.0.5',
  install,
  Button,
  Switch,
  Tag
};
