import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createVfm } from "vue-final-modal";
import "./style.css";
import App from "./App.vue";
import "./style/index.css";
import "./assets/main.css";
import "vue-final-modal/style.css";
import { createMetaManager } from "vue-meta";

import { router } from "./router";

export const createApp = ViteSSG(App, { routes: router }, ({ app }) => {
    const metaManager = createMetaManager();
    app.use(metaManager);
    const pinia = createPinia();
    pinia.use(piniaPluginPersistedstate);
    app.use(pinia);
    app.use(createVfm());
});
