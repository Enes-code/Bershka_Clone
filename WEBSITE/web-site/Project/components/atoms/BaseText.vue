<template>
  <component :is="as" :class="['base-text', variant]"><slot /></component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: 'div' | 'span' | 'p' | 'h1' | 'h2'
    variant?: 'small' | 'big' | 'nav' | 'brand'
  }>(),
  { as: 'div', variant: 'nav' }
)
</script>

<style scoped>
.base-text { color:#000; }
.small { color:#fff; font-size: 14px; font-weight: 700; opacity: .95; }
.big { color:#fff; font-size: 64px; font-weight: 300; letter-spacing: 2px; }
.nav { font-size: 14px; font-weight: 600; }
.brand { font-weight: 900; letter-spacing: 2px; }
</style>

