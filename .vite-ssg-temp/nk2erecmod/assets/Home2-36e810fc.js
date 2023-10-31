import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../main.mjs";
import "vite-ssg";
import "pinia";
import "pinia-plugin-persistedstate";
import "vue-final-modal";
import "vue/server-renderer";
import "vue-meta";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`123`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Home2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Home2 as default
};
