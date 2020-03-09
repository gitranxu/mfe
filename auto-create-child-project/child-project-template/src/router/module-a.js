// 模块a的相关路由
// 注意:路由一定加上子项目名称作为前缀,多单词之间中划线,全小写!
export default {
    children: [
        {
            path: "/demo-start",
            component: resolve => require(["[[projectName]]-utils/standard"], resolve),
        },
        {
            path: "/demo-base",
            component: resolve => require(["[[projectName]]-pages/demo/base"], resolve),
        },
        {
            path: "/demo-vuex",
            component: resolve => require(["[[projectName]]-pages/demo/vuex"], resolve),
        },
    ],
};