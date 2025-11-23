<template>
  <div>
    <div class="component-header">
      <h2>Ana Sayfa</h2>
      <p>Bershka Koleksiyonlarını Keşfedin</p>
    </div>
    
    <div class="home-banner-container">
      <div class="banner-card" @click="$emit('show-component', 'anasayfa')">
        <img 
          src="https://images.unsplash.com/photo-1524502390806-53894871d37b?w=800&h=700&auto=format&fit=crop" 
          alt="Kadın Moda"
          @error="handleImageError($event, 'KADIN')"
        />
        <div class="banner-content">
          <p>KADIN KOLEKSİYONU</p>
          <h2>KADIN</h2>
        </div>
      </div>

      <div class="banner-card" @click="$emit('show-component', 'anasayfa')">
        <img 
          src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&h=700&auto=format&fit=crop" 
          alt="Erkek Moda"
          @error="handleImageError($event, 'ERKEK')"
        />
        <div class="banner-content">
          <p>ERKEK KOLEKSİYONU</p>
          <h2>ERKEK</h2>
        </div>
      </div>
    </div>
    
    <div style="margin-top: 50px;">
      <Campaigns />
    </div>
  </div>
</template>

<script>
import Campaigns from '../components/organisms/Campaigns.vue'

export default {
  name: 'HomePage',
  components: {
    Campaigns
  },
  methods: {
    handleImageError(event, text) {
      event.target.src = `https://via.placeholder.com/800x700/000000/FFFFFF?text=${text}`
    }
  },
  emits: ['show-component']
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

.home-banner-container {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.banner-card {
  flex: 1;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.banner-card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.banner-card img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.banner-card:hover img {
  transform: scale(1.12);
}

.banner-content {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  backdrop-filter: blur(5px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.banner-card:hover .banner-content {
  background: rgba(0, 0, 0, 0.5);
  transform: translateX(-50%) translateY(-10px);
}

.banner-content h2 {
  font-size: 38px;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: letter-spacing 0.3s;
}

.banner-card:hover .banner-content h2 {
  letter-spacing: 4px;
}

.banner-content p {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0;
}
</style>
