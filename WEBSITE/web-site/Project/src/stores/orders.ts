import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Order, OrderStatus } from '@/types/order'

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref<Order[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const selectedOrder = ref<Order | null>(null)

  const pendingOrders = computed(() => 
    orders.value.filter(o => o.status === 'pending' || o.status === 'confirmed')
  )

  const completedOrders = computed(() => 
    orders.value.filter(o => o.status === 'delivered')
  )

  async function fetchOrders(userId: string) {
    loading.value = true
    error.value = null
    try {
      // Firebase query will be implemented here
      orders.value = []
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch orders'
    } finally {
      loading.value = false
    }
  }

  async function fetchOrderById(orderId: string) {
    loading.value = true
    error.value = null
    try {
      // Firebase query will be implemented here
      const order = orders.value.find(o => o.id === orderId)
      selectedOrder.value = order || null
      return order
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch order'
      return null
    } finally {
      loading.value = false
    }
  }

  async function createOrder(orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) {
    loading.value = true
    error.value = null
    try {
      // Firebase create will be implemented here
      const newOrder: Order = {
        ...orderData,
        id: `order-${Date.now()}`,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      orders.value.unshift(newOrder)
      return newOrder
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to create order'
      return null
    } finally {
      loading.value = false
    }
  }

  async function updateOrderStatus(orderId: string, status: OrderStatus) {
    loading.value = true
    error.value = null
    try {
      // Firebase update will be implemented here
      const order = orders.value.find(o => o.id === orderId)
      if (order) {
        order.status = status
        order.updatedAt = new Date()
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update order'
    } finally {
      loading.value = false
    }
  }

  return {
    orders,
    loading,
    error,
    selectedOrder,
    pendingOrders,
    completedOrders,
    fetchOrders,
    fetchOrderById,
    createOrder,
    updateOrderStatus
  }
})

