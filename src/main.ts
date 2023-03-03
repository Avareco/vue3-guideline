import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";

import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/dist/quasar.css";

import App from "./App.vue";
import { Dialog, Notify, Quasar } from "quasar";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: { Dialog, Notify }
});
app.mount("#app");
