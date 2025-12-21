import { _ as __nuxt_component_0 } from "./nuxt-link-vLfwZMRZ.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/ufo/dist/index.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/hookable/dist/index.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/unctx/dist/index.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/radix3/dist/index.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/defu/dist/defu.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/klona/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap" }, _attrs))} data-v-f21f337c><header class="top" data-v-f21f337c>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "brand"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BERSHKA`);
      } else {
        return [
          createTextVNode("BERSHKA")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="title" data-v-f21f337c>CHECKOUT</div></header><main class="main" data-v-f21f337c>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f21f337c"]]);
export {
  checkout as default
};
//# sourceMappingURL=checkout-CwXdqkaP.js.map
