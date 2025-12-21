<template>
  <!-- BÜTÜN TILE TIKLANABİLİR -->
  <NuxtLink class="tile" :to="to" :aria-label="`${title} sayfasına git`">
    <img class="img" :src="imgSrc" :alt="title" />

    <!-- Overlay (buton hissi) -->
    <div class="overlay">
      <div class="small">{{ subtitle }}</div>
      <div class="big">{{ title }}</div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
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
  cursor:pointer;
}
.img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  transform: scale(1.01);
}

/* Overlay yazıların konumu ve hissi */
.overlay{
  position:absolute;
  left:0; right:0;
  bottom: 22px;
  text-align:center;
  text-shadow: 0 2px 10px rgba(0,0,0,.35);
}

/* "MODA BÖLÜMÜNE GİT" */
.small{
  font-size: 14px;
  font-weight: 700;
  opacity: .95;
  margin-bottom: 10px;
  color:#fff;
}

/* "KADIN / ERKEK" */
.big{
  font-size: 64px;
  font-weight: 300;
  letter-spacing: 2px;
  color:#fff;
}

/* Klavye ile de buton gibi hissedilsin */
.tile:focus-visible{
  outline: 2px solid #000;
  outline-offset: 4px;
}
</style>
