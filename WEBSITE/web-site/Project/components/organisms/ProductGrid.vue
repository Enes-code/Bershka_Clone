<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <MoleculesProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types';
import { useBasketStore } from '~/stores/useBasketStore';

defineProps<{
  products: IProduct[];
}>();

const basketStore = useBasketStore();

const handleAddToCart = (product: IProduct) => {
    // Defaulting size/color for grid quick add, or open modal
    // For now, let's just add with defaults or first available
    const size = product.sizes[0] || 'One Size';
    const color = product.colors[0] || 'Default';
    basketStore.addToBasket(product, size, color);
    
    // Optional: show toast
    console.log('Added to cart:', product.name);
};
</script>
