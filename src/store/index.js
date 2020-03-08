import Vue from "vue";
import Vuex from "vuex";
import createVuexAlong from "vuex-along";
import userState from "./modules/userState";


Vue.use(Vuex);
/* eslint-disable spaced-comment, no-trailing-spaces, indent,no-unused-vars,
import/no-unresolved,import/first,import/order    */
import translate from "utils/translate";
                //这行注释不要动1(store)start
 
        
 //这行注释不要动1(store)end
/* eslint-enable spaced-comment, no-trailing-spaces, indent,no-unused-vars,
import/no-unresolved,import/first,import/order   */
const store = new Vuex.Store({
    // 在严格模式下，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误
    strict: process.env.NODE_ENV !== "production",
    state: {},
    modules: { // 子模块
        userState,
/* eslint-disable spaced-comment, no-trailing-spaces, indent,no-unused-vars,
import/no-unresolved,import/first,import/order    */
                        //这行注释不要动2(store)start
 
 //这行注释不要动2(store)end
        /* eslint-enable spaced-comment, no-trailing-spaces, indent,no-unused-vars,
import/no-unresolved,import/first,import/order   */
    },
    plugins: [
        createVuexAlong({
            local: {
                list: ["userState"], // 过滤模块 ma 数据， 将其他的存入 localStorage
                isFilter: true,
            },
        }),
    ],
});
export default store;