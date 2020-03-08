import Router from "vue-router";
import home from "pages/home";

let routes = [];
let children = [];
let siblings = [];

// 基础项目相关路由
import baseRoutes from "./base";

children = children.concat(baseRoutes.children || []);
siblings = siblings.concat(baseRoutes.siblings || []);

/* eslint-disable spaced-comment, no-trailing-spaces, indent,no-unused-vars,
import/no-unresolved,import/first,import/order    */
import translate from "utils/translate";
                    //这行注释不要动(router)start
 
        
//这行注释不要动(router)end                    
/* eslint-enable spaced-comment, no-trailing-spaces, indent,no-unused-vars,
import/no-unresolved,import/first,import/order   */
routes = routes.concat([{ path: "/", component: home, children }])
    .concat(siblings)
    .concat([{ path: "*", component: resolve => require(["pages/404"], resolve) }]);
console.log("routes", routes);
export default new Router({
    mode: "history",
    routes,
});