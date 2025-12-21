import { defineStore } from 'pinia'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import type { Category } from '~/types/category'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    items: [] as Category[],
    loaded: false,
  }),
  actions: {
    async fetchCategories() {
      if (this.loaded) return
      const { $db } = useNuxtApp()
      if (!$db) {
        console.warn('Firebase not initialized. Please configure .env file.')
        return
      }
      const q = query(collection($db, 'categories'), orderBy('order', 'asc'))
      const snap = await getDocs(q)
      this.items = snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Category, 'id'>) }))
      this.loaded = true
    },
  },
})

