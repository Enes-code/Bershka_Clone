import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product } from '@/types/product'

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const selectedProduct = ref<Product | null>(null)

  const featuredProducts = computed(() => 
    products.value.filter(p => p.tags?.includes('featured')).slice(0, 8)
  )

  const newArrivals = computed(() => 
    products.value
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 12)
  )

  async function fetchProducts() {
    loading.value = true
    error.value = null
    try {
      // Firebase query will be implemented here
      // For now, using mock data
      products.value = []
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch products'
    } finally {
      loading.value = false
    }
  }

  async function fetchProductById(id: string) {
    loading.value = true
    error.value = null
    try {
      // Firebase query will be implemented here
      const product = products.value.find(p => p.id === id)
      selectedProduct.value = product || null
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch product'
    } finally {
      loading.value = false
    }
  }

  async function fetchProductsByCategory(categoryId: string) {
    loading.value = true
    error.value = null
    try {
      // Firebase query will be implemented here
      return products.value.filter(p => p.categoryId === categoryId)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch products'
      return []
    } finally {
      loading.value = false
    }
  }

  function searchProducts(query: string) {
    const lowerQuery = query.toLowerCase()
    return products.value.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
  }

  return {
    products,
    loading,
    error,
    selectedProduct,
    featuredProducts,
    newArrivals,
    fetchProducts,
    fetchProductById,
    fetchProductsByCategory,
    searchProducts
  }
})

