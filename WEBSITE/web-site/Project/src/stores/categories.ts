import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Category, CategoryTree } from '@/types/category'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Category[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const selectedCategory = ref<Category | null>(null)

  const activeCategories = computed(() => 
    categories.value.filter(c => c.isActive).sort((a, b) => a.order - b.order)
  )

  const categoryTree = computed((): CategoryTree[] => {
    const tree: CategoryTree[] = []
    const categoryMap = new Map<string, CategoryTree>()

    // First pass: create all nodes
    activeCategories.value.forEach(cat => {
      categoryMap.set(cat.id, { ...cat, children: [] })
    })

    // Second pass: build tree
    activeCategories.value.forEach(cat => {
      const node = categoryMap.get(cat.id)!
      if (cat.parentId && categoryMap.has(cat.parentId)) {
        const parent = categoryMap.get(cat.parentId)!
        if (!parent.children) parent.children = []
        parent.children.push(node)
      } else {
        tree.push(node)
      }
    })

    return tree
  })

  async function fetchCategories() {
    loading.value = true
    error.value = null
    try {
      // Firebase query will be implemented here
      categories.value = []
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch categories'
    } finally {
      loading.value = false
    }
  }

  async function fetchCategoryBySlug(slug: string) {
    loading.value = true
    error.value = null
    try {
      // Firebase query will be implemented here
      const category = categories.value.find(c => c.slug === slug)
      selectedCategory.value = category || null
      return category
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch category'
      return null
    } finally {
      loading.value = false
    }
  }

  function getCategoryById(id: string) {
    return categories.value.find(c => c.id === id)
  }

  return {
    categories,
    loading,
    error,
    selectedCategory,
    activeCategories,
    categoryTree,
    fetchCategories,
    fetchCategoryBySlug,
    getCategoryById
  }
})

