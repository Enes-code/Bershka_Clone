<template>
  <div>
    <div class="component-header">
      <h2>Benzer Ürünler</h2>
      <p>Beğenebileceğiniz diğer Bershka ürünleri</p>
    </div>
    <div class="products-grid">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="product-card"
      >
        <img 
          :src="product.image" 
          :alt="product.name"
          @error="handleImageError($event, product.name)"
        />
        <div class="product-info">
          <h4 class="product-name">{{ product.name }}</h4>
          <p class="price">₺{{ product.price }}</p>
          <button class="btn" @click="addToCart(product.name)">SEPETE EKLE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductSlider',
  data() {
    return {
      products: [
        { id: 1, name: "Jean Barrel Fit", price: "549,90", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&auto=format&fit=crop" },
        { id: 2, name: "Mevcut Boy Seçenekli Jean", price: "499,90", image: "https://images.unsplash.com/photo-1563299797-033182512f45?w=400&h=500&auto=format&fit=crop" },
        { id: 3, name: "Polo Yaka Kazak", price: "399,90", image: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=400&h=500&auto=format&fit=crop" },
        { id: 4, name: "Baggy Fit Teknik Kargo Pantolon", price: "499,90", image: "https://images.unsplash.com/photo-1628103923480-c1109a962a98?w=400&h=500&auto=format&fit=crop" },
        { id: 5, name: "Oversize Grafikli Tişört", price: "199,90", image: "https://images.unsplash.com/photo-1627225102148-35ed00713b18?w=400&h=500&auto=format&fit=crop" },
        { id: 6, name: "Oversize Sweatshirt", price: "399,90", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a4?w=400&h=500&auto=format&fit=crop" },
        { id: 7, name: "Crop Top Tişört", price: "149,90", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&auto=format&fit=crop" },
        { id: 8, name: "Wide Leg Pantolon", price: "449,90", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&auto=format&fit=crop" },
        { id: 9, name: "Denim Ceket", price: "599,90", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&auto=format&fit=crop" },
        { id: 10, name: "Oversize Hoodie", price: "349,90", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a4?w=400&h=500&auto=format&fit=crop" },
        { id: 11, name: "Basic Tişört", price: "129,90", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&auto=format&fit=crop" },
        { id: 12, name: "Cargo Shorts", price: "299,90", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&auto=format&fit=crop" },
        { id: 13, name: "Oversize Blazer", price: "649,90", image: "https://images.unsplash.com/photo-1591047139829-91f6ddcc0a1e?w=400&h=500&auto=format&fit=crop" },
        { id: 14, name: "Ribbed Örgü Kazak", price: "379,90", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&auto=format&fit=crop" },
        { id: 15, name: "Slim Fit Jean", price: "479,90", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&auto=format&fit=crop" },
        { id: 16, name: "Trench Coat", price: "799,90", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&auto=format&fit=crop" }
      ]
    }
  },
  methods: {
    addToCart(productName) {
      alert(productName + ' sepete eklendi!')
      this.$emit('add-to-cart', productName)
    },
    handleImageError(event, name) {
      event.target.src = `https://via.placeholder.com/400x500/000000/FFFFFF?text=${name}`
    }
  },
  emits: ['add-to-cart']
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

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.product-card {
  background: var(--panel-light);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.product-card img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover img {
  transform: scale(1.08);
}

.product-info {
  padding: 15px;
}

.product-name {
  color: var(--accent-secondary);
  font-size: 16px;
  margin-bottom: 8px;
}

.price {
  font-weight: bold;
  color: var(--accent-primary);
  font-size: 18px;
  margin-bottom: 10px;
}

.btn {
  background: var(--accent-primary);
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:hover {
  background: #333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>

