<template>
  <button class="icon-btn" @click="$emit('click')" :title="title">
    <slot>{{ icon }}</slot>
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  emits: ['click']
}
</script>

<style scoped>
.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: var(--accent-primary);
  padding: 5px;
  transition: transform 0.2s;
}

.icon-btn:hover {
  transform: scale(1.1);
}
</style>

