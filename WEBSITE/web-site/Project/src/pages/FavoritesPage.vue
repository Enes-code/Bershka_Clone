<template>
  <div class="favorites-page">
    <div class="component-header">
      <h2>Favorilerim</h2>
      <p>Beğendiğiniz ürünler</p>
    </div>
    <ItemGrid
      v-if="favoriteProducts.length > 0"
      title=""
      subtitle=""
      :products="favoriteProducts"
      @add-to-cart="handleAddToCart"
      @toggle-favorite="handleToggleFavorite"
    />
    <div v-else class="empty-favorites">
      <p>Henüz favori ürününüz yok.</p>
      <ActionButton @click="$emit('navigate', 'home')">ALIŞVERİŞE BAŞLA</ActionButton>
    </div>
  </div>
</template>

<script>
import ItemGrid from '../components/organisms/ItemGrid.vue'
import ActionButton from '../components/atoms/ActionButton.vue'

export default {
  name: 'FavoritesPage',
  components: {
    ItemGrid,
    ActionButton
  },
  props: {
    favoriteProducts: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleAddToCart(product) {
      this.$emit('add-to-cart', product)
    },
    handleToggleFavorite(product, isFavorite) {
      this.$emit('toggle-favorite', product, isFavorite)
    }
  },
  emits: ['add-to-cart', 'toggle-favorite', 'navigate']
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
  background: var(--panel-light);
  border-radius: 4px;
  max-width: 500px;
  margin: 0 auto;
}

.empty-favorites p {
  font-size: 18px;
  color: var(--accent-secondary);
  margin-bottom: 20px;
}
</style>

