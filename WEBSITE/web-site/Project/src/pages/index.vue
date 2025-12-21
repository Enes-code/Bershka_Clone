<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">YENİ SEZON</h1>
        <p class="hero-subtitle">Stilini keşfet</p>
        <button class="hero-cta">Şimdi Keşfet</button>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="featured-section">
      <div class="container">
        <h2 class="section-title">Öne Çıkanlar</h2>
        <ProductGrid :products="featuredProducts" />
      </div>
    </section>

    <!-- New Arrivals -->
    <section class="new-arrivals-section">
      <div class="container">
        <h2 class="section-title">Yeni Gelenler</h2>
        <ProductGrid :products="newArrivals" />
      </div>
    </section>

    <!-- Campaign Banner -->
    <section class="campaign-section">
      <div class="campaign-banner">
        <h2>%50'ye Varan İndirimler</h2>
        <p>Seçili ürünlerde geçerli</p>
        <button class="campaign-button">Alışverişe Başla</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useProductsStore } from '@/stores/products'
import ProductGrid from '@/components/organisms/ProductGrid.vue'

const productsStore = useProductsStore()

const featuredProducts = computed(() => productsStore.featuredProducts)
const newArrivals = computed(() => productsStore.newArrivals)

onMounted(() => {
  productsStore.fetchProducts()
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.hero-section {
  position: relative;
  height: 600px;
  background: linear-gradient(135deg, #000 0%, #333 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-content {
  z-index: 1;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-cta {
  padding: 1rem 3rem;
  font-size: 1.1rem;
  background: white;
  color: #000;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s;
}

.hero-cta:hover {
  transform: scale(1.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.featured-section,
.new-arrivals-section {
  padding: 4rem 0;
}

.campaign-section {
  padding: 4rem 2rem;
}

.campaign-banner {
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #e2001a 0%, #ff4757 100%);
  color: white;
  padding: 4rem;
  text-align: center;
  border-radius: 8px;
}

.campaign-banner h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.campaign-banner p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.campaign-button {
  padding: 1rem 3rem;
  font-size: 1.1rem;
  background: white;
  color: #e2001a;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s;
}

.campaign-button:hover {
  transform: scale(1.05);
}
</style>

