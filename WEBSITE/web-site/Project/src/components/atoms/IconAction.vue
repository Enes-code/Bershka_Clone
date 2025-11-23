<template>
  <button 
    class="icon-action" 
    @click="$emit('click')" 
    :title="title"
    :class="{ active: isActive }"
  >
    <slot>{{ icon }}</slot>
  </button>
</template>

<script>
export default {
  name: 'IconAction',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click']
}
</script>

<style scoped>
.icon-action {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: var(--accent-primary);
  padding: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-action:hover {
  transform: scale(1.15) rotate(5deg);
  background: rgba(0, 0, 0, 0.05);
}

.icon-action.active {
  color: var(--accent-danger);
  background: rgba(226, 0, 26, 0.1);
}
</style>

