<template>
  <div class="favorites-page">
    <div class="component-header">
      <h2>Favorilerim</h2>
      <p>Beğendiğiniz ürünler</p>
    </div>
    <ProductList
      v-if="favoriteProducts.length > 0"
      title=""
      subtitle=""
      :products="favoriteProducts"
      @add-to-cart="handleAddToCart"
    />
    <div v-else class="empty-favorites">
      <p>Henüz favori ürününüz yok.</p>
    </div>
  </div>
</template>

<script>
import ProductList from '../components/organisms/ProductList.vue'

export default {
  name: 'Favorites',
  components: {
    ProductList
  },
  data() {
    return {
      favoriteProducts: [
        { id: 1, name: "Oversize Sweatshirt", price: "399,90", image: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=400&h=500&auto=format&fit=crop" },
        { id: 2, name: "Denim Ceket", price: "599,90", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&auto=format&fit=crop" }
      ]
    }
  },
  methods: {
    handleAddToCart(productName) {
      this.$emit('add-to-cart', productName)
    }
  },
  emits: ['add-to-cart']
}
</script>

<style scoped>
.favorites-page {
  padding: 20px 0;
}

.component-header {
  margin-top: 0;
  margin-bottom: 30px;
  text-align: center;
}

.component-header h2 {
  font-size: 32px;
  color: var(--accent-primary);
  margin-bottom: 10px;
}

.empty-favorites {
  text-align: center;
  padding: 60px 20px;
  color: var(--accent-secondary);
  font-size: 18px;
}
</style>

