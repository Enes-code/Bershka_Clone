<template><div style="padding:24px">{{ title }} sayfası</div></template>
<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const title = computed(() => {
  if (slug.value === 'kadin') return 'KADIN'
  if (slug.value === 'erkek') return 'ERKEK'
  return slug.value.toUpperCase()
})
</script>

