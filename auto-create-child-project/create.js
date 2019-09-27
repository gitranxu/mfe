//创建项目之前的一些必要检查
//在sub-projects文件夹下创建一个新的子项目,仅仅是创建
//PROJECTNAME=gmoa-study npm run createProject
let fs = require('fs');
const path = require('path');
let util = require('./util.js');
let config = require('./config.js');
let projectName = process.argv[process.argv.length - 1]; //yc-portal
console.log('projectName---', projectName);
let isProjectNameMatch = util.getProjectNameRegExp().test(projectName);
if(!isProjectNameMatch) {
    console.log(`当前项目名称 ${projectName} 格式不符,格式应该为[${config.childProjectPrefix}-xxx],即${config.childProjectPrefix}-开关,后跟子项目名称.`);
    return;
}
let projectNameNoPrefix = util.getProjectNameRegExp().exec(projectName)[1];
let projectCreatePath = path.resolve(__dirname, '../src/sub-projects/');
let projectRootPath = projectCreatePath + '/' + projectName; // sub-projects/yc-haha
let projectSrcPath = projectRootPath + '/src';  // sub-projects/yc-haha/src

//console.log('aaaaaaa', path.resolve(__dirname));
let createProcessObj = require('./create-process.js');
fs.exists(projectRootPath, function(exists) {
    if(!exists) {
        createProcessObj.createProject({
            projectSrcPath,
            projectRootPath,
            projectNameNoPrefix,
            projectName
        });
    }else {
        console.log(`${projectName}已存在,不能重复创建`);
    }
});