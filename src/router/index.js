import Router from "vue-router";
let routes = [],
    children = [],
    siblings = [];
import home from 'pages/home';

//基础项目相关路由
import baseRoutes from './base';
children = children.concat(baseRoutes.children || []);
siblings = siblings.concat(baseRoutes.siblings || []);   


routes = routes.concat([{path: '/',component: home,children: children}])
                .concat(siblings)
                .concat([{path: '*',component: resolve => require(['pages/404'], resolve)}]);
console.log('routes', routes);
export default new Router({
    routes: routes
})