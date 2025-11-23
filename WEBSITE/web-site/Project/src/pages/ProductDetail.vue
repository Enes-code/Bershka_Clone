<template>
  <div class="product-detail-page">
    <div class="component-header">
      <h2>Ürün Detayı</h2>
      <p>Ürün görselleri, fiyat ve sepete ekleme</p>
    </div>
    <div class="product-page">
      <div class="product-image-gallery">
        <img 
          :src="mainImage" 
          :alt="product.name" 
          class="product-main-image"
          @error="handleMainImageError"
        />
        <div class="product-thumbnails">
          <img
            v-for="(img, idx) in product.images"
            :key="idx"
            :src="img"
            :alt="product.name + ' görsel ' + (idx + 1)"
            class="product-thumbnail"
            :class="{ active: mainImage === img }"
            @click="mainImage = img"
            @error="handleThumbnailError($event, idx)"
          />
        </div>
      </div>
      <div class="product-info">
        <h1 class="product-title">{{ product.name }}</h1>
        <p class="product-description">{{ product.description }}</p>
        <div class="product-price">₺{{ product.price }}</div>
        <div>
          <strong>Renk:</strong>
          <div class="color-options">
            <span
              v-for="color in product.colors"
              :key="color.name"
              class="color-option"
              :class="{ active: selectedColor === color.name }"
              :style="{ background: color.value, color: color.textColor, borderColor: color.borderColor }"
              @click="selectedColor = color.name"
            >
              {{ color.name }}
            </span>
          </div>
        </div>
        <div>
          <strong>Beden:</strong>
          <div class="size-options">
            <span
              v-for="size in product.sizes"
              :key="size"
              class="size-option"
              :class="{ active: selectedSize === size }"
              @click="selectedSize = size"
            >
              {{ size }}
            </span>
          </div>
        </div>
        <Button @click="addToCart">SEPETE EKLE</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/atoms/Button.vue'

export default {
  name: 'ProductDetail',
  components: {
    Button
  },
  data() {
    return {
      product: {
        name: "Baggy Fit Teknik Kargo Pantolon",
        description: "Su itici kumaştan üretilmiş, çok cepli rahat kesim kargo pantolon. Modern ve şık tasarımı ile günlük kullanım için ideal.",
        price: "499,90",
        images: [
          "https://images.unsplash.com/photo-1555529759-d8e7c10b271d?w=600&h=700&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1628103923480-c1109a962a98?w=600&h=700&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=700&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=700&auto=format&fit=crop"
        ],
        colors: [
          { name: "Siyah", value: "#000", textColor: "white", borderColor: "#000" },
          { name: "Gri", value: "#ccc", textColor: "black", borderColor: "#000" },
          { name: "Koyu Gri", value: "#555", textColor: "white", borderColor: "#555" }
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      mainImage: "https://images.unsplash.com/photo-1555529759-d8e7c10b271d?w=600&h=700&auto=format&fit=crop",
      selectedColor: "Siyah",
      selectedSize: "M"
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product.name)
    },
    handleMainImageError(event) {
      event.target.src = `https://via.placeholder.com/600x700/000000/FFFFFF?text=${this.product.name}`
    },
    handleThumbnailError(event, idx) {
      event.target.src = `https://via.placeholder.com/100x100/000000/FFFFFF?text=${idx + 1}`
    }
  },
  emits: ['add-to-cart']
}
</script>

<style scoped>
.product-detail-page {
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

.product-page {
  background: var(--panel-light);
  padding: 40px;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.product-image-gallery {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product-main-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 4px;
}

.product-thumbnails {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.product-thumbnail {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;
}

.product-thumbnail:hover,
.product-thumbnail.active {
  border-color: var(--accent-primary);
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-title {
  color: var(--accent-primary);
  font-size: 32px;
  margin-bottom: 15px;
}

.product-description {
  color: var(--accent-secondary);
  font-size: 16px;
  line-height: 1.6;
}

.product-price {
  color: var(--accent-primary);
  font-size: 28px;
  font-weight: bold;
}

.color-options,
.size-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.color-option,
.size-option {
  border: 1px solid var(--accent-secondary);
  color: var(--accent-secondary);
  border-radius: 0;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.color-option.active,
.size-option.active {
  border-color: var(--accent-primary);
  background: var(--accent-primary);
  color: white;
}

@media (max-width: 768px) {
  .product-page {
    grid-template-columns: 1fr;
  }
}
</style>

