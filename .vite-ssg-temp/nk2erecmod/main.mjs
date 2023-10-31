import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createVfm } from "vue-final-modal";
import { defineComponent, ref, useSSRContext, resolveComponent } from "vue";
import { ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { createMetaManager } from "vue-meta";
const style$1 = "";
const _imports_0 = "/gc_godpray_frontend/vite.svg";
const _imports_1 = "/gc_godpray_frontend/assets/vue-5532db34.svg";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HelloWorld",
  __ssrInlineRender: true,
  props: {
    msg: {}
  },
  setup(__props) {
    const count = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 data-v-1d5be6d4>${ssrInterpolate(_ctx.msg)}</h1><div class="card" data-v-1d5be6d4><button type="button" data-v-1d5be6d4>count is ${ssrInterpolate(count.value)}</button><p data-v-1d5be6d4> Edit <code data-v-1d5be6d4>components/HelloWorld.vue</code> to test HMR </p></div><p data-v-1d5be6d4> Check out <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" data-v-1d5be6d4>create-vue</a>, the official Vue + Vite starter </p><p data-v-1d5be6d4> Install <a href="https://github.com/vuejs/language-tools" target="_blank" data-v-1d5be6d4>Volar</a> in your IDE for a better DX </p><p class="read-the-docs" data-v-1d5be6d4>Click on the Vite and Vue logos to learn more</p><!--]-->`);
    };
  }
});
const HelloWorld_vue_vue_type_style_index_0_scoped_1d5be6d4_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HelloWorld.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1d5be6d4"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<!--[--><div data-v-d86cdd96>`);
      _push(ssrRenderComponent(_component_router_view, {
        key: _ctx.$route.path
      }, null, _parent));
      _push(`<a href="https://vitejs.dev" target="_blank" data-v-d86cdd96><img${ssrRenderAttr("src", _imports_0)} class="logo" alt="Vite logo" data-v-d86cdd96></a><a href="https://vuejs.org/" target="_blank" data-v-d86cdd96><img${ssrRenderAttr("src", _imports_1)} class="logo vue" alt="Vue logo" data-v-d86cdd96></a></div>`);
      _push(ssrRenderComponent(HelloWorld, { msg: "Vite + Vue" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const App_vue_vue_type_style_index_0_scoped_d86cdd96_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d86cdd96"]]);
const index = "";
const main = "";
const style = "";
const router = [
  {
    path: "/home1",
    name: "home",
    component: () => import("./assets/Home-d2995109.js")
  },
  {
    path: "/home2",
    name: "home2",
    component: () => import("./assets/Home2-36e810fc.js")
  }
];
const createApp = ViteSSG(App, { routes: router }, ({ app }) => {
  const metaManager = createMetaManager();
  app.use(metaManager);
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate);
  app.use(pinia);
  app.use(createVfm());
});
export {
  _export_sfc as _,
  createApp
};
