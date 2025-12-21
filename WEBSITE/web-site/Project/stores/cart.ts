import { defineStore } from 'pinia'
import type { CartItem } from '~/types/cart'
import type { Product } from '~/types/product'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    total(state) {
      return state.items.reduce((sum, i) => sum + i.price * i.qty, 0)
    },
    count(state) {
      return state.items.reduce((sum, i) => sum + i.qty, 0)
    },
  },
  actions: {
    addProduct(p: Product) {
      const it = this.items.find((x) => x.productId === p.id)
      if (it) it.qty += 1
      else {
        this.items.push({
          productId: p.id,
          title: p.title,
          price: p.price,
          currency: p.currency,
          imageUrl: p.imageUrl,
          qty: 1,
        })
      }
    },
    inc(productId: string) {
      const it = this.items.find((x) => x.productId === productId)
      if (it) it.qty += 1
    },
    dec(productId: string) {
      const it = this.items.find((x) => x.productId === productId)
      if (!it) return
      it.qty -= 1
      if (it.qty <= 0) this.items = this.items.filter((x) => x.productId !== productId)
    },
    clear() {
      this.items = []
    },
  },
})

