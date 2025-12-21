<template>
  <div>
    <MoleculesHeroSplit />
    
    <div class="container mx-auto p-4 mt-8">
      <h2 class="text-3xl font-bold uppercase mb-4">New Collection</h2>
      <p class="text-muted-foreground mb-8">Discover the latest trends for this season.</p>
    
      <div v-if="productStore.loading" class="flex justify-center py-20">
       <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
    
    <div v-else-if="productStore.error" class="text-destructive text-center py-20">
      {{ productStore.error }}
    </div>

    <OrganismsProductGrid v-else :products="productStore.products" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/useProductStore';
import { onMounted } from 'vue';

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>
