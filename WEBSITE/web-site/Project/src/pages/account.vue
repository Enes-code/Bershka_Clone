<template>
  <div class="account-page">
    <div class="container">
      <h1 class="page-title">Hesabım</h1>

      <div v-if="!userStore.isAuthenticated" class="not-authenticated">
        <p>Giriş yapmanız gerekiyor</p>
        <router-link to="/" class="login-link">Giriş Yap</router-link>
      </div>

      <div v-else class="account-content">
        <div class="account-sidebar">
          <nav class="account-nav">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="{ active: activeTab === tab.id }"
              class="nav-button"
            >
              {{ tab.label }}
            </button>
          </nav>
        </div>

        <div class="account-main">
          <!-- Profile Tab -->
          <div v-if="activeTab === 'profile'" class="tab-content">
            <h2>Profil Bilgileri</h2>
            <div class="form-section">
              <div class="form-group">
                <label>Ad</label>
                <input v-model="profileForm.firstName" type="text" />
              </div>
              <div class="form-group">
                <label>Soyad</label>
                <input v-model="profileForm.lastName" type="text" />
              </div>
              <div class="form-group">
                <label>E-posta</label>
                <input v-model="profileForm.email" type="email" disabled />
              </div>
              <div class="form-group">
                <label>Telefon</label>
                <input v-model="profileForm.phone" type="tel" />
              </div>
              <button @click="updateProfile" class="save-button">Kaydet</button>
            </div>
          </div>

          <!-- Orders Tab -->
          <div v-if="activeTab === 'orders'" class="tab-content">
            <h2>Siparişlerim</h2>
            <div v-if="ordersStore.loading" class="loading">Yükleniyor...</div>
            <div v-else-if="ordersStore.orders.length === 0" class="empty-state">
              <p>Henüz siparişiniz yok</p>
            </div>
            <div v-else class="orders-list">
              <div
                v-for="order in ordersStore.orders"
                :key="order.id"
                class="order-card"
              >
                <div class="order-header">
                  <div>
                    <p class="order-id">Sipariş #{{ order.id }}</p>
                    <p class="order-date">{{ formatDate(order.createdAt) }}</p>
                  </div>
                  <span :class="['order-status', order.status]">
                    {{ getStatusLabel(order.status) }}
                  </span>
                </div>
                <div class="order-items">
                  <div
                    v-for="item in order.items"
                    :key="item.id"
                    class="order-item"
                  >
                    <img :src="item.product.images[0]" :alt="item.product.name" class="item-image" />
                    <div class="item-info">
                      <p class="item-name">{{ item.product.name }}</p>
                      <p class="item-details">{{ item.color }} | {{ item.size }} | Adet: {{ item.quantity }}</p>
                    </div>
                    <p class="item-price">{{ formatPrice(item.price * item.quantity) }} ₺</p>
                  </div>
                </div>
                <div class="order-footer">
                  <p class="order-total">Toplam: {{ formatPrice(order.total) }} ₺</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Addresses Tab -->
          <div v-if="activeTab === 'addresses'" class="tab-content">
            <h2>Adreslerim</h2>
            <div v-if="userStore.user?.addresses.length === 0" class="empty-state">
              <p>Henüz adres eklenmemiş</p>
            </div>
            <div v-else class="addresses-list">
              <div
                v-for="address in userStore.user?.addresses"
                :key="address.id"
                class="address-card"
              >
                <div class="address-content">
                  <p class="address-name">{{ address.firstName }} {{ address.lastName }}</p>
                  <p class="address-line">{{ address.addressLine1 }}</p>
                  <p class="address-city">{{ address.city }}, {{ address.postalCode }}</p>
                  <p class="address-phone">{{ address.phone }}</p>
                  <span v-if="address.isDefault" class="default-badge">Varsayılan</span>
                </div>
                <div class="address-actions">
                  <button @click="editAddress(address)" class="edit-button">Düzenle</button>
                  <button @click="deleteAddress(address.id)" class="delete-button">Sil</button>
                </div>
              </div>
            </div>
            <button @click="showAddAddress = true" class="add-address-button">Yeni Adres Ekle</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useOrdersStore } from '@/stores/orders'
import type { User, Address } from '@/types/user'
import type { OrderStatus } from '@/types/order'

const userStore = useUserStore()
const ordersStore = useOrdersStore()

const activeTab = ref('profile')
const showAddAddress = ref(false)

const tabs = [
  { id: 'profile', label: 'Profil' },
  { id: 'orders', label: 'Siparişlerim' },
  { id: 'addresses', label: 'Adreslerim' }
]

const profileForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
})

function formatPrice(price: number): string {
  return price.toFixed(2)
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function getStatusLabel(status: OrderStatus): string {
  const labels: Record<OrderStatus, string> = {
    pending: 'Beklemede',
    confirmed: 'Onaylandı',
    processing: 'Hazırlanıyor',
    shipped: 'Kargoda',
    delivered: 'Teslim Edildi',
    cancelled: 'İptal Edildi',
    refunded: 'İade Edildi'
  }
  return labels[status] || status
}

async function updateProfile() {
  await userStore.updateProfile(profileForm.value)
  alert('Profil güncellendi')
}

function editAddress(address: Address) {
  // Edit address logic
  console.log('Edit address', address)
}

async function deleteAddress(addressId: string) {
  if (confirm('Bu adresi silmek istediğinize emin misiniz?')) {
    await userStore.deleteAddress(addressId)
  }
}

onMounted(async () => {
  if (userStore.user) {
    profileForm.value = {
      firstName: userStore.user.firstName,
      lastName: userStore.user.lastName,
      email: userStore.user.email,
      phone: userStore.user.phone || ''
    }
    
    if (userStore.user.id) {
      await ordersStore.fetchOrders(userStore.user.id)
    }
  }
})
</script>

<style scoped>
.account-page {
  min-height: 100vh;
  padding: 2rem;
  background: #f5f5f5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.not-authenticated {
  text-align: center;
  padding: 4rem;
  background: white;
}

.login-link {
  display: inline-block;
  padding: 1rem 2rem;
  background: #000;
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.account-content {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 3rem;
}

.account-sidebar {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  height: fit-content;
  position: sticky;
  top: 2rem;
}

.account-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-button {
  padding: 1rem;
  text-align: left;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
  border-left: 3px solid transparent;
}

.nav-button:hover {
  background: #f5f5f5;
}

.nav-button.active {
  background: #f5f5f5;
  border-left-color: #000;
  font-weight: 600;
}

.account-main {
  background: white;
  padding: 2rem;
  border-radius: 8px;
}

.tab-content h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  font-size: 0.9rem;
}

.form-group input {
  padding: 0.75rem;
  border: 1px solid #ddd;
  font-size: 1rem;
}

.save-button {
  padding: 1rem 2rem;
  background: #000;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
  width: fit-content;
}

.loading,
.empty-state {
  text-align: center;
  padding: 4rem;
  color: #666;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.order-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.order-id {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.order-date {
  font-size: 0.9rem;
  color: #666;
}

.order-status {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
}

.order-status.pending {
  background: #fff3cd;
  color: #856404;
}

.order-status.confirmed,
.order-status.processing {
  background: #d1ecf1;
  color: #0c5460;
}

.order-status.shipped {
  background: #d4edda;
  color: #155724;
}

.order-status.delivered {
  background: #d1ecf1;
  color: #0c5460;
}

.order-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.order-item {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.item-image {
  width: 80px;
  height: 100px;
  object-fit: cover;
}

.item-info {
  flex: 1;
}

.item-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.item-details {
  font-size: 0.85rem;
  color: #666;
}

.item-price {
  font-weight: 600;
}

.order-footer {
  text-align: right;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.order-total {
  font-size: 1.2rem;
  font-weight: 700;
}

.addresses-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.address-card {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 8px;
}

.address-content {
  flex: 1;
}

.address-name {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.address-line,
.address-city,
.address-phone {
  margin-bottom: 0.25rem;
  color: #666;
}

.default-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #000;
  color: white;
  font-size: 0.75rem;
  border-radius: 4px;
  margin-top: 0.5rem;
}

.address-actions {
  display: flex;
  gap: 0.5rem;
}

.edit-button,
.delete-button {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  font-size: 0.9rem;
}

.delete-button {
  border-color: #e2001a;
  color: #e2001a;
}

.add-address-button {
  padding: 1rem 2rem;
  background: #000;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

@media (max-width: 768px) {
  .account-content {
    grid-template-columns: 1fr;
  }

  .account-sidebar {
    position: static;
  }

  .account-nav {
    flex-direction: row;
    overflow-x: auto;
  }
}
</style>

