<template>
  <header class="border-b bg-background sticky top-0 z-50">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <!-- Logo -->
      <AtomsLogo />

      <!-- Search (Desktop) -->
      <div class="hidden md:block">
        <MoleculesSearchBar />
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-4">
        <!-- User -->
        <NuxtLink to="/auth" class="relative hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </NuxtLink>

        <!-- Cart -->
         <button @click="basketStore.toggleBasket()" class="relative hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span v-if="basketStore.totalItems > 0" class="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {{ basketStore.totalItems }}
            </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useBasketStore } from '~/stores/useBasketStore';

const basketStore = useBasketStore();
</script>
