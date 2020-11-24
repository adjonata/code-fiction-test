import Vue from "vue";
import "./components";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSweetalert2 from 'vue-sweetalert2';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);