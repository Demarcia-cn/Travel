/*
 * @Description: main.js
 * @Author: Looper
 * @Date: 2020-06-20 20:05:30
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-20 20:22:24
 * @FilePath: /Travel/src/main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueAwesomeSwiper from "vue-awesome-swiper";
import store from "./store";

import "styles/reset.css";
import "styles/border.css";
import "styles/iconfont.css";

// require styles
import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
