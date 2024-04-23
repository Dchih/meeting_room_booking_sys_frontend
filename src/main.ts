import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import antdPlugin from "./antd/registerComponnet";
import { router } from "./router";

const app = createApp(App);
app.use(router);
app.use(antdPlugin);
app.mount("#app");
