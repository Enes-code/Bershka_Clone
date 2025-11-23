<template>
  <div class="item-card">
    <div class="image-container">
      <img 
        :src="product.image" 
        :alt="product.name"
        @error="handleImageError"
      />
      <div class="card-actions">
        <IconAction 
          icon="❤️" 
          :isActive="isFavorite"
          @click="toggleFavorite"
          title="Favorilere Ekle"
        />
        <IconAction 
          icon="🛒" 
          @click="addToCart"
          title="Sepete Ekle"
        />
      </div>
    </div>
    <div class="item-info">
      <h4 class="item-name">{{ product.name }}</h4>
      <p class="item-price">₺{{ product.price }}</p>
      <ActionButton @click="addToCart">SEPETE EKLE</ActionButton>
    </div>
  </div>
</template>

<script>
import ActionButton from '../atoms/ActionButton.vue'
import IconAction from '../atoms/IconAction.vue'

export default {
  name: 'ItemCard',
  components: {
    ActionButton,
    IconAction
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFavorite: false
    }
  },
  mounted() {
    this.checkFavorite()
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product)
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite
      this.$emit('toggle-favorite', this.product, this.isFavorite)
    },
    checkFavorite() {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      this.isFavorite = favorites.some(fav => fav.id === this.product.id)
    },
    handleImageError(event) {
      event.target.src = `https://via.placeholder.com/400x500/000000/FFFFFF?text=${this.product.name}`
    }
  },
  emits: ['add-to-cart', 'toggle-favorite']
}
</script>

<style scoped>
.item-card {
  background: var(--panel-light);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.item-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.image-container {
  position: relative;
  overflow: hidden;
}

.item-card img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.item-card:hover img {
  transform: scale(1.08);
}

.card-actions {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.item-card:hover .card-actions {
  opacity: 1;
  transform: translateY(0);
}

.item-info {
  padding: 15px;
}

.item-name {
  color: var(--accent-secondary);
  font-size: 16px;
  margin-bottom: 8px;
  transition: color 0.3s;
}

.item-card:hover .item-name {
  color: var(--accent-primary);
}

.item-price {
  font-weight: bold;
  color: var(--accent-primary);
  font-size: 18px;
  margin-bottom: 10px;
}
</style>

