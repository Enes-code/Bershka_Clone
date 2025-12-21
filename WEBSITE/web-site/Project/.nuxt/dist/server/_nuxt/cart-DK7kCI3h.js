import { d as defineStore } from "../server.mjs";
const useCartStore = defineStore("cart", {
  state: () => ({
    items: []
  }),
  getters: {
    total(state) {
      return state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
    },
    count(state) {
      return state.items.reduce((sum, i) => sum + i.qty, 0);
    }
  },
  actions: {
    addProduct(p) {
      const it = this.items.find((x) => x.productId === p.id);
      if (it) it.qty += 1;
      else {
        this.items.push({
          productId: p.id,
          title: p.title,
          price: p.price,
          currency: p.currency,
          imageUrl: p.imageUrl,
          qty: 1
        });
      }
    },
    inc(productId) {
      const it = this.items.find((x) => x.productId === productId);
      if (it) it.qty += 1;
    },
    dec(productId) {
      const it = this.items.find((x) => x.productId === productId);
      if (!it) return;
      it.qty -= 1;
      if (it.qty <= 0) this.items = this.items.filter((x) => x.productId !== productId);
    },
    clear() {
      this.items = [];
    }
  }
});
export {
  useCartStore as u
};
//# sourceMappingURL=cart-DK7kCI3h.js.map
