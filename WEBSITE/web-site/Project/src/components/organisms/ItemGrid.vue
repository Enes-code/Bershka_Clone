<template>
  <div class="item-grid">
    <div class="component-header">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </div>
    <div class="items-grid">
      <ItemCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
        @toggle-favorite="handleToggleFavorite"
      />
    </div>
  </div>
</template>

<script>
import ItemCard from '../molecules/ItemCard.vue'

export default {
  name: 'ItemGrid',
  components: {
    ItemCard
  },
  props: {
    title: {
      type: String,
      default: 'Ürünler'
    },
    subtitle: {
      type: String,
      default: ''
    },
    products: {
      type: Array,
      required: true
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
  emits: ['add-to-cart', 'toggle-favorite']
}
</script>

<style scoped>
.item-grid {
  margin: 20px 0;
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
  transition: color 0.3s;
}

.component-header p {
  color: var(--accent-secondary);
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

@media (max-width: 1200px) {
  .items-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .items-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .items-grid {
    grid-template-columns: 1fr;
  }
}
</style>

