<template>
  <div class="hero-section">
    <div class="home-banner-container">
      <div class="banner-card" @click="$emit('navigate', 'home')">
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
      <div class="banner-card" @click="$emit('navigate', 'home')">
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
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    handleImageError(event, text) {
      event.target.src = `https://via.placeholder.com/800x700/000000/FFFFFF?text=${text}`
    }
  },
  emits: ['navigate']
}
</script>

<style scoped>
.hero-section {
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
  transition: transform 0.3s ease;
}

.banner-card:hover {
  transform: scale(1.02);
}

.banner-card img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.banner-card:hover img {
  transform: scale(1.1);
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
}

.banner-content h2 {
  font-size: 38px;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.banner-content p {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0;
}
</style>

