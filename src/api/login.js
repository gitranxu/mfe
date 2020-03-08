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