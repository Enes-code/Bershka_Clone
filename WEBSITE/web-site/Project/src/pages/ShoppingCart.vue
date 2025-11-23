<template>
  <div class="shopping-cart-page">
    <div class="component-header">
      <h2>Sepet Paneli</h2>
      <p>Sepetinizdeki ürünleri inceleyin ve ödemeye geçin</p>
    </div>
    <div class="cart" v-if="cartItems.length > 0">
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="cart-item"
      >
        <img
          :src="item.image"
          :alt="item.name"
          @error="handleImageError($event, item.name)"
        />
        <div class="item-info">
          <h4>{{ item.name }}</h4>
          <p class="item-details">{{ item.color }} / {{ item.size }}</p>
          <p class="item-price">₺{{ item.price }}</p>
        </div>
        <div class="item-actions">
          <div class="quantity-control">
            <button @click="decreaseQuantity(item.id)" class="qty-btn">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item.id)" class="qty-btn">+</button>
          </div>
          <button class="remove-btn" @click="removeItem(item.id)">Kaldır</button>
        </div>
      </div>
      <div class="cart-total">
        <div class="total-row">
          <span>Ara Toplam:</span>
          <strong>₺{{ totalPrice }}</strong>
        </div>
        <div class="total-row shipping">
          <span>Kargo:</span>
          <span>Ücretsiz</span>
        </div>
        <div class="total-row final">
          <strong>Toplam:</strong>
          <strong class="final-price">₺{{ totalPrice }}</strong>
        </div>
      </div>
      <ActionButton>ÖDEMEYE GEÇ</ActionButton>
    </div>
    <div v-else class="empty-cart">
      <p>Sepetiniz boş</p>
      <ActionButton @click="$emit('navigate', 'home')">ALIŞVERİŞE BAŞLA</ActionButton>
    </div>
  </div>
</template>

<script>
import ActionButton from '../components/atoms/ActionButton.vue'

export default {
  name: 'ShoppingCart',
  components: {
    ActionButton
  },
  props: {
    cartItems: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => {
        return sum + (parseFloat(item.price.replace(',', '.')) * item.quantity)
      }, 0).toFixed(2).replace('.', ',')
    }
  },
  methods: {
    removeItem(itemId) {
      this.$emit('remove-from-cart', itemId)
    },
    increaseQuantity(itemId) {
      this.$emit('update-quantity', itemId, 1)
    },
    decreaseQuantity(itemId) {
      this.$emit('update-quantity', itemId, -1)
    },
    handleImageError(event, name) {
      event.target.src = `https://via.placeholder.com/120x150/000000/FFFFFF?text=${name}`
    }
  },
  emits: ['remove-from-cart', 'update-quantity', 'navigate']
}
</script>

<style scoped>
.shopping-cart-page {
  padding: 20px 0;
}

.component-header {
  margin-top: 0;
  margin-bottom: 30px;
  text-align: center;
}

.cart {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: var(--panel-light);
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
}

.cart-item {
  display: flex;
  gap: 15px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  transition: all 0.3s;
}

.cart-item:hover {
  background: rgba(0, 0, 0, 0.02);
  padding-left: 10px;
  padding-right: 10px;
}

.cart-item img {
  width: 120px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.3s;
}

.cart-item:hover img {
  transform: scale(1.05);
}

.item-info {
  flex-grow: 1;
}

.item-info h4 {
  margin-bottom: 8px;
  color: var(--accent-primary);
}

.item-details {
  color: #666;
  margin: 5px 0;
}

.item-price {
  color: var(--accent-primary);
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
}

.item-actions {
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
}

.qty-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
}

.qty-btn:hover {
  background: var(--accent-primary);
  color: white;
  border-color: var(--accent-primary);
}

.remove-btn {
  background: none;
  border: none;
  color: var(--accent-danger);
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
  transition: all 0.3s;
}

.remove-btn:hover {
  transform: scale(1.1);
  text-decoration: none;
}

.cart-total {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid var(--accent-primary);
}

.total-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  transition: color 0.3s;
}

.total-row.shipping {
  color: #666;
}

.total-row.final {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  font-size: 24px;
}

.final-price {
  color: var(--accent-primary);
}

.empty-cart {
  text-align: center;
  padding: 60px 20px;
  background: var(--panel-light);
  border-radius: 4px;
  max-width: 500px;
  margin: 0 auto;
}

.empty-cart p {
  font-size: 18px;
  color: var(--accent-secondary);
  margin-bottom: 20px;
}
</style>

