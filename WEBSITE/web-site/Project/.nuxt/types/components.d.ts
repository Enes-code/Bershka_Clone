
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
  'AtomsAccessibilityButtons': typeof import("../../components/atoms/AccessibilityButtons.vue").default
  'AtomsButton': typeof import("../../components/atoms/Button.vue").default
  'AtomsHeroLogo': typeof import("../../components/atoms/HeroLogo.vue").default
  'AtomsInput': typeof import("../../components/atoms/Input.vue").default
  'AtomsLanguageButtons': typeof import("../../components/atoms/LanguageButtons.vue").default
  'AtomsLogo': typeof import("../../components/atoms/Logo.vue").default
  'AtomsMarketDropdown': typeof import("../../components/atoms/MarketDropdown.vue").default
  'AtomsRegionLanguageButton': typeof import("../../components/atoms/RegionLanguageButton.vue").default
  'AtomsSkipToContent': typeof import("../../components/atoms/SkipToContent.vue").default
  'MoleculesHeroSplit': typeof import("../../components/molecules/HeroSplit.vue").default
  'MoleculesLanguageSelector': typeof import("../../components/molecules/LanguageSelector.vue").default
  'MoleculesLocationSelector': typeof import("../../components/molecules/LocationSelector.vue").default
  'MoleculesProductCard': typeof import("../../components/molecules/ProductCard.vue").default
  'MoleculesSearchBar': typeof import("../../components/molecules/SearchBar.vue").default
  'OrganismsBottomActionBar': typeof import("../../components/organisms/BottomActionBar.vue").default
  'OrganismsBottomNotifications': typeof import("../../components/organisms/BottomNotifications.vue").default
  'OrganismsFooter': typeof import("../../components/organisms/Footer.vue").default
  'OrganismsFooterBar': typeof import("../../components/organisms/FooterBar.vue").default
  'OrganismsFooterBottom': typeof import("../../components/organisms/FooterBottom.vue").default
  'OrganismsFooterLinks': typeof import("../../components/organisms/FooterLinks.vue").default
  'OrganismsHeader': typeof import("../../components/organisms/Header.vue").default
  'OrganismsHeaderBar': typeof import("../../components/organisms/HeaderBar.vue").default
  'OrganismsLocationModal': typeof import("../../components/organisms/LocationModal.vue").default
  'OrganismsProductGrid': typeof import("../../components/organisms/ProductGrid.vue").default
  'OrganismsTopNotifications': typeof import("../../components/organisms/TopNotifications.vue").default
  'SectionsCategoryGrid': typeof import("../../components/sections/CategoryGrid.vue").default
  'SectionsContentSection': typeof import("../../components/sections/ContentSection.vue").default
  'SectionsFooter': typeof import("../../components/sections/Footer.vue").default
  'SectionsHero': typeof import("../../components/sections/Hero.vue").default
  'SectionsMainContent': typeof import("../../components/sections/MainContent.vue").default
  'SectionsNotificationContainers': typeof import("../../components/sections/NotificationContainers.vue").default
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
  'LazyAtomsAccessibilityButtons': LazyComponent<typeof import("../../components/atoms/AccessibilityButtons.vue").default>
  'LazyAtomsButton': LazyComponent<typeof import("../../components/atoms/Button.vue").default>
  'LazyAtomsHeroLogo': LazyComponent<typeof import("../../components/atoms/HeroLogo.vue").default>
  'LazyAtomsInput': LazyComponent<typeof import("../../components/atoms/Input.vue").default>
  'LazyAtomsLanguageButtons': LazyComponent<typeof import("../../components/atoms/LanguageButtons.vue").default>
  'LazyAtomsLogo': LazyComponent<typeof import("../../components/atoms/Logo.vue").default>
  'LazyAtomsMarketDropdown': LazyComponent<typeof import("../../components/atoms/MarketDropdown.vue").default>
  'LazyAtomsRegionLanguageButton': LazyComponent<typeof import("../../components/atoms/RegionLanguageButton.vue").default>
  'LazyAtomsSkipToContent': LazyComponent<typeof import("../../components/atoms/SkipToContent.vue").default>
  'LazyMoleculesHeroSplit': LazyComponent<typeof import("../../components/molecules/HeroSplit.vue").default>
  'LazyMoleculesLanguageSelector': LazyComponent<typeof import("../../components/molecules/LanguageSelector.vue").default>
  'LazyMoleculesLocationSelector': LazyComponent<typeof import("../../components/molecules/LocationSelector.vue").default>
  'LazyMoleculesProductCard': LazyComponent<typeof import("../../components/molecules/ProductCard.vue").default>
  'LazyMoleculesSearchBar': LazyComponent<typeof import("../../components/molecules/SearchBar.vue").default>
  'LazyOrganismsBottomActionBar': LazyComponent<typeof import("../../components/organisms/BottomActionBar.vue").default>
  'LazyOrganismsBottomNotifications': LazyComponent<typeof import("../../components/organisms/BottomNotifications.vue").default>
  'LazyOrganismsFooter': LazyComponent<typeof import("../../components/organisms/Footer.vue").default>
  'LazyOrganismsFooterBar': LazyComponent<typeof import("../../components/organisms/FooterBar.vue").default>
  'LazyOrganismsFooterBottom': LazyComponent<typeof import("../../components/organisms/FooterBottom.vue").default>
  'LazyOrganismsFooterLinks': LazyComponent<typeof import("../../components/organisms/FooterLinks.vue").default>
  'LazyOrganismsHeader': LazyComponent<typeof import("../../components/organisms/Header.vue").default>
  'LazyOrganismsHeaderBar': LazyComponent<typeof import("../../components/organisms/HeaderBar.vue").default>
  'LazyOrganismsLocationModal': LazyComponent<typeof import("../../components/organisms/LocationModal.vue").default>
  'LazyOrganismsProductGrid': LazyComponent<typeof import("../../components/organisms/ProductGrid.vue").default>
  'LazyOrganismsTopNotifications': LazyComponent<typeof import("../../components/organisms/TopNotifications.vue").default>
  'LazySectionsCategoryGrid': LazyComponent<typeof import("../../components/sections/CategoryGrid.vue").default>
  'LazySectionsContentSection': LazyComponent<typeof import("../../components/sections/ContentSection.vue").default>
  'LazySectionsFooter': LazyComponent<typeof import("../../components/sections/Footer.vue").default>
  'LazySectionsHero': LazyComponent<typeof import("../../components/sections/Hero.vue").default>
  'LazySectionsMainContent': LazyComponent<typeof import("../../components/sections/MainContent.vue").default>
  'LazySectionsNotificationContainers': LazyComponent<typeof import("../../components/sections/NotificationContainers.vue").default>
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
