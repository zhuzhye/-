import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import Notice from "@/components/Notice.vue";
import create from "./utils/create";
// import router from './router'
import router from "./krouter";

// import store from './store'
import store from "./kstore";

Vue.config.productionTip = false;
Vue.prototype.$notice = function( props) {
  const notice = create(Notice, props);
  notice.show();
  return notice
};
// 事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
