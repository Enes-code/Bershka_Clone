<template>
  <div>
    <h1>CHECKOUT</h1>
    <p>Bu sayfa Firestore <b>orders</b> koleksiyonuna yazma yapar.</p>

    <div class="box">
      <div>Toplam: <b>{{ total }} TRY</b></div>

      <button :disabled="items.length===0 || loading" @click="create">
        {{ loading ? 'İşleniyor...' : 'SİPARİŞ OLUŞTUR' }}
      </button>

      <div v-if="lastOrderId" class="ok">
        Sipariş oluştu: <b>{{ lastOrderId }}</b>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'checkout' })

const cart = useCartStore()
const orders = useOrdersStore()

const items = computed(() => cart.items)
const total = computed(() => cart.total)
const lastOrderId = computed(() => orders.lastOrderId)

const loading = ref(false)

async function create() {
  loading.value = true
  try {
    await orders.createOrder({
      userId: 'demo-user',
      items: items.value,
      total: total.value,
      currency: 'TRY',
    })
    cart.clear()
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.box{ margin-top:16px; border:1px solid #000; padding:16px; max-width:520px; }
button{ margin-top:12px; border:1px solid #000; background:#000; color:#fff; padding:10px 14px; font-weight:800; cursor:pointer; }
button:disabled{ opacity:.5; cursor:not-allowed; }
.ok{ margin-top:12px; }
</style>

