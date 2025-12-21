import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Cart, CartItem } from '@/types/cart'
import type { Product } from '@/types/product'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Cart>({
    items: [],
    total: 0,
    subtotal: 0,
    shipping: 0,
    discount: 0,
    updatedAt: new Date()
  })

  const itemCount = computed(() => 
    cart.value.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  const isEmpty = computed(() => cart.value.items.length === 0)

  function calculateTotals() {
    cart.value.subtotal = cart.value.items.reduce(
      (sum, item) => sum + (item.price * item.quantity),
      0
    )
    
    cart.value.shipping = cart.value.subtotal > 200 ? 0 : 29.99
    
    const discountAmount = cart.value.discountCode 
      ? cart.value.subtotal * (cart.value.discount / 100)
      : 0
    
    cart.value.total = cart.value.subtotal + cart.value.shipping - discountAmount
    cart.value.updatedAt = new Date()
  }

  function addToCart(product: Product, size: string, color: string, quantity: number = 1) {
    const existingItem = cart.value.items.find(
      item => item.product.id === product.id && item.size === size && item.color === color
    )

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      const newItem: CartItem = {
        id: `${product.id}-${size}-${color}-${Date.now()}`,
        product,
        quantity,
        size,
        color,
        price: product.price,
        addedAt: new Date()
      }
      cart.value.items.push(newItem)
    }

    calculateTotals()
  }

  function removeFromCart(itemId: string) {
    const index = cart.value.items.findIndex(item => item.id === itemId)
    if (index > -1) {
      cart.value.items.splice(index, 1)
      calculateTotals()
    }
  }

  function updateQuantity(itemId: string, quantity: number) {
    const item = cart.value.items.find(item => item.id === itemId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(itemId)
      } else {
        item.quantity = quantity
        calculateTotals()
      }
    }
  }

  function clearCart() {
    cart.value.items = []
    cart.value.discount = 0
    cart.value.discountCode = undefined
    calculateTotals()
  }

  function applyDiscount(code: string, discountPercent: number) {
    cart.value.discountCode = code
    cart.value.discount = discountPercent
    calculateTotals()
  }

  function removeDiscount() {
    cart.value.discountCode = undefined
    cart.value.discount = 0
    calculateTotals()
  }

  // Initialize totals
  calculateTotals()

  return {
    cart,
    itemCount,
    isEmpty,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    applyDiscount,
    removeDiscount
  }
})

