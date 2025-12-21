import { defineComponent, mergeProps, computed, ref, withCtx, createTextVNode, createVNode, unref, createBlock, openBlock, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-vLfwZMRZ.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HeaderBar",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = useCartStore();
    const cartCount = computed(() => cart.count);
    const searchQuery = ref("");
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9df524e3><div class="top-bar" data-v-9df524e3><div class="container" data-v-9df524e3><div class="top-bar-content" data-v-9df524e3><div class="top-bar-left" data-v-9df524e3><a href="#" class="top-link" data-v-9df524e3>TR | \u20BA</a><a href="#" class="top-link" data-v-9df524e3>Sipari\u015F takip</a><a href="#" class="top-link" data-v-9df524e3>Bize kat\u0131l</a><a href="#" class="top-link" data-v-9df524e3>Hediye kart\u0131</a><a href="#" class="top-link" data-v-9df524e3>Ma\u011Faza bul</a></div><div class="top-bar-right" data-v-9df524e3><a href="#" class="top-link" data-v-9df524e3>M\xFC\u015Fteri hizmetleri</a></div></div></div></div><header class="main-header" data-v-9df524e3><div class="container" data-v-9df524e3><div class="header-content" data-v-9df524e3><button class="mobile-menu-btn" data-v-9df524e3><span class="menu-line" data-v-9df524e3></span><span class="menu-line" data-v-9df524e3></span><span class="menu-line" data-v-9df524e3></span></button><nav class="category-nav" data-v-9df524e3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/category/kadin",
        class: "category-link active"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`KADIN`);
          } else {
            return [
              createTextVNode("KADIN")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/category/erkek",
        class: "category-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ERKEK`);
          } else {
            return [
              createTextVNode("ERKEK")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#" class="category-link" data-v-9df524e3>BEBEK</a><a href="#" class="category-link" data-v-9df524e3>EV</a><a href="#" class="category-link" data-v-9df524e3>BEAUTY</a></nav><div class="logo-container" data-v-9df524e3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="logo-text" data-v-9df524e3${_scopeId}>BERSHKA</span>`);
          } else {
            return [
              createVNode("span", { class: "logo-text" }, "BERSHKA")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="header-right" data-v-9df524e3><div class="search-container" data-v-9df524e3><button class="search-btn" data-v-9df524e3><svg class="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" data-v-9df524e3><path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="currentColor" data-v-9df524e3></path></svg></button><input type="text" class="search-input" placeholder="\xDCr\xFCn veya koleksiyon ara"${ssrRenderAttr("value", unref(searchQuery))} data-v-9df524e3></div><div class="user-icons" data-v-9df524e3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account",
        class: "icon-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="user-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" data-v-9df524e3${_scopeId}><path d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM11 4C13.2091 4 15 5.79086 15 8C15 10.2091 13.2091 12 11 12C8.79086 12 7 10.2091 7 8C7 5.79086 8.79086 4 11 4ZM11 19.2C8.39026 19.2 6.01508 17.9934 4.36727 16.0362C4.41973 14.0588 8.02667 12.8 11 12.8C13.964 12.8 17.5803 14.0588 17.6327 16.0362C15.9849 17.9934 13.6097 19.2 11 19.2Z" fill="currentColor" data-v-9df524e3${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "user-icon",
                width: "22",
                height: "22",
                viewBox: "0 0 22 22",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM11 4C13.2091 4 15 5.79086 15 8C15 10.2091 13.2091 12 11 12C8.79086 12 7 10.2091 7 8C7 5.79086 8.79086 4 11 4ZM11 19.2C8.39026 19.2 6.01508 17.9934 4.36727 16.0362C4.41973 14.0588 8.02667 12.8 11 12.8C13.964 12.8 17.5803 14.0588 17.6327 16.0362C15.9849 17.9934 13.6097 19.2 11 19.2Z",
                  fill: "currentColor"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#" class="icon-link" data-v-9df524e3><svg class="heart-icon" width="22" height="20" viewBox="0 0 22 20" fill="none" data-v-9df524e3><path d="M11 19.5L9.55 18.12C3.4 12.38 0 9.16 0 5.25C0 2.13 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.13 20 5.25C20 9.16 16.6 12.38 10.45 18.12L11 19.5Z" fill="currentColor" data-v-9df524e3></path></svg></a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        class: "icon-link cart-icon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="cart-svg" width="22" height="22" viewBox="0 0 22 22" fill="none" data-v-9df524e3${_scopeId}><path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L21.16 5.48C21.25 5.31 21.3 5.13 21.3 4.94C21.3 4.42 20.88 4 20.36 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor" data-v-9df524e3${_scopeId}></path></svg>`);
            if (unref(cartCount) > 0) {
              _push2(`<span class="cart-count" data-v-9df524e3${_scopeId}>${ssrInterpolate(unref(cartCount))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "cart-svg",
                width: "22",
                height: "22",
                viewBox: "0 0 22 22",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L21.16 5.48C21.25 5.31 21.3 5.13 21.3 4.94C21.3 4.42 20.88 4 20.36 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z",
                  fill: "currentColor"
                })
              ])),
              unref(cartCount) > 0 ? (openBlock(), createBlock("span", {
                key: 0,
                class: "cart-count"
              }, toDisplayString(unref(cartCount)), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></header></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organisms/HeaderBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeaderBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9df524e3"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "main-footer" }, _attrs))} data-v-9b578760><div class="container" data-v-9b578760><div class="footer-grid" data-v-9b578760><div class="footer-column" data-v-9b578760><h3 class="footer-title" data-v-9b578760>YARDIM</h3><ul class="footer-links" data-v-9b578760><li data-v-9b578760><a href="#" data-v-9b578760>S\u0131k\xE7a Sorulan Sorular</a></li><li data-v-9b578760><a href="#" data-v-9b578760>Sipari\u015F takip</a></li><li data-v-9b578760><a href="#" data-v-9b578760>Teslimat</a></li><li data-v-9b578760><a href="#" data-v-9b578760>\u0130ade</a></li><li data-v-9b578760><a href="#" data-v-9b578760>\u0130leti\u015Fim</a></li></ul></div><div class="footer-column" data-v-9b578760><h3 class="footer-title" data-v-9b578760>\u015E\u0130RKET</h3><ul class="footer-links" data-v-9b578760><li data-v-9b578760><a href="#" data-v-9b578760>Bershka hakk\u0131nda</a></li><li data-v-9b578760><a href="#" data-v-9b578760>Kariyer</a></li><li data-v-9b578760><a href="#" data-v-9b578760>S\xFCrd\xFCr\xFClebilirlik</a></li><li data-v-9b578760><a href="#" data-v-9b578760>Bas\u0131n</a></li></ul></div><div class="footer-column" data-v-9b578760><h3 class="footer-title" data-v-9b578760>\xD6DEMELER</h3><ul class="footer-links" data-v-9b578760><li data-v-9b578760><a href="#" data-v-9b578760>Kartlar</a></li><li data-v-9b578760><a href="#" data-v-9b578760>Taksit se\xE7enekleri</a></li><li data-v-9b578760><a href="#" data-v-9b578760>Hediye kart\u0131</a></li></ul></div><div class="footer-column" data-v-9b578760><h3 class="footer-title" data-v-9b578760>B\u0130Z\u0130 TAK\u0130P ED\u0130N</h3><ul class="footer-links" data-v-9b578760><li data-v-9b578760><a href="#" data-v-9b578760>Instagram</a></li><li data-v-9b578760><a href="#" data-v-9b578760>TikTok</a></li><li data-v-9b578760><a href="#" data-v-9b578760>Facebook</a></li><li data-v-9b578760><a href="#" data-v-9b578760>YouTube</a></li></ul></div></div><div class="footer-bottom" data-v-9b578760><div class="footer-bottom-left" data-v-9b578760><p class="legal-text" data-v-9b578760><a href="#" class="legal-link" data-v-9b578760>Sat\u0131n alma \u015Fartlar\u0131 ve ko\u015Fullar\u0131</a><span class="separator" data-v-9b578760>+</span><a href="#" class="legal-link" data-v-9b578760>#bershkastyle \u015Eartlar\u0131 ve ko\u015Fullar\u0131</a><span class="separator" data-v-9b578760>+</span><a href="#" class="legal-link" data-v-9b578760>Gizlilik Politikas\u0131</a><span class="separator" data-v-9b578760>+</span><a href="#" class="legal-link" data-v-9b578760>\xC7erezler politikas\u0131</a></p><p class="company-info" data-v-9b578760> Resmi \u015Firket datalar\u0131<br data-v-9b578760><span class="country-info" data-v-9b578760>Turkey | T\xFCrk\xE7e</span></p></div><div class="footer-bottom-right" data-v-9b578760><p class="copyright" data-v-9b578760>\xA9 2025 BERSHKA</p><div class="footer-options" data-v-9b578760><a href="#" class="footer-option-link" data-v-9b578760>\xC7erez ayarlar\u0131</a><a href="#" class="footer-option-link" data-v-9b578760>Site haritas\u0131</a></div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organisms/FooterBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9b578760"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-e92eeaed>`);
      _push(ssrRenderComponent(HeaderBar, null, null, _parent));
      _push(`<main class="main" data-v-e92eeaed>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(FooterBar, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e92eeaed"]]);

export { _default as default };
//# sourceMappingURL=default-hwDC9wbH.mjs.map
