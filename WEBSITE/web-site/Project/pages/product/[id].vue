<template>
  <div class="wrap" v-if="p">
    <div class="cols">
      <img class="img" :src="p.imageUrl" :alt="p.title" />

      <div class="info">
        <h1 class="t">{{ p.title }}</h1>
        <div class="price">{{ p.price }} {{ p.currency }}</div>

        <div class="sizes">
          <div class="label">BEDEN</div>
          <div class="row">
            <button v-for="s in sizes" :key="s" class="size" :class="{active: size===s}" @click="size=s">{{ s }}</button>
          </div>
        </div>

        <button class="add" @click="addToCart">SEPETE EKLE</button>
      </div>
    </div>
  </div>

  <div v-else class="wrap">Ürün bulunamadı.</div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const productsStore = useProductsStore()
const cart = useCartStore()

const id = computed(() => String(route.params.id || ''))
const p = computed(() => productsStore.active)

const sizes = ['XS', 'S', 'M', 'L', 'XL']
const size = ref<string>('M')

watchEffect(async () => {
  if (id.value) await productsStore.fetchOne(id.value)
})

function addToCart() {
  if (!p.value) return
  cart.addProduct(p.value)
  // beden seçimini istersen CartItem'a ekleriz, şimdilik UI.
}
</script>

<style scoped>
.wrap{ width:min(1100px, calc(100% - 48px)); margin: 24px auto; }
.cols{ display:grid; grid-template-columns: 1fr 420px; gap: 24px; }
.img{ width:100%; aspect-ratio: 3/4; object-fit:cover; background:#eee; }
.info{ border-left:1px solid #000; padding-left: 18px; }
.t{ margin:0; font-size:20px; }
.price{ margin-top:8px; font-weight:700; }
.sizes{ margin-top:18px; }
.label{ font-size:12px; font-weight:700; margin-bottom:8px; }
.row{ display:flex; gap:8px; flex-wrap:wrap; }
.size{ border:1px solid #000; background:#fff; padding:8px 10px; cursor:pointer; }
.size.active{ background:#000; color:#fff; }
.add{ margin-top:18px; border:1px solid #000; background:#000; color:#fff; padding:12px 14px; font-weight:800; cursor:pointer; }
</style>

