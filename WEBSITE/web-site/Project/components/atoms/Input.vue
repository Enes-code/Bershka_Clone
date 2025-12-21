<template>
  <div class="grid w-full max-w-sm items-center gap-1.5">
    <label v-if="label" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {{ label }}
    </label>
    <input
      :value="modelValue"
      @input="updateValue"
      :type="type"
      :placeholder="placeholder"
      :class="[
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      ]"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: string | number;
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
}>();

const emit = defineEmits(['update:modelValue']);

function updateValue(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>
