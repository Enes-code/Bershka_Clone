import { defineStore } from 'pinia'
import { addDoc, collection } from 'firebase/firestore'
import type { Order } from '~/types/order'
import type { CartItem } from '~/types/cart'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    lastOrderId: null as string | null,
  }),
  actions: {
    async createOrder(payload: { userId: string; items: CartItem[]; total: number; currency: Order['currency'] }) {
      const { $db } = useNuxtApp()
      const ref = await addDoc(collection($db, 'orders'), {
        userId: payload.userId,
        items: payload.items,
        total: payload.total,
        currency: payload.currency,
        createdAt: Date.now(),
        status: 'created',
      })
      this.lastOrderId = ref.id
      return ref.id
    },
  },
})

