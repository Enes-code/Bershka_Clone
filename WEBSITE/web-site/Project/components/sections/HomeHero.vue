<template>
  <section class="home-hero">
    <h1 class="hero-logo">BERSHKA</h1>
  </section>
</template>

<script setup lang="ts">
// No logic needed - pure presentation component
</script>

<style scoped>
.home-hero {
  text-align: center;
  padding: 4rem 2rem 2rem;
  background: white;
}

.hero-logo {
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #000;
  margin: 0;
  line-height: 1;
}

@media (max-width: 768px) {
  .home-hero {
    padding: 3rem 1rem 1.5rem;
  }

  .hero-logo {
    font-size: 2.5rem;
    letter-spacing: 0.2em;
  }
}
</style>

