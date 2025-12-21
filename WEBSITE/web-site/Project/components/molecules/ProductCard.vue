<template>
  <NuxtLink :to="`/product/${product.id}`" class="product-card">
    <div class="image-container">
      <BaseImage :src="product.images[0] || placeholderImage" :alt="product.name" object-cover />
      <div v-if="product.originalPrice" class="discount-badge">
        %{{ discountPercent }} İndirim
      </div>
    </div>
    <div class="product-info">
      <BaseText tag="h4" size="md" weight="medium" class="product-name">
        {{ product.name }}
      </BaseText>
      <BasePrice :price="product.price" :original-price="product.originalPrice" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

interface Props {
  product: Product
}

const props = defineProps<Props>()

const placeholderImage = 'https://via.placeholder.com/400x500/000000/FFFFFF?text=Product'

const discountPercent = computed(() => {
  if (!props.product.originalPrice) return 0
  return Math.round(((props.product.originalPrice - props.product.price) / props.product.originalPrice) * 100)
})
</script>

<style scoped>
.product-card {
  display: block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.image-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.discount-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e2001a;
  color: white;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 4px;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.product-name {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>

