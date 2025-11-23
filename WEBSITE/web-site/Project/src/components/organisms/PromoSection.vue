<template>
  <div class="promo-section">
    <div class="component-header">
      <h2>Kampanyalar</h2>
      <p>Bershka'dan özel teklifler ve promosyonlar</p>
    </div>
    <div class="promos">
      <div 
        v-for="promo in promos" 
        :key="promo.id"
        class="promo-card"
        @click="$emit('navigate', 'campaigns')"
      >
        <img 
          :src="promo.image" 
          :alt="promo.title"
          @error="handleImageError($event, promo.title)"
        />
        <div class="promo-badge">{{ promo.badge }}</div>
        <h4>{{ promo.title }}</h4>
        <p class="promo-description">{{ promo.description }}</p>
        <p class="promo-action">{{ promo.action }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromoSection',
  props: {
    promos: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleImageError(event, title) {
      event.target.src = `https://via.placeholder.com/400x300/e2001a/FFFFFF?text=${encodeURIComponent(title)}`
    }
  },
  emits: ['navigate']
}
</script>

<style scoped>
.promo-section {
  margin: 50px 0;
}

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

.promos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.promo-card {
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

.promo-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.15);
}

.promo-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 15px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.promo-card:hover img {
  transform: scale(1.1);
}

.promo-badge {
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

.promo-card:hover .promo-badge {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(226, 0, 26, 0.4);
}

.promo-card h4 {
  color: var(--accent-primary);
  margin: 10px 0;
  font-size: 18px;
  transition: color 0.3s;
}

.promo-card:hover h4 {
  color: var(--accent-danger);
}

.promo-description {
  color: #666;
  margin: 10px 0;
}

.promo-action {
  color: var(--accent-primary);
  font-weight: bold;
  margin-top: 10px;
  transition: all 0.3s;
}

.promo-card:hover .promo-action {
  transform: translateX(5px);
  color: var(--accent-danger);
}
</style>

