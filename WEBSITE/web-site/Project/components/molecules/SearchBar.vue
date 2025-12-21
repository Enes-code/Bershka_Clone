<template>
  <form @submit.prevent="handleSearch" class="flex items-center gap-2">
    <AtomsInput
      v-model="searchQuery"
      placeholder="Search products..."
      class="w-[200px] md:w-[300px]"
    />
    <AtomsButton type="submit" variant="ghost" size="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    </AtomsButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const router = useRouter();

const handleSearch = () => {
    if(!searchQuery.value) return;
    // router.push({ path: '/search', query: { q: searchQuery.value } });
    console.log('Searching for:', searchQuery.value);
};
</script>
