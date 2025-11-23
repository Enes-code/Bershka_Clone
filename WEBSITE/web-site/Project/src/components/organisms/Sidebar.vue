<template>
  <div :class="['sidebar', { 'open': isOpen }]">
    <button class="close-btn" @click="$emit('close')">✕</button>
    <div style="text-align: center; margin-bottom: 20px; clear: both;">
      <div class="logo" style="font-size: 20px; margin-bottom: 10px;">BERSHKA</div>
      <p style="font-size: 12px; color: #666;">Fashion & Style</p>
    </div>
    <h3>MENÜ</h3>
    <button
      v-for="comp in components"
      :key="comp.name"
      @click="$emit('show-component', comp.name)"
      :class="['nav-btn', { active: activeComponent.name === comp.name }]"
    >
      {{ comp.label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    components: {
      type: Array,
      required: true
    },
    activeComponent: {
      type: Object,
      required: true
    }
  },
  emits: ['close', 'show-component']
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: var(--panel-light);
  padding: 20px;
  position: fixed;
  top: 0;
  left: -250px;
  height: 100vh;
  z-index: 1001;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar.open {
  left: 0;
}

.close-btn {
  background: none;
  border: none;
  color: var(--accent-primary);
  font-size: 24px;
  cursor: pointer;
  float: right;
  margin: -10px 0 20px 0;
  transition: transform 0.3s;
}

.close-btn:hover {
  transform: rotate(90deg);
}

.sidebar h3 {
  color: var(--accent-primary);
  margin-top: 30px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-btn {
  display: block;
  width: 100%;
  padding: 12px;
  margin: 5px 0;
  border: none;
  background: var(--bg-light);
  cursor: pointer;
  text-align: left;
  border-radius: 4px;
  color: var(--accent-secondary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-btn:hover {
  background: #e8e8e8;
  transform: translateX(5px);
}

.nav-btn.active {
  background: linear-gradient(135deg, var(--accent-primary), #333);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
