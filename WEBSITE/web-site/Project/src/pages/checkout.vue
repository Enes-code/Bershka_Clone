<template>
  <div class="checkout-page">
    <div class="container">
      <h1 class="page-title">Ödeme</h1>

      <div v-if="cartStore.isEmpty" class="empty-cart">
        <p>Sepetiniz boş</p>
        <router-link to="/cart" class="back-button">Sepete Dön</router-link>
      </div>

      <div v-else class="checkout-content">
        <div class="checkout-form">
          <section class="form-section">
            <h2>Kargo Bilgileri</h2>
            <div class="form-group">
              <label>Ad</label>
              <input v-model="shippingAddress.firstName" type="text" required />
            </div>
            <div class="form-group">
              <label>Soyad</label>
              <input v-model="shippingAddress.lastName" type="text" required />
            </div>
            <div class="form-group">
              <label>Telefon</label>
              <input v-model="shippingAddress.phone" type="tel" required />
            </div>
            <div class="form-group">
              <label>Adres</label>
              <input v-model="shippingAddress.addressLine1" type="text" required />
            </div>
            <div class="form-group">
              <label>Şehir</label>
              <input v-model="shippingAddress.city" type="text" required />
            </div>
            <div class="form-group">
              <label>Posta Kodu</label>
              <input v-model="shippingAddress.postalCode" type="text" required />
            </div>
          </section>

          <section class="form-section">
            <h2>Ödeme Yöntemi</h2>
            <div class="payment-methods">
              <label class="payment-option">
                <input v-model="paymentMethod" type="radio" value="credit_card" />
                <span>Kredi Kartı</span>
              </label>
              <label class="payment-option">
                <input v-model="paymentMethod" type="radio" value="debit_card" />
                <span>Banka Kartı</span>
              </label>
            </div>
          </section>
        </div>

        <div class="checkout-summary">
          <h2>Sipariş Özeti</h2>
          <div class="order-items">
            <div
              v-for="item in cartStore.cart.items"
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

          <div class="summary-totals">
            <div class="summary-row">
              <span>Ara Toplam:</span>
              <span>{{ formatPrice(cartStore.cart.subtotal) }} ₺</span>
            </div>
            <div class="summary-row">
              <span>Kargo:</span>
              <span>{{ cartStore.cart.shipping === 0 ? 'Ücretsiz' : formatPrice(cartStore.cart.shipping) + ' ₺' }}</span>
            </div>
            <div v-if="cartStore.cart.discount > 0" class="summary-row discount">
              <span>İndirim:</span>
              <span>-{{ formatPrice(cartStore.cart.discount) }} ₺</span>
            </div>
            <div class="summary-row total">
              <span>Toplam:</span>
              <span>{{ formatPrice(cartStore.cart.total) }} ₺</span>
            </div>
          </div>

          <button @click="placeOrder" class="place-order-button" :disabled="!canPlaceOrder">
            Siparişi Tamamla
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useOrdersStore } from '@/stores/orders'
import { useUserStore } from '@/stores/user'
import type { Address } from '@/types/user'
import type { PaymentMethod } from '@/types/order'

const router = useRouter()
const cartStore = useCartStore()
const ordersStore = useOrdersStore()
const userStore = useUserStore()

const paymentMethod = ref<PaymentMethod>('credit_card')
const shippingAddress = ref<Omit<Address, 'id' | 'isDefault'>>({
  firstName: '',
  lastName: '',
  phone: '',
  addressLine1: '',
  city: '',
  postalCode: '',
  country: 'Türkiye'
})

const canPlaceOrder = computed(() => {
  return (
    shippingAddress.value.firstName &&
    shippingAddress.value.lastName &&
    shippingAddress.value.phone &&
    shippingAddress.value.addressLine1 &&
    shippingAddress.value.city &&
    shippingAddress.value.postalCode
  )
})

function formatPrice(price: number): string {
  return price.toFixed(2)
}

async function placeOrder() {
  if (!canPlaceOrder.value || !userStore.user) return

  try {
    const order = await ordersStore.createOrder({
      userId: userStore.user.id,
      items: cartStore.cart.items,
      subtotal: cartStore.cart.subtotal,
      shipping: cartStore.cart.shipping || 0,
      discount: cartStore.cart.discount || 0,
      total: cartStore.cart.total,
      status: 'pending',
      paymentMethod: paymentMethod.value,
      shippingAddress: {
        ...shippingAddress.value,
        id: 'temp',
        isDefault: false
      }
    })

    if (order) {
      cartStore.clearCart()
      router.push({ name: 'account', query: { order: order.id } })
    }
  } catch (error) {
    alert('Sipariş oluşturulurken bir hata oluştu')
  }
}
</script>

<style scoped>
.checkout-page {
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

.empty-cart {
  text-align: center;
  padding: 4rem;
  background: white;
}

.back-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: #000;
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.checkout-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
}

.checkout-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
}

.form-section {
  margin-bottom: 3rem;
}

.form-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
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

.payment-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.payment-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: border-color 0.2s;
}

.payment-option:hover {
  border-color: #000;
}

.payment-option input[type="radio"] {
  cursor: pointer;
}

.checkout-summary {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  height: fit-content;
  position: sticky;
  top: 2rem;
}

.checkout-summary h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.order-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
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

.summary-totals {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
}

.summary-row.total {
  font-size: 1.3rem;
  font-weight: 700;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.place-order-button {
  width: 100%;
  padding: 1rem;
  background: #000;
  color: white;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.place-order-button:hover:not(:disabled) {
  background: #333;
}

.place-order-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 968px) {
  .checkout-content {
    grid-template-columns: 1fr;
  }
}
</style>

