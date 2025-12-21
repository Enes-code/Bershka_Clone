<template>
  <div class="homepage-content">
    <!-- SALE BANNER -->
    <div class="sale-banner">
      <div class="container">
        <a href="#" class="sale-link">
          <span class="sale-text">SALE</span>
          <span class="sale-subtext">50%'ye varan indirimler</span>
        </a>
      </div>
    </div>

    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="hero-slider">
        <div class="hero-slide active">
          <div class="hero-content">
            <h1 class="hero-title">MORA BIR ADIM ÖNE GEÇ</h1>
            <p class="hero-subtitle">Yeni koleksiyonu keşfet</p>
            <a href="#" class="hero-btn">ALIŞVERİŞE BAŞLA</a>
          </div>
          <div class="hero-image">
            <!-- Placeholder for image -->
            <div class="image-placeholder"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CATEGORY SECTION -->
    <section class="category-section">
      <div class="container">
        <div class="category-grid">
          <a href="#" class="category-card">
            <div class="category-image">
              <div class="placeholder-img"></div>
            </div>
            <div class="category-info">
              <h3 class="category-title">YENİ GELENLER</h3>
              <p class="category-desc">Tüm ürünler</p>
            </div>
          </a>
          <a href="#" class="category-card">
            <div class="category-image">
              <div class="placeholder-img"></div>
            </div>
            <div class="category-info">
              <h3 class="category-title">KOZMETİK</h3>
              <p class="category-desc">Yeni ürünler</p>
            </div>
          </a>
          <a href="#" class="category-card">
            <div class="category-image">
              <div class="placeholder-img"></div>
            </div>
            <div class="category-info">
              <h3 class="category-title">GİYİM</h3>
              <p class="category-desc">Tüm ürünler</p>
            </div>
          </a>
          <a href="#" class="category-card">
            <div class="category-image">
              <div class="placeholder-img"></div>
            </div>
            <div class="category-info">
              <h3 class="category-title">AYAKKABI & ÇANTA</h3>
              <p class="category-desc">Tüm ürünler</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- PRODUCT GRID -->
    <section class="product-section">
      <div class="container">
        <h2 class="section-title">ÖNE ÇIKANLAR</h2>
        <div class="product-grid">
          <div class="product-card" v-for="product in featuredProducts" :key="product.id">
            <div class="product-image">
              <div class="image-placeholder"></div>
              <button class="wishlist-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="currentColor"/>
                </svg>
              </button>
              <div class="product-badge" v-if="product.sale">SALE</div>
            </div>
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <div class="product-price">
                <span class="current-price">{{ product.price }} ₺</span>
                <span class="old-price" v-if="product.originalPrice">{{ product.originalPrice }} ₺</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="newsletter-section">
      <div class="container">
        <div class="newsletter-content">
          <h2 class="newsletter-title">BİZE KATILIN</h2>
          <p class="newsletter-desc">Yeniliklerden haberdar olun ve ilk fırsatları kaçırmayın</p>
          <div class="newsletter-form">
            <input type="email" placeholder="E-posta adresiniz" class="newsletter-input">
            <button class="newsletter-btn">KATIL</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

// Sample data
const featuredProducts = ref([
  { id: 1, name: 'Oversize Tişört', price: '299', originalPrice: '599', sale: true },
  { id: 2, name: 'Kot Ceket', price: '899', originalPrice: null, sale: false },
  { id: 3, name: 'Slim Fit Pantolon', price: '499', originalPrice: '799', sale: true },
  { id: 4, name: 'Kadın Elbise', price: '699', originalPrice: null, sale: false },
  { id: 5, name: 'Sneaker', price: '1299', originalPrice: '1999', sale: true },
  { id: 6, name: 'Çanta', price: '599', originalPrice: null, sale: false },
])
</script>

<style scoped>
.homepage-content {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #000;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

/* SALE BANNER */
.sale-banner {
  background-color: #e60000;
  color: #fff;
  text-align: center;
  padding: 12px 0;
}

.sale-link {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: bold;
}

.sale-text {
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sale-subtext {
  font-size: 14px;
}

/* HERO SECTION */
.hero-section {
  background-color: #f5f5f5;
  height: 600px;
  position: relative;
  overflow: hidden;
}

.hero-slide {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 40px;
}

.hero-content {
  flex: 1;
  padding-left: 60px;
}

.hero-title {
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 24px;
  margin-bottom: 30px;
  color: #666;
}

.hero-btn {
  display: inline-block;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  padding: 15px 30px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 14px;
}

.hero-btn:hover {
  background-color: #333;
}

.hero-image {
  flex: 1;
  height: 100%;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ddd, #eee);
}

/* CATEGORY SECTION */
.category-section {
  padding: 60px 0;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.category-card {
  text-decoration: none;
  color: #000;
}

.category-image {
  height: 400px;
  background-color: #f5f5f5;
  margin-bottom: 15px;
  overflow: hidden;
}

.placeholder-img {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #e5e5e5, #f0f0f0);
}

.category-info {
  text-align: center;
}

.category-title {
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.category-desc {
  font-size: 14px;
  color: #666;
}

/* PRODUCT SECTION */
.product-section {
  padding: 60px 0;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.product-card {
  text-decoration: none;
  color: #000;
}

.product-image {
  position: relative;
  height: 450px;
  background-color: #f5f5f5;
  margin-bottom: 15px;
  overflow: hidden;
}

.wishlist-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
}

.wishlist-btn svg {
  width: 20px;
  height: 20px;
  fill: #fff;
  stroke: #000;
  stroke-width: 1px;
}

.product-badge {
  position: absolute;
  top: 15px;
  left: 0;
  background-color: #e60000;
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}

.product-info {
  text-align: center;
}

.product-name {
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: normal;
}

.product-price {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.current-price {
  font-weight: bold;
}

.old-price {
  text-decoration: line-through;
  color: #666;
}

/* NEWSLETTER */
.newsletter-section {
  background-color: #f5f5f5;
  padding: 60px 0;
  text-align: center;
}

.newsletter-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.newsletter-desc {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
}

.newsletter-form {
  display: flex;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-input {
  flex: 1;
  padding: 15px 20px;
  border: 1px solid #ddd;
  font-size: 14px;
}

.newsletter-btn {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 15px 30px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
}

.newsletter-btn:hover {
  background-color: #333;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .category-grid,
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-title {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 400px;
  }
  
  .hero-title {
    font-size: 24px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .hero-content {
    padding-left: 20px;
  }
}

@media (max-width: 480px) {
  .category-grid,
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
