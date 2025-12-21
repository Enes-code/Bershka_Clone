export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  dateOfBirth?: Date
  gender?: 'male' | 'female' | 'other'
  addresses: Address[]
  defaultShippingAddressId?: string
  defaultBillingAddressId?: string
  isEmailVerified: boolean
  createdAt: Date | any
  updatedAt: Date | any
}

export interface Address {
  id: string
  firstName: string
  lastName: string
  phone: string
  addressLine1: string
  addressLine2?: string
  city: string
  state?: string
  postalCode: string
  country: string
  isDefault: boolean
}

export interface UserPreferences {
  language: string
  currency: string
  newsletter: boolean
  smsNotifications: boolean
}

