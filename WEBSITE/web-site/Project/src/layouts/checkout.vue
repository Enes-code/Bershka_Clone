<template>
  <div class="checkout-layout">
    <div class="checkout-header">
      <router-link to="/" class="logo">BERSHKA</router-link>
      <div class="checkout-steps">
        <div :class="['step', { active: currentStep >= 1 }]">Sepet</div>
        <div :class="['step', { active: currentStep >= 2 }]">Ödeme</div>
        <div :class="['step', { active: currentStep >= 3 }]">Onay</div>
      </div>
    </div>
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentStep = computed(() => {
  if (route.name === 'cart') return 1
  if (route.name === 'checkout') return 2
  return 3
})
</script>

<style scoped>
.checkout-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
}

.checkout-header {
  background: white;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
}

.checkout-steps {
  display: flex;
  gap: 2rem;
}

.step {
  padding: 0.5rem 1rem;
  color: #999;
  font-weight: 600;
  position: relative;
}

.step.active {
  color: #000;
}

.step:not(:last-child)::after {
  content: '→';
  position: absolute;
  right: -1.5rem;
  color: #ddd;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
}
</style>

