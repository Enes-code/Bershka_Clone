<template>
  <div class="product-page">
    <div v-if="loading" class="loading">Yükleniyor...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="product" class="product-content">
      <div class="product-main">
        <div class="product-images">
          <img 
            :src="selectedImage || product.images[0]" 
            :alt="product.name"
            class="main-image"
          />
          <div class="image-thumbnails">
            <img
              v-for="(image, index) in product.images"
              :key="index"
              :src="image"
              :alt="`${product.name} - ${index + 1}`"
              @click="selectedImage = image"
              :class="{ active: selectedImage === image || (!selectedImage && index === 0) }"
              class="thumbnail"
            />
          </div>
        </div>

        <div class="product-details">
          <h1 class="product-name">{{ product.name }}</h1>
          <div class="product-price">
            <span class="current-price">{{ formatPrice(product.price) }} ₺</span>
            <span v-if="product.originalPrice" class="original-price">
              {{ formatPrice(product.originalPrice) }} ₺
            </span>
          </div>

          <div class="product-description">
            <p>{{ product.description }}</p>
          </div>

          <div class="product-options">
            <div class="option-group">
              <label>Renk:</label>
              <div class="color-options">
                <button
                  v-for="color in product.colors"
                  :key="color.name"
                  @click="selectedColor = color"
                  :class="{ active: selectedColor.name === color.name }"
                  class="color-button"
                  :style="{ backgroundColor: color.hex }"
                  :title="color.name"
                />
              </div>
            </div>

            <div class="option-group">
              <label>Beden:</label>
              <div class="size-options">
                <button
                  v-for="size in product.sizes"
                  :key="size"
                  @click="selectedSize = size"
                  :class="{ active: selectedSize === size, disabled: !isSizeAvailable(size) }"
                  class="size-button"
                >
                  {{ size }}
                </button>
              </div>
            </div>
          </div>

          <div class="product-actions">
            <button 
              @click="addToCart"
              :disabled="!canAddToCart"
              class="add-to-cart-button"
            >
              Sepete Ekle
            </button>
            <button class="favorite-button">♡</button>
          </div>

          <div class="product-info">
            <div class="info-item">
              <strong>Ücretsiz Kargo:</strong> 200₺ ve üzeri siparişlerde
            </div>
            <div class="info-item">
              <strong>İade:</strong> 30 gün içinde ücretsiz iade
            </div>
          </div>
        </div>
      </div>

      <!-- Similar Products -->
      <section class="similar-products">
        <h2>Benzer Ürünler</h2>
        <ProductGrid :products="similarProducts" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import ProductGrid from '@/components/organisms/ProductGrid.vue'
import type { Product, ProductColor } from '@/types/product'

const route = useRoute()
const router = useRouter()
const productsStore = useProductsStore()
const cartStore = useCartStore()

const selectedImage = ref<string | null>(null)
const selectedColor = ref<ProductColor | null>(null)
const selectedSize = ref<string | null>(null)

const product = computed(() => productsStore.selectedProduct)
const loading = computed(() => productsStore.loading)
const error = computed(() => productsStore.error)

const canAddToCart = computed(() => {
  return selectedColor.value !== null && selectedSize.value !== null && product.value?.inStock
})

const similarProducts = computed(() => {
  if (!product.value) return []
  return productsStore.products
    .filter(p => p.categoryId === product.value?.categoryId && p.id !== product.value?.id)
    .slice(0, 4)
})

function formatPrice(price: number): string {
  return price.toFixed(2)
}

function isSizeAvailable(size: string): boolean {
  // Size availability logic would go here
  return true
}

function addToCart() {
  if (!product.value || !selectedColor.value || !selectedSize.value) return
  
  cartStore.addToCart(
    product.value,
    selectedSize.value,
    selectedColor.value.name,
    1
  )
  
  // Show success message or navigate to cart
  alert('Ürün sepete eklendi!')
}

onMounted(async () => {
  const productId = route.params.id as string
  await productsStore.fetchProductById(productId)
  
  if (product.value) {
    selectedColor.value = product.value.colors[0] || null
  }
})
</script>

<style scoped>
.product-page {
  min-height: 100vh;
  padding: 2rem;
}

.loading,
.error {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
}

.error {
  color: #e2001a;
}

.product-content {
  max-width: 1200px;
  margin: 0 auto;
}

.product-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.product-images {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border: 1px solid #eee;
}

.image-thumbnails {
  display: flex;
  gap: 0.5rem;
}

.thumbnail {
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.thumbnail:hover,
.thumbnail.active {
  opacity: 1;
  border-color: #000;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.product-name {
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
}

.product-price {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.current-price {
  font-size: 1.8rem;
  font-weight: 700;
}

.original-price {
  font-size: 1.2rem;
  text-decoration: line-through;
  color: #999;
}

.product-description {
  color: #666;
  line-height: 1.6;
}

.option-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.option-group label {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.color-options,
.size-options {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.color-button {
  width: 40px;
  height: 40px;
  border: 2px solid #ddd;
  cursor: pointer;
  border-radius: 50%;
  transition: transform 0.2s;
}

.color-button:hover {
  transform: scale(1.1);
}

.color-button.active {
  border-color: #000;
  border-width: 3px;
}

.size-button {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.size-button:hover:not(.disabled) {
  border-color: #000;
}

.size-button.active {
  background: #000;
  color: white;
  border-color: #000;
}

.size-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.product-actions {
  display: flex;
  gap: 1rem;
}

.add-to-cart-button {
  flex: 1;
  padding: 1rem 2rem;
  background: #000;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.2s;
}

.add-to-cart-button:hover:not(:disabled) {
  background: #333;
}

.add-to-cart-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.favorite-button {
  width: 50px;
  height: 50px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.2s;
}

.favorite-button:hover {
  border-color: #000;
  background: #f5f5f5;
}

.product-info {
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-item {
  font-size: 0.9rem;
  color: #666;
}

.similar-products {
  margin-top: 4rem;
  padding-top: 4rem;
  border-top: 1px solid #eee;
}

.similar-products h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

@media (max-width: 768px) {
  .product-main {
    grid-template-columns: 1fr;
  }
}
</style>

