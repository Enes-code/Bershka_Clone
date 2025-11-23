<template>
  <div>
    <div class="component-header">
      <h2>Sepet Paneli</h2>
      <p>Sepetinizdeki ürünler ve toplam tutar</p>
    </div>
    <div class="cart">
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
        <div class="item-details">
          <h4>{{ item.name }}</h4>
          <p class="item-meta">{{ item.color }} / {{ item.size }}</p>
          <p class="item-price">₺{{ item.price }}</p>
        </div>
        <div class="item-actions">
          <p>Adet: {{ item.quantity }}</p>
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
      <button class="btn">ÖDEMEYE GEÇ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      cartItems: [
        {
          id: 1,
          name: "Oversize Sweatshirt",
          image: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=300&h=400&auto=format&fit=crop",
          color: "Bej",
          size: "M",
          price: "399,90",
          quantity: 1
        },
        {
          id: 2,
          name: "Straight Fit Jean",
          image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&auto=format&fit=crop",
          color: "Mavi",
          size: "32",
          price: "459,90",
          quantity: 1
        },
        {
          id: 3,
          name: "Baggy Fit Teknik Kargo Pantolon",
          image: "https://images.unsplash.com/photo-1555529759-d8e7c10b271d?w=300&h=400&auto=format&fit=crop",
          color: "Siyah",
          size: "L",
          price: "499,90",
          quantity: 1
        },
        {
          id: 4,
          name: "Oversize Grafikli Tişört",
          image: "https://images.unsplash.com/photo-1627225102148-35ed00713b18?w=300&h=400&auto=format&fit=crop",
          color: "Beyaz",
          size: "M",
          price: "199,90",
          quantity: 1
        }
      ]
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => {
        return sum + parseFloat(item.price.replace(',', '.'))
      }, 0).toFixed(2).replace('.', ',')
    }
  },
  methods: {
    removeItem(itemId) {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId)
    },
    handleImageError(event, name) {
      event.target.src = `https://via.placeholder.com/120x150/000000/FFFFFF?text=${name}`
    }
  }
}
</script>

<style scoped>
.component-header {
  margin-top: 0;
  margin-bottom: 30px;
  text-align: center;
}

.component-header h2 {
  font-size: 32px;
  color: var(--accent-primary);
  margin-bottom: 10px;
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

.item-details {
  flex-grow: 1;
}

.item-details h4 {
  margin-bottom: 8px;
  color: var(--accent-primary);
}

.item-meta {
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
  color: var(--accent-secondary);
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

.btn {
  background: var(--accent-primary);
  color: white;
  border: none;
  padding: 12px;
  width: 100%;
  cursor: pointer;
  margin-top: 30px;
  border-radius: 0;
  font-weight: bold;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

.btn:hover {
  background: #333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style>

