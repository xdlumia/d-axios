/*
 * @Author: web.王晓冬
 * @Date: 2020-03-17 17:49:21
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-08-11 09:55:30
 * @Description: file content
 */

import api from './api';


const dAxios = function (Vue, opts = {}) {
  Vue.prototype.$api = api;
};
export {dAxios,api};
