<template>
  <div class="app-container">
    <Sidebar 
      :is-open="isMenuOpen"
      :components="components"
      :active-component="activeComponent"
      @close="isMenuOpen = false"
      @show-component="showComponent"
    />
    <div class="main-content">
      <HeaderBar 
        @toggle-menu="isMenuOpen = !isMenuOpen"
        @show-component="showComponent"
      />
      <component 
        :is="activeComponent.component" 
        @show-component="showComponent"
        @add-to-cart="handleAddToCart"
      />
      <FooterBar />
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/organisms/HeaderBar.vue'
import Sidebar from './components/organisms/Sidebar.vue'
import FooterBar from './components/organisms/FooterBar.vue'
import HomePage from './pages/HomePage.vue'
import LoginForm from './components/organisms/LoginForm.vue'
import RegisterForm from './components/organisms/RegisterForm.vue'
import ProductPage from './components/organisms/ProductPage.vue'
import Cart from './components/organisms/Cart.vue'
import ProductSlider from './components/organisms/ProductSlider.vue'
import MembershipModal from './components/organisms/MembershipModal.vue'
import Campaigns from './components/organisms/Campaigns.vue'

export default {
  name: 'App',
  components: {
    HeaderBar,
    Sidebar,
    FooterBar,
    HomePage,
    LoginForm,
    RegisterForm,
    ProductPage,
    Cart,
    ProductSlider,
    MembershipModal,
    Campaigns
  },
  data() {
    return {
      isMenuOpen: false,
      activeComponent: {},
      components: [
        { name: 'anasayfa', label: 'Ana Sayfa', component: HomePage },
        { name: 'giriş', label: 'Giriş Yap', component: LoginForm },
        { name: 'kayıt', label: 'Kayıt Ol', component: RegisterForm },
        { name: 'ürün', label: 'Ürün Detayı', component: ProductPage },
        { name: 'sepet', label: 'Sepet Paneli', component: Cart },
        { name: 'benzerürünler', label: 'Benzer Ürünler', component: ProductSlider },
        { name: 'üyelik', label: 'Bershka Club', component: MembershipModal },
        { name: 'kampanyalar', label: 'Kampanyalar', component: Campaigns }
      ]
    }
  },
  mounted() {
    this.activeComponent = this.components.find(c => c.name === 'anasayfa')
  },
  methods: {
    showComponent(compName) {
      const comp = this.components.find(c => c.name === compName)
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

