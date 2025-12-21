<template>
  <div class="product-card" @click="$emit('click')">
    <div class="image-container">
      <img 
        :src="product.images[0] || placeholderImage" 
        :alt="product.name"
        @error="handleImageError"
        class="product-image"
      />
      <div v-if="product.originalPrice" class="discount-badge">
        %{{ discountPercent }} İndirim
      </div>
    </div>
    <div class="product-info">
      <h4 class="product-name">{{ product.name }}</h4>
      <div class="price-container">
        <span class="current-price">{{ formatPrice(product.price) }} ₺</span>
        <span v-if="product.originalPrice" class="original-price">
          {{ formatPrice(product.originalPrice) }} ₺
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '@/types/product'

interface Props {
  product: Product
}

const props = defineProps<Props>()

const placeholderImage = 'https://via.placeholder.com/400x500/000000/FFFFFF?text=Product'

const discountPercent = computed(() => {
  if (!props.product.originalPrice) return 0
  return Math.round(((props.product.originalPrice - props.product.price) / props.product.originalPrice) * 100)
})

function formatPrice(price: number): string {
  return price.toFixed(2)
}

function handleImageError(event: Event) {
  const target = event.target as HTMLImageElement
  target.src = placeholderImage
}
</script>

<style scoped>
.product-card {
  background: var(--panel-light);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.product-card {
  cursor: pointer;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
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
  padding: 15px;
}

.product-name {
  color: var(--accent-secondary);
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 500;
}

.price-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.current-price {
  font-weight: bold;
  color: var(--accent-primary);
  font-size: 18px;
}

.original-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}
</style>

