// 几个需要注意的细节,get请求时key值为params,post请求时key值为data,建议传进来的变量名与key值保持一致
/**
 * catchError: 自己处理异常状态,接口有问题也不影响后面程序的执行
 * useResWithCode: 默认只返回retValue,如果想都返回,加参数useResWithCode
 */

import http from 'utils/http';
import { getHost } from 'consts';

export function login(opt) {
    return http({
        url:`${getHost()}/sso/login`,
        method: 'post',
        data: opt.query,
        catchError: true, //自己处理错误情况
        useResWithCode: true,
        error: opt.error
    });
}

export function getUserIdentity() {
    return http({
        url:`${getHost()}/sso/api/user/getUserIdentity`,
        method: 'post',
        //useResWithCode: true
    });
}

export function gotoapp(opt) {
    return http({
        url:`${getHost()}/sso/gotoapp`,
        method: 'post',
        data: opt.data,
        //useResWithCode: true
    });
}