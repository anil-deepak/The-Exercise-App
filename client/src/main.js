import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bulma/css/bulma.css";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

// Vue.use(Buefy);
// Vue.config.productionTip = false;

const app = createApp(App);
app.use(router);
app.mount("#app");
