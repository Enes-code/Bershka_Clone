<template>
  <div class="box-border caret-transparent basis-[0%] grow pl-24">
    <div class="box-border caret-transparent w-4/5">
      <h3 class="text-lg box-border caret-transparent leading-[22px] mb-4">
        Konumunu seç
      </h3>
      <div class="relative box-border caret-transparent">
        <div class="relative box-border caret-transparent w-full">
          <div class="box-border caret-transparent gap-x-2 flex flex-col gap-y-2">
            <MarketDropdown />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLocationStore } from '~/stores/useLocationStore'

const locationStore = useLocationStore()

// Component mount olduğunda market'leri yükle
onMounted(async () => {
  await locationStore.fetchMarkets()
})
</script>

<style scoped>
</style>

