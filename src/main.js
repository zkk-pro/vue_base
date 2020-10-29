import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import toast from "./components/common/Toast";
import "./utils/setRootFontSize";
import "normalize.css";

Vue.use(toast);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
