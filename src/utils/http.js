import axios from 'axios'

import { getToken } from '@/utils/auth'

import { yc_logout } from 'utils/logout';
import { yc_throttle } from 'utils';

import { message } from 'ant-design-vue';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API || '',
  // 超时
  timeout: 10000,
  validateStatus(status) {
    return true; //意思是,所有状态的都认为正常,自己全权处理异常状态
  }
})
let vue = null;
export function setVue(vueInstance) {
  vue = vueInstance;
}

const CancelToken = axios.CancelToken;
let urlCache = {};
const getKeyByConfig = (config, isRequest = false) => {
    let url = config.url;
    let result = config.method === 'get' ? url + getParamStr(JSON.stringify(config.params)) : config.url + getParamStr(JSON.stringify(config.data));
    //console.log(result)
    return result;
}

function getParamStr(str = '') {
    //console.log(str)
    return str.replace(/[^\w]/g, '');
}

const stopRepeatRequest = function (config, cancel, errorMessage) {
    const errorMsg = errorMessage || '';
    const urlKey = getKeyByConfig(config);
    //console.log('stopRepeatRequest: ',urlKey)
    //console.log('urlkey2-stopRepeatRequest',urlCache)
    if(urlCache[urlKey]) {
        //console.log('走到这里..1.',urlKey)
        cancel(errorMsg)
        return;
    }
    urlCache[urlKey] = true;
}
// request拦截器
service.interceptors.request.use(
  config => {
    //console.log('request', config)
    if(config.url.indexOf('/sso/login')!=-1) {
      //如果是登陆接口,不走下面的统一加token处理
      return config;
    }
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    let cancel;
    config.cancelToken = new CancelToken(function executor(c) {
        cancel = c;
    });
    stopRepeatRequest(config, cancel, `${config.url} 请求被中断`);
    return config;
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(res => {
    //console.log('response', res)
    //接口返回后1秒内,不允许重复请求
    const urlKey = getKeyByConfig(res.config);
    //console.log('response: ',urlKey)
    //console.log('走到这里..2.',urlKey)
    urlCache[urlKey] = false;
    //console.log('CACHE ',urlCache)

    let status = res.status;
    if(status >= 200 && status < 300) { //默认正常情况
        //正常接口请求
        let code = res.data.result;
        if(code == 401) {
            yc_logout();//需要跳转到登陆页
        }else if(code != 1) {//不等于1,接口正常状态下的不正常反馈
            if(res.config.catchError) {//自己处理异常状态,接口有问题也不影响后面程序的执行
                return res.data;
            }else { //默认异常状态都会打断后面程序的执行
                message.destroy();
                message.error(res.data.description);
                return Promise.reject('error')
            }
        }else { //等于1接口正常
            //这里判断一下,默认只返回retValue,如果想都返回,加参数useResWithCode
            if(res.config.useResWithCode) {
                return res.data
            }
            return res.data.retValue;
        }
    }else {
        if(status == 400) {
        //这是请求一个不存在的url的情况
            vue.$store.commit('updateErrorInfo', {
                code: 400,
                desc:'参数列表发生了错误'
            });
        }else if(status == 404) {
            //这是请求一个不存在的url的情况
            vue.$store.commit('updateErrorInfo', {
                code: 404,
                desc:'请求的接口资源不存在'
            });
        }else if(status == 500) {
            vue.$store.commit('updateErrorInfo', {
                code: 500,
                desc:'服务器端错误'
            });
        }else if(status == 504) {
            vue.$store.commit('updateErrorInfo', {
                code: 504,
                desc:'你现在没有网络'
            });
        }
        if(res.config.catchError) {//自己处理异常状态,接口有问题也不影响后面程序的执行
            return res.data;
        }else { //默认异常状态都会打断后面程序的执行
            return Promise.reject('error')
        }
    }
},
error => {
    if (axios.isCancel(error)) {
        console.log(error.message);
        return Promise.reject(error)
    }
    if(/timeout of/.test(error.toString())) {
        message.destroy();
        message.error('接口请求超时');
        return 'apiTimeout';
    }else {
        message.destroy();
        message.error(error.toString());
        return Promise.reject(error)
    }
})

export default service
