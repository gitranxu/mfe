import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import userState from './modules/userState'
const store = new Vuex.Store({
    // 在严格模式下，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误
    strict: process.env.NODE_ENV !== 'production',
    state: {},
    modules:{  // 子模块
        userState                                             
    },
})
export default store