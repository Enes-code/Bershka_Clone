import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const featuredProducts = ref([
      { id: 1, name: "Oversize Ti\u015F\xF6rt", price: "299", originalPrice: "599", sale: true },
      { id: 2, name: "Kot Ceket", price: "899", originalPrice: null, sale: false },
      { id: 3, name: "Slim Fit Pantolon", price: "499", originalPrice: "799", sale: true },
      { id: 4, name: "Kad\u0131n Elbise", price: "699", originalPrice: null, sale: false },
      { id: 5, name: "Sneaker", price: "1299", originalPrice: "1999", sale: true },
      { id: 6, name: "\xC7anta", price: "599", originalPrice: null, sale: false }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "homepage-content" }, _attrs))} data-v-1fa7599f><div class="sale-banner" data-v-1fa7599f><div class="container" data-v-1fa7599f><a href="#" class="sale-link" data-v-1fa7599f><span class="sale-text" data-v-1fa7599f>SALE</span><span class="sale-subtext" data-v-1fa7599f>50%&#39;ye varan indirimler</span></a></div></div><section class="hero-section" data-v-1fa7599f><div class="hero-slider" data-v-1fa7599f><div class="hero-slide active" data-v-1fa7599f><div class="hero-content" data-v-1fa7599f><h1 class="hero-title" data-v-1fa7599f>MORA BIR ADIM \xD6NE GE\xC7</h1><p class="hero-subtitle" data-v-1fa7599f>Yeni koleksiyonu ke\u015Ffet</p><a href="#" class="hero-btn" data-v-1fa7599f>ALI\u015EVER\u0130\u015EE BA\u015ELA</a></div><div class="hero-image" data-v-1fa7599f><div class="image-placeholder" data-v-1fa7599f></div></div></div></div></section><section class="category-section" data-v-1fa7599f><div class="container" data-v-1fa7599f><div class="category-grid" data-v-1fa7599f><a href="#" class="category-card" data-v-1fa7599f><div class="category-image" data-v-1fa7599f><div class="placeholder-img" data-v-1fa7599f></div></div><div class="category-info" data-v-1fa7599f><h3 class="category-title" data-v-1fa7599f>YEN\u0130 GELENLER</h3><p class="category-desc" data-v-1fa7599f>T\xFCm \xFCr\xFCnler</p></div></a><a href="#" class="category-card" data-v-1fa7599f><div class="category-image" data-v-1fa7599f><div class="placeholder-img" data-v-1fa7599f></div></div><div class="category-info" data-v-1fa7599f><h3 class="category-title" data-v-1fa7599f>KOZMET\u0130K</h3><p class="category-desc" data-v-1fa7599f>Yeni \xFCr\xFCnler</p></div></a><a href="#" class="category-card" data-v-1fa7599f><div class="category-image" data-v-1fa7599f><div class="placeholder-img" data-v-1fa7599f></div></div><div class="category-info" data-v-1fa7599f><h3 class="category-title" data-v-1fa7599f>G\u0130Y\u0130M</h3><p class="category-desc" data-v-1fa7599f>T\xFCm \xFCr\xFCnler</p></div></a><a href="#" class="category-card" data-v-1fa7599f><div class="category-image" data-v-1fa7599f><div class="placeholder-img" data-v-1fa7599f></div></div><div class="category-info" data-v-1fa7599f><h3 class="category-title" data-v-1fa7599f>AYAKKABI &amp; \xC7ANTA</h3><p class="category-desc" data-v-1fa7599f>T\xFCm \xFCr\xFCnler</p></div></a></div></div></section><section class="product-section" data-v-1fa7599f><div class="container" data-v-1fa7599f><h2 class="section-title" data-v-1fa7599f>\xD6NE \xC7IKANLAR</h2><div class="product-grid" data-v-1fa7599f><!--[-->`);
      ssrRenderList(unref(featuredProducts), (product) => {
        _push(`<div class="product-card" data-v-1fa7599f><div class="product-image" data-v-1fa7599f><div class="image-placeholder" data-v-1fa7599f></div><button class="wishlist-btn" data-v-1fa7599f><svg width="20" height="20" viewBox="0 0 20 20" fill="none" data-v-1fa7599f><path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="currentColor" data-v-1fa7599f></path></svg></button>`);
        if (product.sale) {
          _push(`<div class="product-badge" data-v-1fa7599f>SALE</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="product-info" data-v-1fa7599f><h3 class="product-name" data-v-1fa7599f>${ssrInterpolate(product.name)}</h3><div class="product-price" data-v-1fa7599f><span class="current-price" data-v-1fa7599f>${ssrInterpolate(product.price)} \u20BA</span>`);
        if (product.originalPrice) {
          _push(`<span class="old-price" data-v-1fa7599f>${ssrInterpolate(product.originalPrice)} \u20BA</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="newsletter-section" data-v-1fa7599f><div class="container" data-v-1fa7599f><div class="newsletter-content" data-v-1fa7599f><h2 class="newsletter-title" data-v-1fa7599f>B\u0130ZE KATILIN</h2><p class="newsletter-desc" data-v-1fa7599f>Yeniliklerden haberdar olun ve ilk f\u0131rsatlar\u0131 ka\xE7\u0131rmay\u0131n</p><div class="newsletter-form" data-v-1fa7599f><input type="email" placeholder="E-posta adresiniz" class="newsletter-input" data-v-1fa7599f><button class="newsletter-btn" data-v-1fa7599f>KATIL</button></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1fa7599f"]]);

export { index as default };
//# sourceMappingURL=index-PQWJgf-a.mjs.map
