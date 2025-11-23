<template>
  <div>
    <div class="component-header">
      <h2>Kampanyalar</h2>
      <p>Bershka'dan özel teklifler ve promosyonlar</p>
    </div>
    <div class="campaigns">
      <div 
        v-for="campaign in campaigns" 
        :key="campaign.id"
        class="campaign-card"
      >
        <img 
          :src="campaign.image" 
          :alt="campaign.title"
          @error="handleImageError($event, campaign.title)"
        />
        <div class="campaign-badge">{{ campaign.badge }}</div>
        <h4>{{ campaign.title }}</h4>
        <p class="campaign-description">{{ campaign.description }}</p>
        <p class="campaign-action">{{ campaign.action }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Campaigns',
  data() {
    return {
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
        },
        {
          id: 5,
          title: "✨ YENİ SEZON KOLEKSİYONU",
          description: "2025 ilkbahar koleksiyonu çıktı!",
          action: "Keşfet",
          badge: "YENİ",
          image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&auto=format&fit=crop"
        },
        {
          id: 6,
          title: "📦 ÜCRETSİZ KARGO",
          description: "200₺ ve üzeri tüm siparişlerde.",
          action: "Hemen Alışveriş Yap",
          badge: "ÖZEL",
          image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&auto=format&fit=crop"
        },
        {
          id: 7,
          title: "🎓 ÖĞRENCİ İNDİRİMİ",
          description: "Geçerli öğrenci kimliği ile %20 indirim.",
          action: "Daha Fazla Bilgi",
          badge: "ÖĞRENCİ",
          image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&auto=format&fit=crop"
        },
        {
          id: 8,
          title: "⚡ FLAŞ İNDİRİM",
          description: "Sınırlı süre - %70'e varan indirimler!",
          action: "Hemen Alışveriş Yap",
          badge: "FLAŞ",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&auto=format&fit=crop"
        }
      ]
    }
  },
  methods: {
    handleImageError(event, title) {
      event.target.src = `https://via.placeholder.com/400x300/e2001a/FFFFFF?text=${encodeURIComponent(title)}`
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

.component-header p {
  color: var(--accent-secondary);
}

.campaigns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.campaign-card {
  background: var(--panel-light);
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  position: relative;
  overflow: hidden;
  min-height: 300px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.campaign-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.15);
}

.campaign-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 15px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.campaign-card:hover img {
  transform: scale(1.1);
}

.campaign-badge {
  background: linear-gradient(135deg, var(--accent-danger), #ff4444);
  color: white;
  border-radius: 12px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 10px;
  transition: all 0.3s;
}

.campaign-card:hover .campaign-badge {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(226, 0, 26, 0.4);
}

.campaign-card h4 {
  color: var(--accent-primary);
  margin: 10px 0;
  font-size: 18px;
  transition: color 0.3s;
}

.campaign-card:hover h4 {
  color: var(--accent-danger);
}

.campaign-description {
  color: #666;
  margin: 10px 0;
}

.campaign-action {
  color: var(--accent-primary);
  font-weight: bold;
  margin-top: 10px;
  transition: all 0.3s;
}

.campaign-card:hover .campaign-action {
  transform: translateX(5px);
  color: var(--accent-danger);
}
</style>

