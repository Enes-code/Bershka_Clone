<template>
  <div>
    <h1>Category: {{ slug }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/useProductStore'

definePageMeta({ layout: 'default' })

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const productStore = useProductStore()
</script>
