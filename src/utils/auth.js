import VueCookie from 'vue-cookie';
//console.log('VueCookie123',VueCookie);
import Vue from 'vue';
Vue.use(VueCookie)

import { cookieDomain } from 'consts';

const TokenKey = 'yc-jcpt-token';

export function getToken() {
  return Vue.cookie.get(TokenKey)
}

export function setToken(token, opt = {}) {
  return Vue.cookie.set(TokenKey, token, Object.assign({
    domain: cookieDomain
  }, opt))
}

export function removeToken() {
  //console.log(Vue.cookie);
  return Vue.cookie.delete(TokenKey, {domain: cookieDomain})
}

export function setCookie(name, val, opt = {}) {
  console.log('种cookie');
  return Vue.cookie.set(name, val, Object.assign({
    domain: cookieDomain
  }, opt))
}

export function getCookie(name) {
  return Vue.cookie.get(name)
}

export function removeCookie(name) {
  return Vue.cookie.delete(name, {domain: cookieDomain})
}
