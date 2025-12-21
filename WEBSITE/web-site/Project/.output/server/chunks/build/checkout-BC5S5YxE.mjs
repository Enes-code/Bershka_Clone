import { defineComponent, computed, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useCartStore } from './cart-DK7kCI3h.mjs';
import { u as useOrdersStore } from './orders-DVtkpEVH.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'firebase/firestore';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-99cce9fc><h1 data-v-99cce9fc>CHECKOUT</h1><p data-v-99cce9fc>Bu sayfa Firestore <b data-v-99cce9fc>orders</b> koleksiyonuna yazma yapar.</p><div class="box" data-v-99cce9fc><div data-v-99cce9fc>Toplam: <b data-v-99cce9fc>${ssrInterpolate(unref(total))} TRY</b></div><button${ssrIncludeBooleanAttr(unref(items).length === 0 || unref(loading)) ? " disabled" : ""} data-v-99cce9fc>${ssrInterpolate(unref(loading) ? "\u0130\u015Fleniyor..." : "S\u0130PAR\u0130\u015E OLU\u015ETUR")}</button>`);
      if (unref(lastOrderId)) {
        _push(`<div class="ok" data-v-99cce9fc> Sipari\u015F olu\u015Ftu: <b data-v-99cce9fc>${ssrInterpolate(unref(lastOrderId))}</b></div>`);
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

export { checkout as default };
//# sourceMappingURL=checkout-BC5S5YxE.mjs.map
