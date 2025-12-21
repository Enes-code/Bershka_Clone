import { defineStore } from 'pinia'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import type { Product } from '~/types/product'

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: [] as Product[],
    active: null as Product | null,
  }),
  actions: {
    async fetchByGender(gender: 'kadin' | 'erkek') {
      const { $db } = useNuxtApp()
      const q = query(collection($db, 'products'), where('gender', '==', gender))
      const snap = await getDocs(q)
      this.items = snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Product, 'id'>) }))
    },

    async fetchByCategory(categorySlug: string) {
      const { $db } = useNuxtApp()
      const q = query(collection($db, 'products'), where('categorySlug', '==', categorySlug))
      const snap = await getDocs(q)
      this.items = snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Product, 'id'>) }))
    },

    async fetchOne(id: string) {
      const { $db } = useNuxtApp()
      const ref = doc($db, 'products', id)
      const snap = await getDoc(ref)
      this.active = snap.exists() ? { id: snap.id, ...(snap.data() as Omit<Product, 'id'>) } : null
    },
  },
})

