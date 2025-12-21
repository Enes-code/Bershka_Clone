<template>
  <div class="base-price">
    <span class="current-price">{{ formatPrice(price) }} {{ currency }}</span>
    <span v-if="originalPrice" class="original-price">
      {{ formatPrice(originalPrice) }} {{ currency }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  price: number
  originalPrice?: number
  currency?: string
}

withDefaults(defineProps<Props>(), {
  currency: '₺'
})

function formatPrice(price: number): string {
  return price.toFixed(2)
}
</script>

<style scoped>
.base-price {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.current-price {
  font-weight: 700;
  font-size: 1.1rem;
}

.original-price {
  font-size: 0.9rem;
  color: #999;
  text-decoration: line-through;
}
</style>

