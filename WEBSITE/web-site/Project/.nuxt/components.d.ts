
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


export const AtomsAccessibilityButtons: typeof import("../components/atoms/AccessibilityButtons.vue").default
export const AtomsButton: typeof import("../components/atoms/Button.vue").default
export const AtomsHeroLogo: typeof import("../components/atoms/HeroLogo.vue").default
export const AtomsInput: typeof import("../components/atoms/Input.vue").default
export const AtomsLanguageButtons: typeof import("../components/atoms/LanguageButtons.vue").default
export const AtomsLogo: typeof import("../components/atoms/Logo.vue").default
export const AtomsMarketDropdown: typeof import("../components/atoms/MarketDropdown.vue").default
export const AtomsRegionLanguageButton: typeof import("../components/atoms/RegionLanguageButton.vue").default
export const AtomsSkipToContent: typeof import("../components/atoms/SkipToContent.vue").default
export const MoleculesHeroSplit: typeof import("../components/molecules/HeroSplit.vue").default
export const MoleculesLanguageSelector: typeof import("../components/molecules/LanguageSelector.vue").default
export const MoleculesLocationSelector: typeof import("../components/molecules/LocationSelector.vue").default
export const MoleculesProductCard: typeof import("../components/molecules/ProductCard.vue").default
export const MoleculesSearchBar: typeof import("../components/molecules/SearchBar.vue").default
export const OrganismsBottomActionBar: typeof import("../components/organisms/BottomActionBar.vue").default
export const OrganismsBottomNotifications: typeof import("../components/organisms/BottomNotifications.vue").default
export const OrganismsFooter: typeof import("../components/organisms/Footer.vue").default
export const OrganismsFooterBar: typeof import("../components/organisms/FooterBar.vue").default
export const OrganismsFooterBottom: typeof import("../components/organisms/FooterBottom.vue").default
export const OrganismsFooterLinks: typeof import("../components/organisms/FooterLinks.vue").default
export const OrganismsHeader: typeof import("../components/organisms/Header.vue").default
export const OrganismsHeaderBar: typeof import("../components/organisms/HeaderBar.vue").default
export const OrganismsLocationModal: typeof import("../components/organisms/LocationModal.vue").default
export const OrganismsProductGrid: typeof import("../components/organisms/ProductGrid.vue").default
export const OrganismsTopNotifications: typeof import("../components/organisms/TopNotifications.vue").default
export const SectionsCategoryGrid: typeof import("../components/sections/CategoryGrid.vue").default
export const SectionsContentSection: typeof import("../components/sections/ContentSection.vue").default
export const SectionsFooter: typeof import("../components/sections/Footer.vue").default
export const SectionsHero: typeof import("../components/sections/Hero.vue").default
export const SectionsMainContent: typeof import("../components/sections/MainContent.vue").default
export const SectionsNotificationContainers: typeof import("../components/sections/NotificationContainers.vue").default
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only").default
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only").default
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page").default
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components").Link
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components").Base
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components").Title
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components").Style
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components").Head
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components").Html
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components").Body
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default
export const LazyAtomsAccessibilityButtons: LazyComponent<typeof import("../components/atoms/AccessibilityButtons.vue").default>
export const LazyAtomsButton: LazyComponent<typeof import("../components/atoms/Button.vue").default>
export const LazyAtomsHeroLogo: LazyComponent<typeof import("../components/atoms/HeroLogo.vue").default>
export const LazyAtomsInput: LazyComponent<typeof import("../components/atoms/Input.vue").default>
export const LazyAtomsLanguageButtons: LazyComponent<typeof import("../components/atoms/LanguageButtons.vue").default>
export const LazyAtomsLogo: LazyComponent<typeof import("../components/atoms/Logo.vue").default>
export const LazyAtomsMarketDropdown: LazyComponent<typeof import("../components/atoms/MarketDropdown.vue").default>
export const LazyAtomsRegionLanguageButton: LazyComponent<typeof import("../components/atoms/RegionLanguageButton.vue").default>
export const LazyAtomsSkipToContent: LazyComponent<typeof import("../components/atoms/SkipToContent.vue").default>
export const LazyMoleculesHeroSplit: LazyComponent<typeof import("../components/molecules/HeroSplit.vue").default>
export const LazyMoleculesLanguageSelector: LazyComponent<typeof import("../components/molecules/LanguageSelector.vue").default>
export const LazyMoleculesLocationSelector: LazyComponent<typeof import("../components/molecules/LocationSelector.vue").default>
export const LazyMoleculesProductCard: LazyComponent<typeof import("../components/molecules/ProductCard.vue").default>
export const LazyMoleculesSearchBar: LazyComponent<typeof import("../components/molecules/SearchBar.vue").default>
export const LazyOrganismsBottomActionBar: LazyComponent<typeof import("../components/organisms/BottomActionBar.vue").default>
export const LazyOrganismsBottomNotifications: LazyComponent<typeof import("../components/organisms/BottomNotifications.vue").default>
export const LazyOrganismsFooter: LazyComponent<typeof import("../components/organisms/Footer.vue").default>
export const LazyOrganismsFooterBar: LazyComponent<typeof import("../components/organisms/FooterBar.vue").default>
export const LazyOrganismsFooterBottom: LazyComponent<typeof import("../components/organisms/FooterBottom.vue").default>
export const LazyOrganismsFooterLinks: LazyComponent<typeof import("../components/organisms/FooterLinks.vue").default>
export const LazyOrganismsHeader: LazyComponent<typeof import("../components/organisms/Header.vue").default>
export const LazyOrganismsHeaderBar: LazyComponent<typeof import("../components/organisms/HeaderBar.vue").default>
export const LazyOrganismsLocationModal: LazyComponent<typeof import("../components/organisms/LocationModal.vue").default>
export const LazyOrganismsProductGrid: LazyComponent<typeof import("../components/organisms/ProductGrid.vue").default>
export const LazyOrganismsTopNotifications: LazyComponent<typeof import("../components/organisms/TopNotifications.vue").default>
export const LazySectionsCategoryGrid: LazyComponent<typeof import("../components/sections/CategoryGrid.vue").default>
export const LazySectionsContentSection: LazyComponent<typeof import("../components/sections/ContentSection.vue").default>
export const LazySectionsFooter: LazyComponent<typeof import("../components/sections/Footer.vue").default>
export const LazySectionsHero: LazyComponent<typeof import("../components/sections/Hero.vue").default>
export const LazySectionsMainContent: LazyComponent<typeof import("../components/sections/MainContent.vue").default>
export const LazySectionsNotificationContainers: LazyComponent<typeof import("../components/sections/NotificationContainers.vue").default>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only").default>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only").default>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page").default>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Link>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Base>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Title>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Style>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Head>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Html>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Body>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default>

export const componentNames: string[]
