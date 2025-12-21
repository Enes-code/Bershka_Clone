<template>
  <div class="page">
    <HeaderBar />
    <main class="main">
      <slot />
    </main>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import HeaderBar from '~/components/organisms/HeaderBar.vue'
import FooterBar from '~/components/organisms/FooterBar.vue'
</script>

<style scoped>
.page{
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.main{
  flex: 1;
}
</style>

