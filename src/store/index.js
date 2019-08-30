import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import userState from './modules/userState'
import translate from '@/../auto-create-child-project/translate';
               //这行注释不要动1(store)start
 
import haheiState from '@hahei/store';
translate.translateStore('hahei', haheiState);
        
 //这行注释不要动1(store)end               
const store = new Vuex.Store({
    // 在严格模式下，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误
    strict: process.env.NODE_ENV !== 'production',
    state: {},
    modules:{  // 子模块
        userState,
                       //这行注释不要动2(store)start
 
        ...haheiState,
 //这行注释不要动2(store)end               
    },
})
export default store