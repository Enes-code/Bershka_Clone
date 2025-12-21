<template>
  <div>
    <h1>Checkout</h1>
  </div>
</template>

<script setup lang="ts">
import { useBasketStore } from '~/stores/useBasketStore'
import { useUserStore } from '~/stores/user'

definePageMeta({ layout: 'checkout' })

const basketStore = useBasketStore()
const userStore = useUserStore()
</script>
