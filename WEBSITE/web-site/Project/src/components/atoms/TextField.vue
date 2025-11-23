<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @focus="isFocused = true"
    @blur="isFocused = false"
    :class="['text-field', { focused: isFocused }]"
  />
</template>

<script>
export default {
  name: 'TextField',
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
  data() {
    return {
      isFocused: false
    }
  },
  emits: ['update:modelValue']
}
</script>

<style scoped>
.text-field {
  background: var(--bg-light);
  color: var(--accent-secondary);
  border: 1px solid #ddd;
  border-radius: 0;
  padding: 12px 15px;
  font-size: 14px;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: Arial, Helvetica, sans-serif;
}

.text-field:focus {
  border-color: var(--accent-primary);
  outline: none;
  background: white;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.text-field.focused {
  border-color: var(--accent-primary);
}
</style>

