<template>
  <div class="cart-page">
    <div class="container">
      <h1 class="page-title">Sepetim</h1>

      <div v-if="cartStore.isEmpty" class="empty-cart">
        <p>Sepetiniz boş</p>
        <router-link to="/" class="continue-shopping">Alışverişe Devam Et</router-link>
      </div>

      <div v-else class="cart-content">
        <div class="cart-items">
          <div
            v-for="item in cartStore.cart.items"
            :key="item.id"
            class="cart-item"
          >
            <img :src="item.product.images[0]" :alt="item.product.name" class="item-image" />
            
            <div class="item-details">
              <h3 class="item-name">{{ item.product.name }}</h3>
              <p class="item-info">Renk: {{ item.color }} | Beden: {{ item.size }}</p>
              <p class="item-price">{{ formatPrice(item.price) }} ₺</p>
            </div>

            <div class="item-quantity">
              <button @click="decreaseQuantity(item.id)" class="quantity-button">-</button>
              <span class="quantity-value">{{ item.quantity }}</span>
              <button @click="increaseQuantity(item.id)" class="quantity-button">+</button>
            </div>

            <div class="item-total">
              <p class="total-price">{{ formatPrice(item.price * item.quantity) }} ₺</p>
            </div>

            <button @click="removeItem(item.id)" class="remove-button">×</button>
          </div>
        </div>

        <div class="cart-summary">
          <div class="summary-section">
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

          <div class="discount-code">
            <input
              v-model="discountCode"
              type="text"
              placeholder="İndirim kodu"
              class="discount-input"
            />
            <button @click="applyDiscount" class="apply-button">Uygula</button>
          </div>

          <router-link to="/checkout" class="checkout-button">
            Ödemeye Geç
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()
const discountCode = ref('')

function formatPrice(price: number): string {
  return price.toFixed(2)
}

function increaseQuantity(itemId: string) {
  const item = cartStore.cart.items.find(i => i.id === itemId)
  if (item) {
    cartStore.updateQuantity(itemId, item.quantity + 1)
  }
}

function decreaseQuantity(itemId: string) {
  const item = cartStore.cart.items.find(i => i.id === itemId)
  if (item) {
    cartStore.updateQuantity(itemId, item.quantity - 1)
  }
}

function removeItem(itemId: string) {
  cartStore.removeFromCart(itemId)
}

function applyDiscount() {
  // Mock discount logic - in real app, this would validate with backend
  if (discountCode.value.toLowerCase() === 'bershka20') {
    cartStore.applyDiscount(discountCode.value, 20)
    alert('İndirim kodu uygulandı!')
  } else {
    alert('Geçersiz indirim kodu')
  }
}
</script>

<style scoped>
.cart-page {
  min-height: 100vh;
  padding: 2rem;
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
}

.empty-cart p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #666;
}

.continue-shopping {
  display: inline-block;
  padding: 1rem 2rem;
  background: #000;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s;
}

.continue-shopping:hover {
  background: #333;
}

.cart-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cart-item {
  display: grid;
  grid-template-columns: 120px 1fr auto auto auto;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border: 1px solid #eee;
  align-items: center;
}

.item-image {
  width: 120px;
  height: 150px;
  object-fit: cover;
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item-name {
  font-size: 1.1rem;
  font-weight: 600;
}

.item-info {
  font-size: 0.9rem;
  color: #666;
}

.item-price {
  font-size: 1rem;
  font-weight: 600;
}

.item-quantity {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.quantity-button {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.2s;
}

.quantity-button:hover {
  border-color: #000;
}

.quantity-value {
  font-weight: 600;
  min-width: 30px;
  text-align: center;
}

.item-total {
  font-size: 1.2rem;
  font-weight: 700;
}

.remove-button {
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  transition: color 0.2s;
}

.remove-button:hover {
  color: #e2001a;
}

.cart-summary {
  background: white;
  padding: 2rem;
  border: 1px solid #eee;
  height: fit-content;
  position: sticky;
  top: 2rem;
}

.summary-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
}

.summary-row.discount {
  color: #e2001a;
}

.summary-row.total {
  font-size: 1.3rem;
  font-weight: 700;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.discount-code {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.discount-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  font-size: 0.9rem;
}

.apply-button {
  padding: 0.75rem 1.5rem;
  border: 1px solid #000;
  background: white;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

.apply-button:hover {
  background: #000;
  color: white;
}

.checkout-button {
  display: block;
  width: 100%;
  padding: 1rem;
  background: #000;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background 0.2s;
}

.checkout-button:hover {
  background: #333;
}

@media (max-width: 968px) {
  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-item {
    grid-template-columns: 100px 1fr;
    gap: 1rem;
  }

  .item-quantity,
  .item-total,
  .remove-button {
    grid-column: 2;
  }
}
</style>
