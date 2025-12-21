import { defineStore } from 'pinia';
import type { IBasketItem, IProduct } from '~/types';
import { doc, setDoc } from 'firebase/firestore';
import { useUserStore } from './useUserStore';

export const useBasketStore = defineStore('basket', {
  state: () => ({
    items: [] as IBasketItem[],
    isOpen: false,
  }),
  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((total, item) => {
      return total + (item.product?.price || 0) * item.quantity;
    }, 0),
  },
  actions: {
    async addToBasket(product: IProduct, size: string, color: string) {
      const existingItem = this.items.find(
        (item) => item.productId === product.id && item.selectedSize === size && item.selectedColor === color
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({
          productId: product.id,
          quantity: 1,
          selectedSize: size,
          selectedColor: color,
          product: product,
        });
      }
      this.toggleBasket(true);

      // Sync with Firebase (Write Scenario)
      await this.syncBasketToFirestore();
    },
    async removeFromBasket(index: number) {
      this.items.splice(index, 1);
      // Sync with Firebase (Write Scenario)
      await this.syncBasketToFirestore();
    },
    toggleBasket(open?: boolean) {
      this.isOpen = open !== undefined ? open : !this.isOpen;
    },
    clearBasket() {
      this.items = [];
      this.syncBasketToFirestore();
    },
    async syncBasketToFirestore() {
      const userStore = useUserStore();
      if (userStore.user && userStore.user.uid) {
        const { $db } = useNuxtApp();
        if (!$db) return;

        try {
          const basketRef = doc($db, 'baskets', userStore.user.uid);
          // We save the basket as a single document for the user
          await setDoc(basketRef, {
            items: this.items,
            updatedAt: new Date().toISOString()
          }, { merge: true });
        } catch (e) {
          console.error("Error syncing basket:", e);
        }
      }
    }
  },
});
