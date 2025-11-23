<template>
  <div class="product-card">
    <img 
      :src="product.image" 
      :alt="product.name"
      @error="handleImageError"
    />
    <div class="product-info">
      <h4 class="product-name">{{ product.name }}</h4>
      <p class="price">₺{{ product.price }}</p>
      <Button @click="addToCart">SEPETE EKLE</Button>
    </div>
  </div>
</template>

<script>
import Button from '../atoms/Button.vue'

export default {
  name: 'ProductCard',
  components: {
    Button
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product.name)
    },
    handleImageError(event) {
      event.target.src = `https://via.placeholder.com/400x500/000000/FFFFFF?text=${this.product.name}`
    }
  },
  emits: ['add-to-cart']
}
</script>

<style scoped>
.product-card {
  background: var(--panel-light);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.product-card img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover img {
  transform: scale(1.05);
}

.product-info {
  padding: 15px;
}

.product-name {
  color: var(--accent-secondary);
  font-size: 16px;
  margin-bottom: 8px;
}

.price {
  font-weight: bold;
  color: var(--accent-primary);
  font-size: 18px;
  margin-bottom: 10px;
}
</style>

