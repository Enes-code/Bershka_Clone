<template>
  <div class="main-content-wrapper">
    <SkipToContent />
    <BottomActionBar />
    <ContentSection />
    <NotificationContainers />
    <LocationModal />
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Tüm component'ler Nuxt 3 auto-import ile yükleniyor
</script>

<style scoped>
.main-content-wrapper {
  width: 100%;
  min-height: 100vh;
}
</style>

