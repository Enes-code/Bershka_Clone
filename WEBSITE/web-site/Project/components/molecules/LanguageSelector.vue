<template>
  <div class="box-border caret-transparent basis-[0%] grow pl-24">
    <fieldset class="box-border caret-transparent p-0">
      <legend class="text-lg box-border caret-transparent leading-[22px] mb-4 px-0">
        Dilini seç
      </legend>
      <div class="box-border caret-transparent max-w-[90%]">
        <LanguageButtons />
      </div>
    </fieldset>
    <div class="box-border caret-transparent mt-[188px] mb-6">
      <span class="box-border caret-transparent grid grid-cols-[auto_1fr]">
        <input
          type="checkbox"
          value="on"
          v-model="rememberChoice"
          class="text-[13.3333px] bg-black box-border caret-transparent block col-start-1 row-start-1 h-5 leading-[normal] w-5 p-0 rounded-sm border-solid border-black"
        />
        <img
          src="https://c.animaapp.com/mjftod8rX9QTKx/assets/icon-9.svg"
          alt="Icon"
          class="box-border caret-transparent col-start-1 row-start-1 h-4 pointer-events-none w-4 z-[1] m-0.5"
        />
        <label class="text-xs font-light box-border caret-transparent block leading-[18px] ml-2">
          Seçimimi hatırla
        </label>
      </span>
    </div>
    <div class="box-border caret-transparent">
      <button
        type="button"
        class="relative text-white items-center bg-black caret-transparent gap-x-2 flex h-12 justify-center max-w-full min-h-12 min-w-[88px] gap-y-2 text-center uppercase w-fit px-[15px] py-0 rounded-bl rounded-br rounded-tl rounded-tr"
        @click="handleContinue"
      >
        <span class="text-sm font-medium box-border caret-transparent block leading-5 text-ellipsis text-nowrap overflow-hidden">
          Devam et
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLocationStore } from '~/stores/useLocationStore'
import { useUserStore } from '~/stores/user'

const locationStore = useLocationStore()
const userStore = useUserStore()
const rememberChoice = ref(false)

// Component mount olduğunda language'leri yükle
onMounted(async () => {
  await locationStore.fetchLanguages()
})

const handleContinue = async () => {
  // Seçili language'i kaydet
  const defaultLanguage = locationStore.languages[0] || {
    id: '1',
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
  }
  
  const userId = userStore.user?.id || 'default-user'
  await locationStore.selectLanguage(defaultLanguage, userId)
  
  // Eğer "hatırla" seçildiyse, localStorage'a da kaydet
  if (rememberChoice.value) {
    localStorage.setItem('userLanguage', JSON.stringify(defaultLanguage))
  }
}
</script>

<style scoped>
</style>

