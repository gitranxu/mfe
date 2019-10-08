import Router from "vue-router";
let routes = [],
    children = [],
    siblings = [];
import index from 'pages/index';

//基础项目相关路由
import baseRoutes from './base';
children = children.concat(baseRoutes.children || []);
siblings = siblings.concat(baseRoutes.siblings || []);   

import translate from '@/../auto-create-child-project/translate';
                    //这行注释不要动(router)start
 
        
 //这行注释不要动(router)end                    

routes = routes.concat([{path: '/',component: index,children: children}])
                .concat(siblings)
                .concat([{path: '*',component: resolve => require(['pages/404'], resolve)}]);
console.log('routes', routes);
export default new Router({
    mode: 'history',
    // scrollBehavior (to, from, savedPosition) {
	//     return { x: 0, y: 0 }
	// },
    routes: routes
})