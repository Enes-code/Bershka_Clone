<template>
  <section class="tiles">
    <GenderTile
      to="/category/kadin"
      img-src="/home/kadin.jpg"
      title="KADIN"
      subtitle="MODA BÖLÜMÜNE GİT"
    />
    <GenderTile
      to="/category/erkek"
      img-src="/home/erkek.jpg"
      title="ERKEK"
      subtitle="MODA BÖLÜMÜNE GİT"
    />
  </section>
</template>

<script setup lang="ts">
import GenderTile from '~/components/molecules/GenderTile.vue'
</script>

<style scoped>
.tiles{
  width: min(1180px, calc(100% - 80px));
  margin: 0 auto;
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  padding-bottom: 32px;
}
</style>

