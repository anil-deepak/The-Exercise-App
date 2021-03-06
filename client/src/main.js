import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bulma/css/bulma.css";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.config.productionTip = false;

axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch("LogOut");
      return router.push("/login");
    }
  }
});

Vue.use(Buefy);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
