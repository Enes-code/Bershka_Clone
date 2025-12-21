<template>
  <div class="cart-list">
    <div
      v-for="item in items"
      :key="item.id"
      class="cart-item"
    >
      <BaseImage :src="item.product.images[0]" :alt="item.product.name" class="item-image" />
      <div class="item-details">
        <BaseText tag="h4" size="md" weight="semibold">{{ item.product.name }}</BaseText>
        <BaseText tag="p" size="sm" class="item-meta">
          {{ item.color }} | {{ item.size }}
        </BaseText>
        <BasePrice :price="item.price" />
      </div>
      <QuantitySelector
        :model-value="item.quantity"
        @update:model-value="updateQuantity(item.id, $event)"
      />
      <div class="item-total">
        <BasePrice :price="item.price * item.quantity" />
      </div>
      <button @click="removeItem(item.id)" class="remove-button">×</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CartItem } from '~/types/cart'

interface Props {
  items: CartItem[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  updateQuantity: [itemId: string, quantity: number]
  removeItem: [itemId: string]
}>()

function updateQuantity(itemId: string, quantity: number) {
  emit('updateQuantity', itemId, quantity)
}

function removeItem(itemId: string) {
  emit('removeItem', itemId)
}
</script>

<style scoped>
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cart-item {
  display: grid;
  grid-template-columns: 120px 1fr auto auto auto;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border: 1px solid #eee;
  align-items: center;
}

.item-image {
  width: 120px;
  height: 150px;
  object-fit: cover;
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item-meta {
  color: #666;
}

.item-total {
  font-size: 1.1rem;
}

.remove-button {
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  transition: color 0.2s;
}

.remove-button:hover {
  color: #e2001a;
}

@media (max-width: 768px) {
  .cart-item {
    grid-template-columns: 100px 1fr;
    gap: 1rem;
  }
  
  .item-total,
  .remove-button {
    grid-column: 2;
  }
}
</style>

