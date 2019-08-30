//几个需要注意的细节,get请求时key值为params,post请求时key值为data,建议传进来的变量名与key值保持一致
//如果有useResWithCode,则可以看到接口返回的状态码,可以自己进行错误处理.默认统一处理.
//loadingDom的值为vue单文件的最外层的dom的jquery化.即传入$('.xxClassName')

import http from 'api/http'
let host = process.env.NODE_ENV == 'development' ? '/dev' : '/prod';
export const api_getPageLayout = (opt) => {
   return http({
       url: `${host}/newWeb/data/gateway/selectLayoutJson.do`,
       method: 'get',
       params: opt.params,
       loadingDom: opt.loadingDom
   });
}
export const api_saveOrUpdateSiteLayout = (opt) => {
   return http({
       url: `${host}/newWeb/data/gateway/api_saveOrUpdateSiteLayout.do`,
       method: 'post',
       data: opt.data,
       useResWithCode: true,
       loadingDom: opt.loadingDom
   });
}