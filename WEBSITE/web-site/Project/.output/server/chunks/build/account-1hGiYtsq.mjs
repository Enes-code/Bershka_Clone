import { _ as __nuxt_component_0 } from './nuxt-link-vLfwZMRZ.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, d as defineStore, u as useNuxtApp } from './server.mjs';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import { u as useOrdersStore } from './orders-DVtkpEVH.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    type: { default: "button" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "btn",
        type: __props.type
      }, _attrs))} data-v-3ebb440a>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/Button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3ebb440a"]]);
const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const isAuthenticated = ref(false);
  const { $db } = useNuxtApp();
  async function upsertUserProfile(userId, userData) {
    var _a, _b;
    loading.value = true;
    error.value = null;
    try {
      const userRef = doc($db, "users", userId);
      const userSnap = await getDoc(userRef);
      const updateData = {
        ...userData,
        updatedAt: /* @__PURE__ */ new Date()
      };
      if (userSnap.exists()) {
        await updateDoc(userRef, updateData);
      } else {
        await setDoc(userRef, {
          id: userId,
          ...updateData,
          createdAt: /* @__PURE__ */ new Date(),
          addresses: [],
          isEmailVerified: false
        });
      }
      const updatedSnap = await getDoc(userRef);
      if (updatedSnap.exists()) {
        user.value = {
          id: updatedSnap.id,
          ...updatedSnap.data(),
          createdAt: ((_a = updatedSnap.data().createdAt) == null ? void 0 : _a.toDate()) || /* @__PURE__ */ new Date(),
          updatedAt: ((_b = updatedSnap.data().updatedAt) == null ? void 0 : _b.toDate()) || /* @__PURE__ */ new Date()
        };
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Failed to update user profile";
      console.error("Error updating user profile:", err);
      throw err;
    } finally {
      loading.value = false;
    }
  }
  async function updateUserAddress(userId, addressId, addressData) {
    var _a, _b;
    loading.value = true;
    error.value = null;
    try {
      const userRef = doc($db, "users", userId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        const addresses = userData.addresses || [];
        const addressIndex = addresses.findIndex((addr) => addr.id === addressId);
        if (addressIndex > -1) {
          addresses[addressIndex] = { ...addresses[addressIndex], ...addressData };
        } else {
          addresses.push({ ...addressData, id: addressId });
        }
        await updateDoc(userRef, {
          addresses,
          updatedAt: /* @__PURE__ */ new Date()
        });
        const updatedSnap = await getDoc(userRef);
        if (updatedSnap.exists()) {
          user.value = {
            id: updatedSnap.id,
            ...updatedSnap.data(),
            createdAt: ((_a = updatedSnap.data().createdAt) == null ? void 0 : _a.toDate()) || /* @__PURE__ */ new Date(),
            updatedAt: ((_b = updatedSnap.data().updatedAt) == null ? void 0 : _b.toDate()) || /* @__PURE__ */ new Date()
          };
        }
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Failed to update address";
      console.error("Error updating address:", err);
      throw err;
    } finally {
      loading.value = false;
    }
  }
  function setUser(userData) {
    user.value = userData;
    isAuthenticated.value = !!userData;
  }
  return {
    user,
    loading,
    error,
    isAuthenticated,
    upsertUserProfile,
    updateUserAddress,
    setUser
  };
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "account",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const ordersStore = useOrdersStore();
    const activeTab = ref("orders");
    const tabs = [
      { id: "orders", label: "Sipari\u015Flerim" }
    ];
    function formatPrice(price) {
      return price.toFixed(2);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseText = resolveComponent("BaseText");
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-page" }, _attrs))} data-v-f691ebec><div class="container" data-v-f691ebec>`);
      _push(ssrRenderComponent(_component_BaseText, {
        tag: "h1",
        size: "2xl",
        weight: "bold",
        class: "page-title"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Hesab\u0131m`);
          } else {
            return [
              createTextVNode("Hesab\u0131m")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(userStore).isAuthenticated) {
        _push(`<div class="not-authenticated" data-v-f691ebec>`);
        _push(ssrRenderComponent(_component_BaseText, {
          tag: "p",
          size: "lg"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Giri\u015F yapman\u0131z gerekiyor`);
            } else {
              return [
                createTextVNode("Giri\u015F yapman\u0131z gerekiyor")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "login-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(Button, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Giri\u015F Yap`);
                  } else {
                    return [
                      createTextVNode("Giri\u015F Yap")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(Button, null, {
                  default: withCtx(() => [
                    createTextVNode("Giri\u015F Yap")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="account-content" data-v-f691ebec><div class="account-tabs" data-v-f691ebec><!--[-->`);
        ssrRenderList(tabs, (tab) => {
          _push(`<button class="${ssrRenderClass([{ active: unref(activeTab) === tab.id }, "tab-button"])}" data-v-f691ebec>${ssrInterpolate(tab.label)}</button>`);
        });
        _push(`<!--]--></div><div class="tab-content" data-v-f691ebec>`);
        if (unref(activeTab) === "orders") {
          _push(`<div data-v-f691ebec>`);
          _push(ssrRenderComponent(_component_BaseText, {
            tag: "h2",
            size: "lg",
            weight: "bold"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Sipari\u015Flerim`);
              } else {
                return [
                  createTextVNode("Sipari\u015Flerim")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (unref(ordersStore).loading) {
            _push(`<div class="loading" data-v-f691ebec>Y\xFCkleniyor...</div>`);
          } else if (unref(ordersStore).orders.length === 0) {
            _push(`<div class="empty-state" data-v-f691ebec>`);
            _push(ssrRenderComponent(_component_BaseText, {
              tag: "p",
              size: "md"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`Hen\xFCz sipari\u015Finiz yok`);
                } else {
                  return [
                    createTextVNode("Hen\xFCz sipari\u015Finiz yok")
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<div class="orders-list" data-v-f691ebec><!--[-->`);
            ssrRenderList(unref(ordersStore).orders, (order) => {
              _push(`<div class="order-card" data-v-f691ebec>`);
              _push(ssrRenderComponent(_component_BaseText, {
                tag: "h3",
                size: "md",
                weight: "semibold"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`Sipari\u015F #${ssrInterpolate(order.id)}`);
                  } else {
                    return [
                      createTextVNode("Sipari\u015F #" + toDisplayString(order.id), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(ssrRenderComponent(_component_BaseText, {
                tag: "p",
                size: "sm"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`Durum: ${ssrInterpolate(order.status)}`);
                  } else {
                    return [
                      createTextVNode("Durum: " + toDisplayString(order.status), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(ssrRenderComponent(_component_BaseText, {
                tag: "p",
                size: "md",
                weight: "bold"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`Toplam: ${ssrInterpolate(formatPrice(order.total))} ${ssrInterpolate(order.currency)}`);
                  } else {
                    return [
                      createTextVNode("Toplam: " + toDisplayString(formatPrice(order.total)) + " " + toDisplayString(order.currency), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</div>`);
            });
            _push(`<!--]--></div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const account = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f691ebec"]]);

export { account as default };
//# sourceMappingURL=account-1hGiYtsq.mjs.map
