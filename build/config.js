// 一些配置

var path = require('path');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

var externals = {};

Object.keys(Components).forEach(function (key) {
  externals[`walle-ui/packages/${key}`] = `walle-ui/lib/${key}`;
});

externals = [
  Object.assign(
    {
      vue: 'vue'
    },
    externals
  ),
  nodeExternals()
];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'walle-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
