import { d as defineStore, u as useNuxtApp } from './server.mjs';
import { addDoc, collection } from 'firebase/firestore';

const useOrdersStore = defineStore("orders", {
  state: () => ({
    lastOrderId: null
  }),
  actions: {
    async createOrder(payload) {
      const { $db } = useNuxtApp();
      const ref = await addDoc(collection($db, "orders"), {
        userId: payload.userId,
        items: payload.items,
        total: payload.total,
        currency: payload.currency,
        createdAt: Date.now(),
        status: "created"
      });
      this.lastOrderId = ref.id;
      return ref.id;
    }
  }
});

export { useOrdersStore as u };
//# sourceMappingURL=orders-DVtkpEVH.mjs.map
