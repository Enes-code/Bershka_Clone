<template>
  <div class="campaign-section">
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
  name: 'CampaignSection',
  props: {
    campaigns: {
      type: Array,
      required: true
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
.campaign-section {
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
}

.campaign-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 15px;
}

.campaign-badge {
  background: var(--accent-danger);
  color: white;
  border-radius: 12px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 10px;
}

.campaign-card h4 {
  color: var(--accent-primary);
  margin: 10px 0;
  font-size: 18px;
}

.campaign-description {
  color: #666;
  margin: 10px 0;
}

.campaign-action {
  color: var(--accent-primary);
  font-weight: bold;
  margin-top: 10px;
}
</style>

