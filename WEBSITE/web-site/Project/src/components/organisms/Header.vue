<template>
  <header class="header">
    <div class="top-bar">ÜCRETSİZ KARGO | HIZLI TESLİMAT | BERSHKA</div>
    <nav class="nav">
      <button class="menu-button" @click="toggleMenu">☰</button>
      <router-link to="/" class="logo">BERSHKA</router-link>
      <div class="nav-links">
        <router-link to="/category/erkek">ERKEK</router-link>
        <router-link to="/category/kadin">KADIN</router-link>
        <router-link to="/category/yeni">YENİ</router-link>
        <router-link to="/category/indirim">İNDİRİM</router-link>
      </div>
      <div class="nav-icons">
        <button class="icon-button" @click="toggleSearch" title="Ara">🔍</button>
        <router-link to="/account" class="icon-button" title="Hesap">👤</router-link>
        <router-link to="/cart" class="icon-button cart-icon" title="Sepet">
          🛒
          <span v-if="cartStore.itemCount > 0" class="cart-badge">{{ cartStore.itemCount }}</span>
        </router-link>
      </div>
    </nav>
    <div v-if="showSearch" class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Ürün ara..."
        class="search-input"
        @keyup.enter="performSearch"
      />
      <button @click="performSearch" class="search-button">Ara</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useProductsStore } from '@/stores/products'

const router = useRouter()
const cartStore = useCartStore()
const productsStore = useProductsStore()

const showSearch = ref(false)
const searchQuery = ref('')

function toggleMenu() {
  // Menu toggle logic
}

function toggleSearch() {
  showSearch.value = !showSearch.value
}

function performSearch() {
  if (searchQuery.value.trim()) {
    // Navigate to search results or filter products
    router.push({ name: 'home', query: { search: searchQuery.value } })
  }
}
</script>

<style scoped>
.header {
  background: var(--panel-light);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.top-bar {
  background: var(--accent-primary);
  color: white;
  text-align: center;
  padding: 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
}

.nav {
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.logo {
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 4px;
  color: var(--accent-primary);
  text-transform: uppercase;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 25px;
}

.nav-links {
  display: flex;
  gap: 25px;
}

.nav-links a {
  text-decoration: none;
  color: var(--accent-secondary);
  font-weight: 500;
  font-size: 14px;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--accent-primary);
}

.menu-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-icons {
  display: flex;
  gap: 20px;
  align-items: center;
}

.icon-button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  text-decoration: none;
  color: var(--accent-secondary);
  position: relative;
}

.cart-icon {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: #e2001a;
  color: white;
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  border-radius: 50%;
  min-width: 18px;
  text-align: center;
}

.search-bar {
  padding: 1rem 2rem;
  background: white;
  border-top: 1px solid #eee;
  display: flex;
  gap: 1rem;
}

.search-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  font-size: 1rem;
}

.search-button {
  padding: 0.75rem 2rem;
  background: #000;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
}
</style>

