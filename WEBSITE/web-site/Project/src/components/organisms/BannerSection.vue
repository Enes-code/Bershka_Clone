<template>
  <div class="banner-section">
    <div class="home-banner-container">
      <div 
        class="banner-card" 
        @click="$emit('navigate', 'home')"
        v-for="(banner, index) in banners"
        :key="index"
      >
        <img 
          :src="banner.image" 
          :alt="banner.title"
          @error="handleImageError($event, banner.title)"
        />
        <div class="banner-content">
          <p>{{ banner.subtitle }}</p>
          <h2>{{ banner.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerSection',
  props: {
    banners: {
      type: Array,
      default: () => [
        {
          title: 'KADIN',
          subtitle: 'KADIN KOLEKSİYONU',
          image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.trendyol.com%2Fbershka-kadin-giyim-x-b486-g1-c82&psig=AOvVaw2VXDuIFllP9-8Wavekzs6y&ust=1764233416335000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLDJ1-K3j5EDFQAAAAAdAAAAABAE'
        },
        {
          title: 'ERKEK',
          subtitle: 'ERKEK KOLEKSİYONU',
          image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&h=700&auto=format&fit=crop'
        }
      ]
    }
  },
  methods: {
    handleImageError(event, text) {
      event.target.src = `https://via.placeholder.com/800x700/000000/FFFFFF?text=${text}`
    }
  },
  emits: ['navigate']
}
</script>

<style scoped>
.banner-section {
  margin-top: 20px;
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
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(5px);
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

