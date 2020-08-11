/*
 * @Author: web.王晓冬
 * @Date: 2020-03-19 10:29:17
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-08-11 09:55:48
 * @Description: file content
 */
import Vue from 'vue';
import App from './App.vue';


import {dAxios} from '../package/index';

Vue.use(dAxios);
import './api'
new Vue({
  render: (h) => h(App),
}).$mount('#app');
