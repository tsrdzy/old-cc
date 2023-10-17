import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import "@/assets/css/base.css";
import "@/../public/font/iconfont/iconfont.css";

// import "@/../public/css/yaml.css";
// import "highlight.js/styles/agate.css"
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";

createApp(App).use(hljsVuePlugin).use(store).mount("#app");
