<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="base-input"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue']
}
</script>

<style scoped>
.base-input {
  background: var(--bg-light);
  color: var(--accent-secondary);
  border: 1px solid #ddd;
  border-radius: 0;
  padding: 12px 15px;
  font-size: 14px;
  width: 100%;
  transition: border-color 0.3s;
  font-family: Arial, Helvetica, sans-serif;
}

.base-input:focus {
  border-color: var(--accent-primary);
  outline: none;
}
</style>

