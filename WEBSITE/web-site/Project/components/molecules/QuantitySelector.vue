<template>
  <div class="quantity-selector">
    <button @click="decrease" :disabled="value <= 1" class="qty-button">-</button>
    <span class="qty-value">{{ value }}</span>
    <button @click="increase" class="qty-button">+</button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: number
  min?: number
  max?: number
}

const props = withDefaults(defineProps<Props>(), {
  min: 1,
  max: 99
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

function decrease() {
  if (value.value > props.min) {
    value.value--
  }
}

function increase() {
  if (value.value < props.max) {
    value.value++
  }
}
</script>

<style scoped>
.quantity-selector {
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #ddd;
}

.qty-button {
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.2s;
}

.qty-button:hover:not(:disabled) {
  background: #f5f5f5;
}

.qty-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.qty-value {
  min-width: 30px;
  text-align: center;
  font-weight: 600;
}
</style>

