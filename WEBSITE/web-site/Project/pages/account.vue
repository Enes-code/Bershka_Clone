<template>
  <div>
    <h1>Hesabım</h1>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'

definePageMeta({ layout: 'profile' })

const userStore = useUserStore()
</script>
