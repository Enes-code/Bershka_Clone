<template>
  <div class="product-grid">
    <div class="grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @click="navigateToProduct(product.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import ProductCard from '@/components/molecules/ProductCard.vue'
import type { Product } from '@/types/product'

interface Props {
  products: Product[]
}

defineProps<Props>()

const router = useRouter()

function navigateToProduct(productId: string) {
  router.push({ name: 'product', params: { id: productId } })
}
</script>

<style scoped>
.product-grid {
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>

