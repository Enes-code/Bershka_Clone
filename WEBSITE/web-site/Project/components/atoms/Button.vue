<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :class="[
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      variantClasses,
      sizeClasses,
      className
    ]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// Fix for hydration mismatch if NuxtLink is dynamically used, but standard component is safe
const NuxtLink = resolveComponent('NuxtLink');

interface Props {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  to?: string;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  className: '',
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'destructive':
      return 'bg-destructive text-destructive-foreground hover:bg-destructive/90';
    case 'outline':
      return 'border border-input bg-background hover:bg-accent hover:text-accent-foreground';
    case 'secondary':
      return 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
    case 'ghost':
      return 'hover:bg-accent hover:text-accent-foreground';
    case 'link':
      return 'text-primary underline-offset-4 hover:underline';
    default:
      return 'bg-primary text-primary-foreground hover:bg-primary/90';
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-9 rounded-md px-3';
    case 'lg':
      return 'h-11 rounded-md px-8';
    case 'icon':
      return 'h-10 w-10';
    default:
      return 'h-10 px-4 py-2';
  }
});
</script>
