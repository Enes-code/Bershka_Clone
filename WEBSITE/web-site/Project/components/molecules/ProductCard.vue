<template>
  <div class="group relative border rounded-lg overflow-hidden bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
    <div class="aspect-square bg-muted relative">
      <img
        :src="product.images[0]"
        :alt="product.name"
        class="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div v-if="product.isNew" class="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
        NEW
      </div>
      <div v-if="product.discountPercentage" class="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded">
        -{{ product.discountPercentage }}%
      </div>
    </div>
    <div class="p-4 space-y-2">
      <h3 class="font-semibold text-lg leading-tight">{{ product.name }}</h3>
      <div class="flex items-center justify-between">
         <div class="flex flex-col">
            <span v-if="product.discountPercentage" class="text-xs text-muted-foreground line-through">
                {{ formatPrice(product.originalPrice || product.price) }}
            </span>
            <span class="font-bold text-lg">{{ formatPrice(product.price) }}</span>
         </div>
      </div>
      <AtomsButton class="w-full mt-2" size="sm" @click="$emit('add-to-cart', product)">
        Add to Cart
      </AtomsButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types';

const props = defineProps<{
  product: IProduct;
}>();

const emit = defineEmits(['add-to-cart']);

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: props.product.currency || 'EUR',
  }).format(price);
};
</script>
