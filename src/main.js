import "./assets/style.css";
import './style.css'
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import Card from "primevue/card";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Menubar from "primevue/menubar";
import InputSwitch from "primevue/inputswitch";
import FloatLabel from "primevue/floatlabel";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";


import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import router from "./router/index.js";
import Image from "primevue/image";

import {createPinia} from "pinia";

app.use(router);

app.use(PrimeVue);

app.component("pv-toast", Toast);
app.component("pv-button", Button);
app.component("pv-card", Card);
app.component("pv-toolbar", Toolbar);
app.component("pv-menubar", Menubar);
app.component("pv-inputswitch", InputSwitch);
app.component("pv-image", Image);
app.component('pv-float-label', FloatLabel);
app.component('pv-input-text', InputText)

// Pinia
const pinia = createPinia();
app.use(pinia);

app.mount("#app");
