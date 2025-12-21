<template>
  <div class="category-page">
    <div v-if="loading" class="loading">Yükleniyor...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="category" class="category-content">
      <div class="category-header">
        <h1 class="category-title">{{ category.name }}</h1>
        <p v-if="category.description" class="category-description">
          {{ category.description }}
        </p>
      </div>

      <div class="filters-bar">
        <select v-model="sortBy" class="sort-select">
          <option value="newest">Yeniden Eskiye</option>
          <option value="oldest">Eskiden Yeniye</option>
          <option value="price-low">Fiyat: Düşükten Yükseğe</option>
          <option value="price-high">Fiyat: Yüksekten Düşüğe</option>
        </select>
      </div>

      <ProductGrid :products="sortedProducts" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCategoriesStore } from '@/stores/categories'
import { useProductsStore } from '@/stores/products'
import ProductGrid from '@/components/organisms/ProductGrid.vue'
import type { Product } from '@/types/product'

const route = useRoute()
const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

const sortBy = ref('newest')
const categoryProducts = ref<Product[]>([])

const category = computed(() => categoriesStore.selectedCategory)
const loading = computed(() => categoriesStore.loading || productsStore.loading)
const error = computed(() => categoriesStore.error || productsStore.error)

const sortedProducts = computed(() => {
  const products = [...categoryProducts.value]
  
  switch (sortBy.value) {
    case 'newest':
      return products.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    case 'oldest':
      return products.sort((a, b) => 
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
    case 'price-low':
      return products.sort((a, b) => a.price - b.price)
    case 'price-high':
      return products.sort((a, b) => b.price - a.price)
    default:
      return products
  }
})

async function loadCategoryData() {
  const slug = route.params.slug as string
  const category = await categoriesStore.fetchCategoryBySlug(slug)
  
  if (category) {
    categoryProducts.value = await productsStore.fetchProductsByCategory(category.id)
  }
}

watch(() => route.params.slug, loadCategoryData)

onMounted(() => {
  loadCategoryData()
})
</script>

<style scoped>
.category-page {
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

.category-content {
  max-width: 1200px;
  margin: 0 auto;
}

.category-header {
  margin-bottom: 3rem;
  text-align: center;
}

.category-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.category-description {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.filters-bar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.sort-select {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  font-size: 0.9rem;
}
</style>

