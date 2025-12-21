<template>
  <div>
    <h1>Product: {{ id }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/useProductStore'
import { useBasketStore } from '~/stores/useBasketStore'

definePageMeta({ layout: 'default' })

const route = useRoute()
const id = computed(() => String(route.params.id || ''))
const productStore = useProductStore()
const basketStore = useBasketStore()
</script>
