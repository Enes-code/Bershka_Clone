import { defineComponent, computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/hookable/dist/index.mjs";
import { u as useCartStore } from "./cart-DK7kCI3h.js";
import { u as useOrdersStore } from "./orders-DVtkpEVH.js";
import { _ as _export_sfc } from "../server.mjs";
import "firebase/firestore";
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
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = useCartStore();
    const orders = useOrdersStore();
    const items = computed(() => cart.items);
    const total = computed(() => cart.total);
    const lastOrderId = computed(() => orders.lastOrderId);
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-99cce9fc><h1 data-v-99cce9fc>CHECKOUT</h1><p data-v-99cce9fc>Bu sayfa Firestore <b data-v-99cce9fc>orders</b> koleksiyonuna yazma yapar.</p><div class="box" data-v-99cce9fc><div data-v-99cce9fc>Toplam: <b data-v-99cce9fc>${ssrInterpolate(unref(total))} TRY</b></div><button${ssrIncludeBooleanAttr(unref(items).length === 0 || unref(loading)) ? " disabled" : ""} data-v-99cce9fc>${ssrInterpolate(unref(loading) ? "İşleniyor..." : "SİPARİŞ OLUŞTUR")}</button>`);
      if (unref(lastOrderId)) {
        _push(`<div class="ok" data-v-99cce9fc> Sipariş oluştu: <b data-v-99cce9fc>${ssrInterpolate(unref(lastOrderId))}</b></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-99cce9fc"]]);
export {
  checkout as default
};
//# sourceMappingURL=checkout-BC5S5YxE.js.map
