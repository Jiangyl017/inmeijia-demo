// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import router from "./router";
//使用rem适配不同屏
import remCalc from "@/assets/js/rem.js";
remCalc(750, 750);

import { AlertPlugin } from "vux";
Vue.use(AlertPlugin);

//fastclick解决移动端点击延迟
import FastClick from "fastclick";
FastClick.attach(document.body);

//vux的ajax组件基于axios
import { AjaxPlugin } from "vux";
Vue.use(AjaxPlugin);
Vue.http.defaults.timeout = 5000;
Vue.http.defaults.baseURL = "http://www.inmeijia.com/api/";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app-box");
