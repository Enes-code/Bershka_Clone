<template>
  <div class="app-container">
    <MenuPanel 
      :is-open="isMenuOpen"
      :components="components"
      :active-component="activeComponent"
      @close="isMenuOpen = false"
      @navigate="handleNavigate"
    />
    <div class="main-content">
      <TopNavigation 
        :cart-count="cartItems.length"
        :favorites-count="favoriteProducts.length"
        @toggle-menu="isMenuOpen = !isMenuOpen"
        @navigate="handleNavigate"
      />
      <component 
        :is="activeComponent.component" 
        :cart-items="cartItems"
        :favorite-products="favoriteProducts"
        @navigate="handleNavigate"
        @add-to-cart="handleAddToCart"
        @toggle-favorite="handleToggleFavorite"
        @remove-from-cart="handleRemoveFromCart"
        @update-quantity="handleUpdateQuantity"
      />
      <BottomFooter />
    </div>
  </div>
</template>

<script>
import TopNavigation from '../components/organisms/TopNavigation.vue'
import BottomFooter from '../components/organisms/BottomFooter.vue'
import MenuPanel from '../components/organisms/MenuPanel.vue'
import HomePage from '../pages/HomePage.vue'
import AuthPage from '../pages/AuthPage.vue'
import ItemDetailPage from '../pages/ItemDetailPage.vue'
import ShoppingCart from '../pages/ShoppingCart.vue'
import FavoritesPage from '../pages/FavoritesPage.vue'

export default {
  name: 'AppLayout',
  components: {
    TopNavigation,
    BottomFooter,
    MenuPanel,
    HomePage,
    AuthPage,
    ItemDetailPage,
    ShoppingCart,
    FavoritesPage
  },
  data() {
    return {
      isMenuOpen: false,
      activeComponent: {},
      cartItems: [],
      favoriteProducts: [],
      components: [
        { name: 'home', label: 'Ana Sayfa', component: 'HomePage' },
        { name: 'login', label: 'Giriş Yap', component: 'AuthPage' },
        { name: 'product', label: 'Ürün Detayı', component: 'ItemDetailPage' },
        { name: 'cart', label: 'Sepet Paneli', component: 'ShoppingCart' },
        { name: 'favorites', label: 'Favoriler', component: 'FavoritesPage' }
      ]
    }
  },
  mounted() {
    this.loadCart()
    this.loadFavorites()
    this.activeComponent = this.components.find(c => c.name === 'home')
  },
  methods: {
    handleNavigate(componentName) {
      const comp = this.components.find(c => c.name === componentName)
      if (comp) {
        this.activeComponent = comp
        this.isMenuOpen = false
      }
    },
    handleAddToCart(product) {
      const existingItem = this.cartItems.find(item => 
        item.id === product.id && 
        item.color === (product.color || 'Siyah') && 
        item.size === (product.size || 'M')
      )
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cartItems.push({
          ...product,
          color: product.color || 'Siyah',
          size: product.size || 'M',
          quantity: 1,
          cartId: Date.now()
        })
      }
      this.saveCart()
      alert(product.name + ' sepete eklendi!')
    },
    handleRemoveFromCart(cartId) {
      this.cartItems = this.cartItems.filter(item => item.cartId !== cartId)
      this.saveCart()
    },
    handleUpdateQuantity(cartId, change) {
      const item = this.cartItems.find(item => item.cartId === cartId)
      if (item) {
        item.quantity += change
        if (item.quantity <= 0) {
          this.handleRemoveFromCart(cartId)
        } else {
          this.saveCart()
        }
      }
    },
    handleToggleFavorite(product, isFavorite) {
      if (isFavorite) {
        if (!this.favoriteProducts.find(fav => fav.id === product.id)) {
          this.favoriteProducts.push(product)
        }
      } else {
        this.favoriteProducts = this.favoriteProducts.filter(fav => fav.id !== product.id)
      }
      this.saveFavorites()
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems))
    },
    loadCart() {
      const saved = localStorage.getItem('cart')
      if (saved) {
        this.cartItems = JSON.parse(saved)
      }
    },
    saveFavorites() {
      localStorage.setItem('favorites', JSON.stringify(this.favoriteProducts))
    },
    loadFavorites() {
      const saved = localStorage.getItem('favorites')
      if (saved) {
        this.favoriteProducts = JSON.parse(saved)
      }
    }
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  padding-top: 100px;
  margin-left: 0;
}
</style>

