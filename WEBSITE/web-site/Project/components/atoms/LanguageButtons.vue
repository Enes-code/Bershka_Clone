<template>
  <div class="relative items-center box-border caret-transparent flex w-full">
    <div class="box-border caret-transparent gap-x-2 flex flex-wrap list-none gap-y-2 w-full">
      <div
        v-for="lang in locationStore.languages"
        :key="lang.id"
        :class="[
          'relative text-xs font-medium items-center box-border caret-transparent gap-x-0 flex shrink-0 h-8 justify-center leading-[18px] max-h-8 min-h-8 min-w-10 gap-y-0 w-fit border rounded-full border-solid',
          locationStore.currentLanguage?.id === lang.id
            ? 'text-white bg-black'
            : 'border-neutral-200'
        ]"
      >
        <button
          type="button"
          :aria-label="lang.nativeName"
          class="items-center bg-transparent caret-transparent gap-x-2 flex h-full justify-center gap-y-2 text-center px-3"
          @click="handleLanguageSelect(lang)"
        >
          <span class="box-border caret-transparent block">{{ lang.nativeName }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLocationStore } from '~/stores/useLocationStore'
import { useUserStore } from '~/stores/user'

const locationStore = useLocationStore()
const userStore = useUserStore()

const handleLanguageSelect = async (language: any) => {
  const userId = userStore.user?.id || 'default-user'
  await locationStore.selectLanguage(language, userId)
}
</script>

<style scoped>
</style>

