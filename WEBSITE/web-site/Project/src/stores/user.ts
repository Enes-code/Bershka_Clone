import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, Address, UserPreferences } from '@/types/user'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const isAuthenticated = ref(false)

  const fullName = computed(() => 
    user.value ? `${user.value.firstName} ${user.value.lastName}` : ''
  )

  const defaultShippingAddress = computed(() => 
    user.value?.addresses.find(a => a.id === user.value?.defaultShippingAddressId)
  )

  const defaultBillingAddress = computed(() => 
    user.value?.addresses.find(a => a.id === user.value?.defaultBillingAddressId)
  )

  async function login(email: string, password: string) {
    loading.value = true
    error.value = null
    try {
      // Firebase authentication will be implemented here
      // For now, mock authentication
      isAuthenticated.value = true
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Login failed'
      isAuthenticated.value = false
    } finally {
      loading.value = false
    }
  }

  async function register(email: string, password: string, firstName: string, lastName: string) {
    loading.value = true
    error.value = null
    try {
      // Firebase registration will be implemented here
      isAuthenticated.value = true
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Registration failed'
      isAuthenticated.value = false
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    loading.value = true
    try {
      // Firebase logout will be implemented here
      user.value = null
      isAuthenticated.value = false
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Logout failed'
    } finally {
      loading.value = false
    }
  }

  async function fetchUser(userId: string) {
    loading.value = true
    error.value = null
    try {
      // Firebase query will be implemented here
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch user'
    } finally {
      loading.value = false
    }
  }

  async function updateProfile(updates: Partial<User>) {
    loading.value = true
    error.value = null
    try {
      // Firebase update will be implemented here
      if (user.value) {
        user.value = { ...user.value, ...updates, updatedAt: new Date() }
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update profile'
    } finally {
      loading.value = false
    }
  }

  async function addAddress(address: Omit<Address, 'id'>) {
    loading.value = true
    error.value = null
    try {
      // Firebase create will be implemented here
      const newAddress: Address = {
        ...address,
        id: `addr-${Date.now()}`
      }
      if (user.value) {
        user.value.addresses.push(newAddress)
        if (address.isDefault) {
          user.value.defaultShippingAddressId = newAddress.id
        }
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to add address'
    } finally {
      loading.value = false
    }
  }

  async function updateAddress(addressId: string, updates: Partial<Address>) {
    loading.value = true
    error.value = null
    try {
      // Firebase update will be implemented here
      if (user.value) {
        const index = user.value.addresses.findIndex(a => a.id === addressId)
        if (index > -1) {
          user.value.addresses[index] = { ...user.value.addresses[index], ...updates }
        }
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update address'
    } finally {
      loading.value = false
    }
  }

  async function deleteAddress(addressId: string) {
    loading.value = true
    error.value = null
    try {
      // Firebase delete will be implemented here
      if (user.value) {
        user.value.addresses = user.value.addresses.filter(a => a.id !== addressId)
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to delete address'
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    loading,
    error,
    isAuthenticated,
    fullName,
    defaultShippingAddress,
    defaultBillingAddress,
    login,
    register,
    logout,
    fetchUser,
    updateProfile,
    addAddress,
    updateAddress,
    deleteAddress
  }
})

