var fs = require('fs');
var path = require('path');
var Components = require('../../components.json');
var themes = ['theme-chalk'];
Components = Object.keys(Components);
var basepath = path.resolve(__dirname, '../../packages/');

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

themes.forEach(theme => {
  var isLESS = theme !== 'theme-default';
  var indexContent = isLESS ? '@import "./base.less";\n' : '@import "./base.css";\n';
  Components.forEach(function (key) {
    if (['icon', 'option', 'option-group'].indexOf(key) > -1) return;
    var fileName = key + (isLESS ? '.less' : '.css');
    indexContent += '@import "./' + fileName + '";\n';
    var filePath = path.resolve(basepath, theme, 'src', fileName);
    if (!fileExists(filePath)) {
      fs.writeFileSync(filePath, '', 'utf8');
      console.log(theme, ' 创建遗漏的 ', fileName, ' 文件');
    }
  });
  fs.writeFileSync(path.resolve(basepath, theme, 'src', isLESS ? 'index.less' : 'index.css'), indexContent);
});
