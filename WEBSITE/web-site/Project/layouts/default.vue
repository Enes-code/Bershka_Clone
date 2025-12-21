<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground">
    <OrganismsHeader />

    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>

    <OrganismsFooter />
    
    <!-- Basket Sidebar could go here or be global -->
  </div>
</template>

<script setup lang="ts">
// Default layout
</script>
