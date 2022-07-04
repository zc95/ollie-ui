// 根据packages下的目录自动生成文件：components.json

const { readdirSync, statSync, writeFileSync, appendFileSync } = require('fs');
const chalk = require('chalk');
const path = require('path');

const pkgPath = path.resolve(__dirname, '../../packages/'); // packages路径
const comJsonPath = path.resolve(__dirname, '../../components.json'); // components.json路径

async function generate(dirpath) {
  const componentMap = {};

  // 获取 packages 下的所有目录
  let dir = readdirSync(dirpath);

  // 遍历 packages 下的所有目录
  console.log(chalk.magenta('正在读取 packages/ 下的所有目录...'));

  // 过滤掉样式文件夹
  dir = dir.filter(item => item != 'theme-chalk');

  // 遍历写入
  for await (const dirent of dir) {
    let filePath = path.resolve(dirpath, dirent);

    if (statSync(filePath).isDirectory()) {
      componentMap[dirent] = `./packages/${dirent}/index.js`;
      console.log(chalk.green(dirent));
    }
  }

  // 将json写入文件
  writeFileSync(comJsonPath, JSON.stringify(componentMap, null, 2));

  // 文末追加一个换行，避免lint报错
  appendFileSync(comJsonPath, '\n');

  console.log(chalk.magenta(`components.json 生成完毕，共${Object.keys(componentMap).length}个组件。`));
}

generate(pkgPath);
