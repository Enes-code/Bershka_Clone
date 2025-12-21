import { defineComponent, computed, ref, watchEffect, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/hookable/dist/index.mjs";
import { d as defineStore, u as useNuxtApp, a as useRoute, _ as _export_sfc } from "../server.mjs";
import { doc, getDoc, query, collection, where, getDocs } from "firebase/firestore";
import { u as useCartStore } from "./cart-DK7kCI3h.js";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/unctx/dist/index.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/radix3/dist/index.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/defu/dist/defu.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/ufo/dist/index.mjs";
import "C:/Users/MSi/Documents/GitHub/Bershka_Clone/WEBSITE/web-site/Project/node_modules/klona/dist/index.mjs";
const useProductsStore = defineStore("products", {
  state: () => ({
    items: [],
    active: null
  }),
  actions: {
    async fetchByGender(gender) {
      const { $db } = useNuxtApp();
      const q = query(collection($db, "products"), where("gender", "==", gender));
      const snap = await getDocs(q);
      this.items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    },
    async fetchByCategory(categorySlug) {
      const { $db } = useNuxtApp();
      const q = query(collection($db, "products"), where("categorySlug", "==", categorySlug));
      const snap = await getDocs(q);
      this.items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    },
    async fetchOne(id) {
      const { $db } = useNuxtApp();
      const ref2 = doc($db, "products", id);
      const snap = await getDoc(ref2);
      this.active = snap.exists() ? { id: snap.id, ...snap.data() } : null;
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const productsStore = useProductsStore();
    useCartStore();
    const id = computed(() => String(route.params.id || ""));
    const p = computed(() => productsStore.active);
    const sizes = ["XS", "S", "M", "L", "XL"];
    const size = ref("M");
    watchEffect(async () => {
      if (id.value) await productsStore.fetchOne(id.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(p)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap" }, _attrs))} data-v-df2f0852><div class="cols" data-v-df2f0852><img class="img"${ssrRenderAttr("src", unref(p).imageUrl)}${ssrRenderAttr("alt", unref(p).title)} data-v-df2f0852><div class="info" data-v-df2f0852><h1 class="t" data-v-df2f0852>${ssrInterpolate(unref(p).title)}</h1><div class="price" data-v-df2f0852>${ssrInterpolate(unref(p).price)} ${ssrInterpolate(unref(p).currency)}</div><div class="sizes" data-v-df2f0852><div class="label" data-v-df2f0852>BEDEN</div><div class="row" data-v-df2f0852><!--[-->`);
        ssrRenderList(sizes, (s) => {
          _push(`<button class="${ssrRenderClass([{ active: unref(size) === s }, "size"])}" data-v-df2f0852>${ssrInterpolate(s)}</button>`);
        });
        _push(`<!--]--></div></div><button class="add" data-v-df2f0852>SEPETE EKLE</button></div></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap" }, _attrs))} data-v-df2f0852>Ürün bulunamadı.</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-df2f0852"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-BMs8p-xe.js.map
