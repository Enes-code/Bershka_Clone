<template>
  <button class="btn" :type="type"><slot /></button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ type?: 'button' | 'submit' }>(), { type: 'button' })
</script>

<style scoped>
.btn {
  border: 1px solid #000;
  background: #000;
  color: #fff;
  padding: 10px 14px;
  font-weight: 700;
  cursor: pointer;
}
</style>

