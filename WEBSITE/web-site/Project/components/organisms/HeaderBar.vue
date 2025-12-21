<template>
  <div>
    <!-- TOP BAR -->
    <div class="top-bar">
      <div class="container">
        <div class="top-bar-content">
          <div class="top-bar-left">
            <a href="#" class="top-link">TR | ₺</a>
            <a href="#" class="top-link">Sipariş takip</a>
            <a href="#" class="top-link">Bize katıl</a>
            <a href="#" class="top-link">Hediye kartı</a>
            <a href="#" class="top-link">Mağaza bul</a>
          </div>
          <div class="top-bar-right">
            <a href="#" class="top-link">Müşteri hizmetleri</a>
          </div>
        </div>
      </div>
    </div>

    <!-- MAIN HEADER -->
    <header class="main-header">
      <div class="container">
        <div class="header-content">
          <!-- Left: Mobile Menu -->
          <button class="mobile-menu-btn" @click="toggleMobileMenu">
            <span class="menu-line"></span>
            <span class="menu-line"></span>
            <span class="menu-line"></span>
          </button>

          <!-- Left: Categories -->
          <nav class="category-nav">
            <NuxtLink to="/category/kadin" class="category-link active">KADIN</NuxtLink>
            <NuxtLink to="/category/erkek" class="category-link">ERKEK</NuxtLink>
            <a href="#" class="category-link">BEBEK</a>
            <a href="#" class="category-link">EV</a>
            <a href="#" class="category-link">BEAUTY</a>
          </nav>

          <!-- Center: Logo -->
          <div class="logo-container">
            <NuxtLink to="/" class="logo">
              <span class="logo-text">BERSHKA</span>
            </NuxtLink>
          </div>

          <!-- Right: Search & Icons -->
          <div class="header-right">
            <div class="search-container">
              <button class="search-btn">
                <svg class="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="currentColor"/>
                </svg>
              </button>
              <input 
                type="text" 
                class="search-input" 
                placeholder="Ürün veya koleksiyon ara"
                v-model="searchQuery"
              >
            </div>

            <div class="user-icons">
              <NuxtLink to="/account" class="icon-link">
                <svg class="user-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM11 4C13.2091 4 15 5.79086 15 8C15 10.2091 13.2091 12 11 12C8.79086 12 7 10.2091 7 8C7 5.79086 8.79086 4 11 4ZM11 19.2C8.39026 19.2 6.01508 17.9934 4.36727 16.0362C4.41973 14.0588 8.02667 12.8 11 12.8C13.964 12.8 17.5803 14.0588 17.6327 16.0362C15.9849 17.9934 13.6097 19.2 11 19.2Z" fill="currentColor"/>
                </svg>
              </NuxtLink>
              <a href="#" class="icon-link">
                <svg class="heart-icon" width="22" height="20" viewBox="0 0 22 20" fill="none">
                  <path d="M11 19.5L9.55 18.12C3.4 12.38 0 9.16 0 5.25C0 2.13 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.13 20 5.25C20 9.16 16.6 12.38 10.45 18.12L11 19.5Z" fill="currentColor"/>
                </svg>
              </a>
              <NuxtLink to="/cart" class="icon-link cart-icon">
                <svg class="cart-svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L21.16 5.48C21.25 5.31 21.3 5.13 21.3 4.94C21.3 4.42 20.88 4 20.36 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
                </svg>
                <span class="cart-count" v-if="cartCount > 0">{{ cartCount }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
const cart = useCartStore()
const cartCount = computed(() => cart.count)
const searchQuery = ref('')
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

/* TOP BAR */
.top-bar {
  background-color: #000;
  color: #fff;
  font-size: 11px;
  padding: 8px 0;
}

.top-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-bar-left,
.top-bar-right {
  display: flex;
  gap: 20px;
}

.top-link {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.top-link:hover {
  text-decoration: underline;
}

/* MAIN HEADER */
.main-header {
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 3px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-line {
  width: 20px;
  height: 2px;
  background-color: #000;
}

.category-nav {
  display: flex;
  gap: 25px;
}

.category-link {
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.category-link.active {
  color: #e60000;
}

.category-link:hover {
  color: #666;
}

.logo-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.logo-text {
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #000;
  text-decoration: none;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 25px;
}

.search-container {
  display: flex;
  align-items: center;
  position: relative;
}

.search-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  position: absolute;
  left: 10px;
}

.search-icon {
  color: #666;
  width: 18px;
  height: 18px;
}

.search-input {
  padding: 8px 8px 8px 35px;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  font-size: 14px;
  width: 200px;
}

.search-input:focus {
  outline: none;
  border-color: #000;
}

.user-icons {
  display: flex;
  gap: 20px;
}

.icon-link {
  color: #000;
  text-decoration: none;
  position: relative;
}

.user-icon,
.heart-icon,
.cart-svg {
  width: 22px;
  height: 22px;
}

.cart-icon {
  position: relative;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }
  
  .category-nav {
    display: none;
  }
  
  .header-right {
    gap: 15px;
  }
  
  .search-input {
    width: 150px;
  }
}

@media (max-width: 480px) {
  .search-container {
    display: none;
  }
}
</style>


