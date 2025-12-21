<template>
  <NuxtLink class="tile" :to="to">
    <img class="img" :src="imgSrc" :alt="title" />
    <div class="overlay">
      <BaseText variant="small">{{ subtitle }}</BaseText>
      <BaseText variant="big">{{ title }}</BaseText>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import BaseText from '~/components/atoms/BaseText.vue'

defineProps<{
  to: string
  imgSrc: string
  title: string
  subtitle: string
}>()
</script>

<style scoped>
.tile{
  position:relative;
  display:block;
  overflow:hidden;
  text-decoration:none;
  background:#ddd;
  aspect-ratio: 1 / 1.1;
}
.img{ width:100%; height:100%; object-fit:cover; display:block; transform: scale(1.01); }
.overlay{
  position:absolute;
  left:0; right:0;
  bottom: 22px;
  text-align:center;
  text-shadow: 0 2px 10px rgba(0,0,0,.35);
}
</style>

