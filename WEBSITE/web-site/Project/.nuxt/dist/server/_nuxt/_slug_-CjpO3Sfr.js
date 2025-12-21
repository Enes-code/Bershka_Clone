import { defineComponent, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/hookable/dist/index.mjs";
import { a as useRoute } from "../server.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/unctx/dist/index.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/radix3/dist/index.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/defu/dist/defu.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/ufo/dist/index.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/klona/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = computed(() => String(route.params.slug || ""));
    const title = computed(() => {
      if (slug.value === "kadin") return "KADIN";
      if (slug.value === "erkek") return "ERKEK";
      return slug.value.toUpperCase();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "padding": "24px" } }, _attrs))}>${ssrInterpolate(unref(title))} sayfası</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-CjpO3Sfr.js.map
