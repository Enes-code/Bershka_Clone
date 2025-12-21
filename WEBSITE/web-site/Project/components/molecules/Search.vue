<template>
  <div class="search">
    <BaseIcon name="⌕" />
    <input class="input" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '~/components/atoms/BaseIcon.vue'
withDefaults(defineProps<{ placeholder?: string }>(), { placeholder: 'BURADA ARA' })
</script>

<style scoped>
.search {
  display:flex;
  align-items:center;
  gap: 10px;
  height: 64px;
  padding: 0 14px;
  border-left:1px solid #000;
  border-right:1px solid #000;
}
.input { border:none; outline:none; width:100%; font-weight:600; }
</style>

