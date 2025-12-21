import { collection, doc, query, where, orderBy, limit } from 'firebase/firestore'
import { db } from '@/plugins/firebase.client'

/**
 * Collection reference helper
 * Sorgular store'larda yapılacak, bu sadece referans oluşturur
 */

export function useProductsCollection() {
  return collection(db, 'products')
}

export function useProductDoc(id: string) {
  return doc(db, 'products', id)
}

export function useCategoriesCollection() {
  return collection(db, 'categories')
}

export function useCategoryDoc(id: string) {
  return doc(db, 'categories', id)
}

export function useCartCollection(userId: string) {
  return collection(db, 'users', userId, 'cart')
}

export function useCartDoc(userId: string, itemId: string) {
  return doc(db, 'users', userId, 'cart', itemId)
}

export function useOrdersCollection(userId: string) {
  return collection(db, 'users', userId, 'orders')
}

export function useOrderDoc(userId: string, orderId: string) {
  return doc(db, 'users', userId, 'orders', orderId)
}

export function useUsersCollection() {
  return collection(db, 'users')
}

export function useUserDoc(userId: string) {
  return doc(db, 'users', userId)
}

// Query helpers
export function useProductsByCategoryQuery(categoryId: string) {
  const productsRef = useProductsCollection()
  return query(
    productsRef,
    where('categoryId', '==', categoryId),
    where('inStock', '==', true),
    orderBy('createdAt', 'desc')
  )
}

export function useFeaturedProductsQuery() {
  const productsRef = useProductsCollection()
  return query(
    productsRef,
    where('tags', 'array-contains', 'featured'),
    where('inStock', '==', true),
    limit(8)
  )
}

export function useNewArrivalsQuery(count: number = 12) {
  const productsRef = useProductsCollection()
  return query(
    productsRef,
    where('inStock', '==', true),
    orderBy('createdAt', 'desc'),
    limit(count)
  )
}

export function useActiveCategoriesQuery() {
  const categoriesRef = useCategoriesCollection()
  return query(
    categoriesRef,
    where('isActive', '==', true),
    orderBy('order', 'asc')
  )
}

