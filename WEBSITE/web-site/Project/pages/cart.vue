<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold uppercase mb-8">Shopping Basket</h1>

    <div v-if="basketStore.items.length === 0" class="text-center py-12">
      <p class="text-muted-foreground mb-4">Your basket is empty.</p>
      <AtomsButton to="/">Start Shopping</AtomsButton>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Basket Items -->
      <div class="md:col-span-2 space-y-4">
        <div v-for="(item, index) in basketStore.items" :key="index" class="flex gap-4 border p-4 rounded-lg">
          <div class="w-24 h-24 bg-muted flex-shrink-0">
             <img v-if="item.product" :src="item.product.images[0]" class="w-full h-full object-cover rounded" />
          </div>
          <div class="flex-grow">
            <h3 class="font-bold">{{ item.product?.name }}</h3>
            <p class="text-sm text-muted-foreground">Size: {{ item.selectedSize }} | Color: {{ item.selectedColor }}</p>
            <div class="mt-2 flex items-center justify-between">
                <span class="font-bold">{{ formatPrice((item.product?.price || 0) * item.quantity) }}</span>
                <button @click="basketStore.removeFromBasket(index)" class="text-destructive text-sm hover:underline">Remove</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="border p-6 rounded-lg h-fit">
        <h2 class="font-bold text-xl mb-4">Summary</h2>
        <div class="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>{{ formatPrice(basketStore.totalPrice) }}</span>
        </div>
        <div class="flex justify-between mb-4">
            <span>Shipping</span>
            <span>Free</span>
        </div>
        <div class="border-t pt-4 font-bold text-lg flex justify-between mb-6">
            <span>Total</span>
            <span>{{ formatPrice(basketStore.totalPrice) }}</span>
        </div>
        <AtomsButton class="w-full">Proceed to Checkout</AtomsButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBasketStore } from '~/stores/useBasketStore';

const basketStore = useBasketStore();

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
};
</script>
