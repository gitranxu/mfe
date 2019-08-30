//配置
//关闭的子项目的配置文件不会引入到整体项目中.
let closedProjectList = ['jsy-test']; //关闭子项目列表
let childProjectPrefix = 'jsy';//子项目前缀
let baseProjectName = 'jsyxx';
module.exports = {
    isProjectClosed: function(projectName) {
        return closedProjectList.includes(projectName);
    },
    childProjectPrefix,
    baseProjectName
}