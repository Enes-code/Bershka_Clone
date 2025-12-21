<template>
  <div class="relative items-center box-border caret-transparent flex h-full w-full rounded-bl rounded-br rounded-tl rounded-tr">
    <label class="absolute text-neutral-500 text-xs items-center box-border caret-transparent flex h-6 leading-[18px] pointer-events-none z-[1] px-4 top-0 inset-x-0">
      <span class="box-border caret-transparent block text-ellipsis text-nowrap w-full overflow-hidden">
        Pazar
      </span>
    </label>
    <div class="box-border caret-transparent basis-[0%] grow h-full">
      <button
        type="button"
        class="text-[13.3333px] items-center bg-transparent caret-transparent gap-x-2 flex leading-[normal] gap-y-2 w-full px-4 py-3"
        @click="handleMarketClick"
      >
        <img
          src="https://c.animaapp.com/mjftod8rX9QTKx/assets/icon-7.svg"
          alt="Icon"
          class="box-border caret-transparent shrink-0 h-5 w-5"
        />
        <span class="text-sm items-center box-border caret-transparent flex grow h-6 leading-5">
          {{ locationStore.currentMarket?.name || 'Turkey' }}
        </span>
        <img
          src="https://c.animaapp.com/mjftod8rX9QTKx/assets/icon-8.svg"
          alt="Icon"
          class="box-border caret-transparent shrink-0 h-6 w-6"
        />
      </button>
    </div>
    <div class="absolute box-border caret-transparent flex max-w-full pointer-events-none inset-0">
      <div class="box-border caret-transparent shrink-0 w-3 border-stone-300 rounded-bl rounded-tl border-b border-l border-t border-solid"></div>
      <div class="relative box-border caret-transparent flex border-stone-300 overflow-hidden border-b border-solid before:accent-auto before:box-border before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-none before:absolute before:text-start before:indent-[0px] before:normal-case before:origin-[0%_0%] before:visible before:w-6/12 before:border-stone-300 before:border-separate before:border-t before:border-solid before:left-0 before:top-0 before:font-whyte after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:indent-[0px] after:normal-case after:origin-[100%_0%] after:visible after:w-6/12 after:border-stone-300 after:border-separate after:border-t after:border-solid after:right-0 after:top-0 after:font-whyte"></div>
      <div class="box-border caret-transparent grow min-w-4 border-stone-300 rounded-br rounded-tr border-b border-r border-t border-solid"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLocationStore } from '~/stores/useLocationStore'

const locationStore = useLocationStore()

const handleMarketClick = async () => {
  try {
    // İlk market'i seç (gerçek uygulamada dropdown açılacak)
    const defaultMarket = locationStore.markets[0] || {
      id: '1',
      name: 'Turkey',
      code: 'TR',
      currency: 'TRY',
    }
    
    const userId = 'default-user'
    await locationStore.selectMarket(defaultMarket, userId)
  } catch (error) {
    console.error('Market selection error:', error)
  }
}
</script>

<style scoped>
</style>

