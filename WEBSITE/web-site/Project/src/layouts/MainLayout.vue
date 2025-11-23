<template>
  <div class="app-container">
    <Sidebar 
      :is-open="isMenuOpen"
      :components="components"
      :active-component="activeComponent"
      @close="isMenuOpen = false"
      @navigate="handleNavigate"
    />
    <div class="main-content">
      <Header 
        @toggle-menu="isMenuOpen = !isMenuOpen"
        @navigate="handleNavigate"
      />
      <component 
        :is="activeComponent.component" 
        @navigate="handleNavigate"
        @add-to-cart="handleAddToCart"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../components/organisms/Header.vue'
import Footer from '../components/organisms/Footer.vue'
import Sidebar from '../components/organisms/Sidebar.vue'
import Home from '../pages/Home.vue'
import LoginSignup from '../pages/LoginSignup.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import Cart from '../pages/Cart.vue'
import Favorites from '../pages/Favorites.vue'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer,
    Sidebar,
    Home,
    LoginSignup,
    ProductDetail,
    Cart,
    Favorites
  },
  data() {
    return {
      isMenuOpen: false,
      activeComponent: {},
      components: [
        { name: 'home', label: 'Ana Sayfa', component: 'Home' },
        { name: 'login', label: 'Giriş Yap', component: 'LoginSignup' },
        { name: 'product', label: 'Ürün Detayı', component: 'ProductDetail' },
        { name: 'cart', label: 'Sepet Paneli', component: 'Cart' },
        { name: 'favorites', label: 'Favoriler', component: 'Favorites' }
      ]
    }
  },
  mounted() {
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
    handleAddToCart(productName) {
      alert(productName + ' sepete eklendi!')
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

