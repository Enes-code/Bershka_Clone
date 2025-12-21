
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'AtomsBaseIcon': typeof import("../../components/atoms/BaseIcon.vue").default
  'AtomsBaseImage': typeof import("../../components/atoms/BaseImage.vue").default
  'AtomsBasePrice': typeof import("../../components/atoms/BasePrice.vue").default
  'AtomsBaseText': typeof import("../../components/atoms/BaseText.vue").default
  'AtomsButton': typeof import("../../components/atoms/Button.vue").default
  'AtomsIcon': typeof import("../../components/atoms/Icon.vue").default
  'AtomsText': typeof import("../../components/atoms/Text.vue").default
  'MoleculesGenderTile': typeof import("../../components/molecules/GenderTile.vue").default
  'MoleculesProductCard': typeof import("../../components/molecules/ProductCard.vue").default
  'MoleculesQuantitySelector': typeof import("../../components/molecules/QuantitySelector.vue").default
  'MoleculesSearch': typeof import("../../components/molecules/Search.vue").default
  'MoleculesSearchInput': typeof import("../../components/molecules/SearchInput.vue").default
  'MoleculesTile': typeof import("../../components/molecules/Tile.vue").default
  'OrganismsCartList': typeof import("../../components/organisms/CartList.vue").default
  'OrganismsFooter': typeof import("../../components/organisms/Footer.vue").default
  'OrganismsFooterBar': typeof import("../../components/organisms/FooterBar.vue").default
  'OrganismsHeaderBar': typeof import("../../components/organisms/HeaderBar.vue").default
  'OrganismsProductGrid': typeof import("../../components/organisms/ProductGrid.vue").default
  'SectionsBrand': typeof import("../../components/sections/Brand.vue").default
  'SectionsGenderTiles': typeof import("../../components/sections/GenderTiles.vue").default
  'SectionsHomeHero': typeof import("../../components/sections/HomeHero.vue").default
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only").default
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
  'NuxtImg': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
  'NuxtPicture': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default
  'LazyAtomsBaseIcon': LazyComponent<typeof import("../../components/atoms/BaseIcon.vue").default>
  'LazyAtomsBaseImage': LazyComponent<typeof import("../../components/atoms/BaseImage.vue").default>
  'LazyAtomsBasePrice': LazyComponent<typeof import("../../components/atoms/BasePrice.vue").default>
  'LazyAtomsBaseText': LazyComponent<typeof import("../../components/atoms/BaseText.vue").default>
  'LazyAtomsButton': LazyComponent<typeof import("../../components/atoms/Button.vue").default>
  'LazyAtomsIcon': LazyComponent<typeof import("../../components/atoms/Icon.vue").default>
  'LazyAtomsText': LazyComponent<typeof import("../../components/atoms/Text.vue").default>
  'LazyMoleculesGenderTile': LazyComponent<typeof import("../../components/molecules/GenderTile.vue").default>
  'LazyMoleculesProductCard': LazyComponent<typeof import("../../components/molecules/ProductCard.vue").default>
  'LazyMoleculesQuantitySelector': LazyComponent<typeof import("../../components/molecules/QuantitySelector.vue").default>
  'LazyMoleculesSearch': LazyComponent<typeof import("../../components/molecules/Search.vue").default>
  'LazyMoleculesSearchInput': LazyComponent<typeof import("../../components/molecules/SearchInput.vue").default>
  'LazyMoleculesTile': LazyComponent<typeof import("../../components/molecules/Tile.vue").default>
  'LazyOrganismsCartList': LazyComponent<typeof import("../../components/organisms/CartList.vue").default>
  'LazyOrganismsFooter': LazyComponent<typeof import("../../components/organisms/Footer.vue").default>
  'LazyOrganismsFooterBar': LazyComponent<typeof import("../../components/organisms/FooterBar.vue").default>
  'LazyOrganismsHeaderBar': LazyComponent<typeof import("../../components/organisms/HeaderBar.vue").default>
  'LazyOrganismsProductGrid': LazyComponent<typeof import("../../components/organisms/ProductGrid.vue").default>
  'LazySectionsBrand': LazyComponent<typeof import("../../components/sections/Brand.vue").default>
  'LazySectionsGenderTiles': LazyComponent<typeof import("../../components/sections/GenderTiles.vue").default>
  'LazySectionsHomeHero': LazyComponent<typeof import("../../components/sections/HomeHero.vue").default>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only").default>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
