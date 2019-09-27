//配置
//关闭的子项目的配置文件不会引入到整体项目中.
let closedProjectList = ['yc-test']; //关闭子项目列表
let childProjectPrefix = 'yc';//子项目前缀
module.exports = {
    isProjectClosed: function(projectName) {
        return closedProjectList.includes(projectName);
    },
    childProjectPrefix
}