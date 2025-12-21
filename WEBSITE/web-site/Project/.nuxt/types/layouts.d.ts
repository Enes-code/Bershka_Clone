import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "checkout" | "custom" | "default" | "profile"
declare module 'nuxt/app' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}