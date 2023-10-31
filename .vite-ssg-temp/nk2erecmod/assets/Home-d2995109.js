import { useHead } from "@unhead/vue";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Website Title",
      meta: [
        {
          name: "description",
          content: "Website description"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`123`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
