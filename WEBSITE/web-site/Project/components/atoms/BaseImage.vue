<template>
  <img
    :src="src"
    :alt="alt"
    :class="['base-image', { 'object-cover': objectCover }]"
    @error="handleError"
  />
</template>

<script setup lang="ts">
interface Props {
  src: string
  alt: string
  objectCover?: boolean
}

const props = defineProps<Props>()

const placeholderImage = 'https://via.placeholder.com/400x500/000000/FFFFFF?text=Image'

function handleError(event: Event) {
  const target = event.target as HTMLImageElement
  if (target.src !== placeholderImage) {
    target.src = placeholderImage
  }
}
</script>

<style scoped>
.base-image {
  width: 100%;
  height: 100%;
  display: block;
}

.base-image.object-cover {
  object-fit: cover;
}
</style>

