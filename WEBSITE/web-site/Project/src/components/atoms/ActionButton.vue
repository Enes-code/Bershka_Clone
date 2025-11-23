<template>
  <button :class="['action-btn', variant]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  },
  emits: ['click']
}
</script>

<style scoped>
.action-btn {
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 12px;
  width: 100%;
  border-radius: 0;
  font-weight: bold;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: white;
  background: var(--accent-primary);
  position: relative;
  overflow: hidden;
}

.action-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.action-btn:hover::before {
  width: 300px;
  height: 300px;
}

.action-btn:hover {
  background: #333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.action-btn.secondary {
  background: var(--bg-light);
  color: var(--accent-primary);
  border: 1px solid var(--accent-primary);
}

.action-btn.secondary:hover {
  background: var(--accent-primary);
  color: white;
}
</style>

