import { defineStore } from 'pinia'
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore'
import type { User, Address } from '~/types/user'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const isAuthenticated = ref(false)

  const nuxtApp = useNuxtApp()
  const $db = nuxtApp.$db

  async function upsertUserProfile(userId: string, userData: Partial<User>) {
    if (!$db) {
      console.warn('Firebase not initialized')
      return
    }
    loading.value = true
    error.value = null
    try {
      const userRef = doc($db, 'users', userId)
      const userSnap = await getDoc(userRef)
      
      const updateData = {
        ...userData,
        updatedAt: new Date()
      }

      if (userSnap.exists()) {
        await updateDoc(userRef, updateData)
      } else {
        await setDoc(userRef, {
          id: userId,
          ...updateData,
          createdAt: new Date(),
          addresses: [],
          isEmailVerified: false
        })
      }

      // Refresh user data
      const updatedSnap = await getDoc(userRef)
      if (updatedSnap.exists()) {
        user.value = {
          id: updatedSnap.id,
          ...updatedSnap.data(),
          createdAt: updatedSnap.data().createdAt?.toDate() || new Date(),
          updatedAt: updatedSnap.data().updatedAt?.toDate() || new Date()
        } as User
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update user profile'
      console.error('Error updating user profile:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  async function updateUserAddress(userId: string, addressId: string, addressData: Partial<Address>) {
    if (!$db) {
      console.warn('Firebase not initialized')
      return
    }
    loading.value = true
    error.value = null
    try {
      const userRef = doc($db, 'users', userId)
      const userSnap = await getDoc(userRef)
      
      if (userSnap.exists()) {
        const userData = userSnap.data() as User
        const addresses = userData.addresses || []
        const addressIndex = addresses.findIndex(addr => addr.id === addressId)
        
        if (addressIndex > -1) {
          addresses[addressIndex] = { ...addresses[addressIndex], ...addressData }
        } else {
          addresses.push({ ...addressData, id: addressId } as Address)
        }

        await updateDoc(userRef, {
          addresses,
          updatedAt: new Date()
        })

        // Refresh user data
        const updatedSnap = await getDoc(userRef)
        if (updatedSnap.exists()) {
          user.value = {
            id: updatedSnap.id,
            ...updatedSnap.data(),
            createdAt: updatedSnap.data().createdAt?.toDate() || new Date(),
            updatedAt: updatedSnap.data().updatedAt?.toDate() || new Date()
          } as User
        }
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update address'
      console.error('Error updating address:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  function setUser(userData: User | null) {
    user.value = userData
    isAuthenticated.value = !!userData
  }

  return {
    user,
    loading,
    error,
    isAuthenticated,
    upsertUserProfile,
    updateUserAddress,
    setUser
  }
})

