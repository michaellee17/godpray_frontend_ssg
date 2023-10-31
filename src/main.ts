import { ViteSSG } from "vite-ssg";
import "./style.css";
import App from "./App.vue";

import { router } from "./router";

export const createApp = ViteSSG(App, { routes: router });
