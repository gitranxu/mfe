import router from './router'
import store from './store'
import { getToken } from '@/utils/auth';
import { yc_logout } from 'utils/logout';
import { sassloginhost } from 'consts';

const whiteList = ['/login', '/auth-redirect', '/bind', '/register','/user-identity-select1','/home', '/cxtest-demo-start']

router.beforeEach((to, from, next) => {
  //这里增加一个根据当前路由
  store.dispatch('setCurrentOneLevelMenuByRoute', to);
  if (getToken()) {
    /* has token*/
    //console.log('123123',getToken());
    console.log('如果有token');
    if (to.path === '/login') {
      //next({ path: '/home/'+getToken() })
      console.log('带着token去登陆页面', to);
      if(location.host == sassloginhost) {
        console.log('在sass服务器上直接去登陆页面')
        next();
      }else {
        console.log('不在sass上去登陆页面')
        yc_logout();
      }
    } else{
      next()
    }
  } else {
    // 没有token
    console.log('没有token',to.path)
    //return;
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      console.log('在免登录白名单，直接进入')
      next()
    }else if(to.meta.auth!==undefined && to.meta.auth == false) {
      //明确定义不需要验证则放行
      console.log('明确定义不需要验证则放行', to.path);
      next();
    } else {
      console.log('重定向到登陆页方法需要重新写');

      yc_logout();
    }
  }
})

router.afterEach(() => {
  //NProgress.done()
})
