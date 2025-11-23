<template>
  <div class="home-page">
    <HeroSection @navigate="handleNavigate" />
    <ProductList
      title="ÖNE ÇIKAN ÜRÜNLER"
      subtitle="En popüler Bershka koleksiyonlarımız"
      :products="featuredProducts"
      @add-to-cart="handleAddToCart"
    />
    <CampaignSection :campaigns="campaigns" />
  </div>
</template>

<script>
import HeroSection from '../components/organisms/HeroSection.vue'
import ProductList from '../components/organisms/ProductList.vue'
import CampaignSection from '../components/organisms/CampaignSection.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    ProductList,
    CampaignSection
  },
  data() {
    return {
      featuredProducts: [
        { id: 1, name: "Oversize Sweatshirt", price: "399,90", image: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=400&h=500&auto=format&fit=crop" },
        { id: 2, name: "Straight Fit Jean", price: "549,90", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&auto=format&fit=crop" },
        { id: 3, name: "Oversize Grafikli Tişört", price: "199,90", image: "https://images.unsplash.com/photo-1627225102148-35ed00713b18?w=400&h=500&auto=format&fit=crop" },
        { id: 4, name: "Baggy Fit Kargo Pantolon", price: "499,90", image: "https://images.unsplash.com/photo-1555529759-d8e7c10b271d?w=400&h=500&auto=format&fit=crop" },
        { id: 5, name: "Denim Ceket", price: "599,90", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&auto=format&fit=crop" },
        { id: 6, name: "Oversize Hoodie", price: "349,90", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a4?w=400&h=500&auto=format&fit=crop" }
      ],
      campaigns: [
        {
          id: 1,
          title: "🎁 2 AL 1 BEDAVA",
          description: "Seçili tişörtlerde geçerlidir.",
          action: "Hemen Tıkla!",
          badge: "FIRSAT",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&auto=format&fit=crop"
        },
        {
          id: 2,
          title: "👖 DENİM GÜNLERİ",
          description: "Tüm jean ve ceketlerde %30 indirim.",
          action: "Kodu: DENIM30",
          badge: "YENİ",
          image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&auto=format&fit=crop"
        },
        {
          id: 3,
          title: "🚚 KAPIDA ÖDEME",
          description: "Ek ücret olmadan kapıda ödeme seçeneği.",
          action: "Her siparişte geçerli",
          badge: "HIZLI",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&auto=format&fit=crop"
        },
        {
          id: 4,
          title: "🔥 KIŞ FIRSATLARI",
          description: "Kışlık giyimde %50'ye varan indirimler.",
          action: "Sınırlı Stok!",
          badge: "ÖZEL",
          image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&auto=format&fit=crop"
        }
      ]
    }
  },
  methods: {
    handleNavigate(componentName) {
      this.$emit('navigate', componentName)
    },
    handleAddToCart(productName) {
      this.$emit('add-to-cart', productName)
    }
  },
  emits: ['navigate', 'add-to-cart']
}
</script>

<style scoped>
.home-page {
  padding: 20px 0;
}
</style>

