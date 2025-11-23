<template>
  <div class="product-list">
    <div class="component-header">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </div>
    <div class="products-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '../molecules/ProductCard.vue'

export default {
  name: 'ProductList',
  components: {
    ProductCard
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
    handleAddToCart(productName) {
      this.$emit('add-to-cart', productName)
    }
  },
  emits: ['add-to-cart']
}
</script>

<style scoped>
.product-list {
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
}

.component-header p {
  color: var(--accent-secondary);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>

