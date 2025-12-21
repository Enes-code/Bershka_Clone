<template>
  <div class="relative h-[calc(100vh-64px)] w-full flex flex-col md:flex-row overflow-hidden">
    <!-- Woman Section -->
    <div class="relative w-full md:w-1/2 h-1/2 md:h-full group cursor-pointer overflow-hidden">
        <img 
            src="https://static.bershka.net/4/photos2/2023/I/0/1/p/6288/168/800/6288168800_2_4_2.jpg?t=1693406211833" 
            alt="Woman" 
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white z-10">
            <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Woman</h2>
            <AtomsButton variant="secondary" size="lg" class="uppercase font-bold tracking-widest px-8">
                Discover
            </AtomsButton>
        </div>
    </div>

    <!-- Man Section -->
    <div class="relative w-full md:w-1/2 h-1/2 md:h-full group cursor-pointer overflow-hidden">
        <img 
            src="https://static.bershka.net/4/photos2/2023/I/0/2/p/6288/168/800/6288168800_2_4_2.jpg?t=1693406211833" 
            alt="Man" 
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        /> 
         <!-- Placeholder image until we find a better one -->
        <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white z-10">
            <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Man</h2>
             <AtomsButton variant="secondary" size="lg" class="uppercase font-bold tracking-widest px-8">
                Discover
            </AtomsButton>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Hero Component
</script>
