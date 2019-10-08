import Vue from 'vue';
import Router from 'vue-router';
import App from './app';
import 'static/reset.css';
import 'static/common.css';

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

import { Button, Icon, Menu } from 'ant-design-vue';
Vue.use(Button);
Vue.use(Icon);
Vue.use(Menu);

Vue.use(Router);

import store from './store';
import router from './router';

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App),
})