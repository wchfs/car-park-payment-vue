import { createApp } from "vue";
import App from "./App.vue";
import VueGeolocation from 'vue-browser-geolocation';
import "./assets/main.css";
const app = createApp(App);
app.mount("#app");
app.use(VueGeolocation);
