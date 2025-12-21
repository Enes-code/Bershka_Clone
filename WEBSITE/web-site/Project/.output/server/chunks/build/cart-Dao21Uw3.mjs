import { _ as __nuxt_component_0 } from './nuxt-link-vLfwZMRZ.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useCartStore } from './cart-DK7kCI3h.mjs';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cart2 = useCartStore();
    const items = computed(() => cart2.items);
    const total = computed(() => cart2.total);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap" }, _attrs))} data-v-e0b098a4><h1 class="title" data-v-e0b098a4>SEPET</h1>`);
      if (unref(items).length === 0) {
        _push(`<div data-v-e0b098a4>Sepet bo\u015F.</div>`);
      } else {
        _push(`<div class="list" data-v-e0b098a4><!--[-->`);
        ssrRenderList(unref(items), (it) => {
          _push(`<div class="row" data-v-e0b098a4><img${ssrRenderAttr("src", it.imageUrl)} class="img" data-v-e0b098a4><div class="info" data-v-e0b098a4><div class="t" data-v-e0b098a4>${ssrInterpolate(it.title)}</div><div class="p" data-v-e0b098a4>${ssrInterpolate(it.price)} ${ssrInterpolate(it.currency)}</div><div class="q" data-v-e0b098a4><button data-v-e0b098a4>-</button><span data-v-e0b098a4>${ssrInterpolate(it.qty)}</span><button data-v-e0b098a4>+</button></div></div></div>`);
        });
        _push(`<!--]--><div class="total" data-v-e0b098a4>Toplam: ${ssrInterpolate(unref(total))} TRY</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "go",
          to: "/checkout"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\xD6DEMEYE G\u0130T`);
            } else {
              return [
                createTextVNode("\xD6DEMEYE G\u0130T")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0b098a4"]]);

export { cart as default };
//# sourceMappingURL=cart-Dao21Uw3.mjs.map
