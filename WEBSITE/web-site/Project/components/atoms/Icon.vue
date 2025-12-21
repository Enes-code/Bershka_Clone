<template>
  <span class="icon" aria-hidden="true">{{ name }}</span>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<style scoped>
.icon { display: inline-flex; align-items: center; justify-content: center; }
</style>

