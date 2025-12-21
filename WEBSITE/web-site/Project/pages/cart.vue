<template>
  <div class="wrap">
    <h1 class="title">SEPET</h1>

    <div v-if="items.length === 0">Sepet boş.</div>

    <div v-else class="list">
      <div v-for="it in items" :key="it.productId" class="row">
        <img :src="it.imageUrl" class="img" />
        <div class="info">
          <div class="t">{{ it.title }}</div>
          <div class="p">{{ it.price }} {{ it.currency }}</div>

          <div class="q">
            <button @click="cart.dec(it.productId)">-</button>
            <span>{{ it.qty }}</span>
            <button @click="cart.inc(it.productId)">+</button>
          </div>
        </div>
      </div>

      <div class="total">Toplam: {{ total }} TRY</div>
      <NuxtLink class="go" to="/checkout">ÖDEMEYE GİT</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const cart = useCartStore()
const items = computed(() => cart.items)
const total = computed(() => cart.total)
</script>

<style scoped>
.wrap{ width:min(900px, calc(100% - 48px)); margin: 24px auto; }
.title{ font-size:22px; margin:0 0 14px; }
.list{ margin-top:16px; display:flex; flex-direction:column; gap:14px; }
.row{ display:flex; gap:14px; border:1px solid #000; padding:12px; }
.img{ width:90px; height:120px; object-fit:cover; background:#eee; }
.info{ flex:1; }
.q{ margin-top:10px; display:flex; align-items:center; gap:10px; }
.q button{ width:32px; height:32px; border:1px solid #000; background:#fff; cursor:pointer; }
.total{ font-weight:800; margin-top:10px; }
.go{ display:inline-block; margin-top:10px; border:1px solid #000; padding:10px 14px; text-decoration:none; color:#000; font-weight:800; }
</style>

