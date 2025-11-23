<template>
  <button :class="['base-btn', buttonClass]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonClass: {
      type: String,
      default: 'primary'
    }
  },
  emits: ['click']
}
</script>

<style scoped>
.base-btn {
  background: var(--accent-primary);
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 12px;
  width: 100%;
  border-radius: 0;
  font-weight: bold;
  transition: background 0.3s;
  color: white;
}

.base-btn:hover {
  background: #333;
}

.base-btn.secondary {
  background: var(--bg-light);
  color: var(--accent-primary);
  border: 1px solid var(--accent-primary);
}

.base-btn.secondary:hover {
  background: var(--accent-primary);
  color: white;
}
</style>

