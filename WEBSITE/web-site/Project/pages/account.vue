<template>
  <div class="account-page">
    <div class="container">
      <BaseText tag="h1" size="2xl" weight="bold" class="page-title">Hesabım</BaseText>
      
      <div v-if="!userStore.isAuthenticated" class="not-authenticated">
        <BaseText tag="p" size="lg">Giriş yapmanız gerekiyor</BaseText>
        <NuxtLink to="/" class="login-link">
          <Button>Giriş Yap</Button>
        </NuxtLink>
      </div>

      <div v-else class="account-content">
        <div class="account-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="{ active: activeTab === tab.id }"
            class="tab-button"
          >
            {{ tab.label }}
          </button>
        </div>

        <div class="tab-content">
          <div v-if="activeTab === 'orders'">
            <BaseText tag="h2" size="lg" weight="bold">Siparişlerim</BaseText>
            <div v-if="ordersStore.loading" class="loading">Yükleniyor...</div>
            <div v-else-if="ordersStore.orders.length === 0" class="empty-state">
              <BaseText tag="p" size="md">Henüz siparişiniz yok</BaseText>
            </div>
            <div v-else class="orders-list">
              <div v-for="order in ordersStore.orders" :key="order.id" class="order-card">
                <BaseText tag="h3" size="md" weight="semibold">Sipariş #{{ order.id }}</BaseText>
                <BaseText tag="p" size="sm">Durum: {{ order.status }}</BaseText>
                <BaseText tag="p" size="md" weight="bold">Toplam: {{ formatPrice(order.total) }} {{ order.currency }}</BaseText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '~/components/atoms/Button.vue'

const userStore = useUserStore()
const ordersStore = useOrdersStore()

const activeTab = ref('orders')

const tabs = [
  { id: 'orders', label: 'Siparişlerim' }
]

function formatPrice(price: number): string {
  return price.toFixed(2)
}

onMounted(async () => {
  if (userStore.user?.id) {
    await ordersStore.fetchUserOrders(userStore.user.id)
  }
})
</script>

<style scoped>
.account-page {
  min-height: 100vh;
  padding: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.not-authenticated {
  text-align: center;
  padding: 4rem;
  background: white;
}

.login-link {
  text-decoration: none;
  display: inline-block;
  margin-top: 2rem;
}

.account-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
}

.account-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

.tab-button {
  padding: 1rem 2rem;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.tab-button:hover {
  border-bottom-color: #ddd;
}

.tab-button.active {
  border-bottom-color: #000;
  font-weight: 600;
}

.tab-content {
  padding: 2rem 0;
}

.loading,
.empty-state {
  text-align: center;
  padding: 4rem;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.order-card {
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>

