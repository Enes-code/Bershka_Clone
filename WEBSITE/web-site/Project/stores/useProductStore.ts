import { defineStore } from 'pinia';
import type { IProduct } from '~/types';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as IProduct[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const { $db } = useNuxtApp();
        if (!$db) throw new Error('Firebase not initialized');

        const querySnapshot = await getDocs(collection($db, 'products'));
        this.products = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as IProduct[];

        if (this.products.length === 0) {
          // Fallback/Seed for demo if empty
          this.products = [
            {
              id: '1',
              name: 'Bershka Print T-Shirt',
              price: 19.99,
              currency: 'EUR',
              description: 'Relaxed fit cotton t-shirt with print.',
              images: ['https://static.bershka.net/4/photos2/2023/V/0/2/p/2324/503/251/2324503251_2_1_3.jpg?t=1682691524361'],
              sizes: ['S', 'M', 'L', 'XL'],
              colors: ['White'],
              category: 'men_tshirts',
              stock: 50
            }
          ];
        }

      } catch (err: any) {
        this.error = err.message;
        console.error('Error fetching products:', err);
      } finally {
        this.loading = false;
      }
    },
    async fetchProductById(id: string) {
      // Check local first
      const local = this.products.find(p => p.id === id);
      if (local) return local;

      // Fetch from DB
      try {
        const { $db } = useNuxtApp();
        if (!$db) return undefined;

        const docRef = doc($db, 'products', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          return { id: docSnap.id, ...docSnap.data() } as IProduct;
        }
      } catch (e) {
        console.error(e);
      }
      return undefined;
    }
  },
});
