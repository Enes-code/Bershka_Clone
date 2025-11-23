<template>
  <header class="header">
    <div class="top-bar">ÜCRETSİZ KARGO | HIZLI TESLİMAT | BERSHKA</div>
    <nav class="nav">
      <IconButton icon="☰" @click="$emit('toggle-menu')" />
      <div class="logo" @click="$emit('navigate', 'home')">BERSHKA</div>
      <div class="nav-links">
        <a href="#" @click.prevent="$emit('navigate', 'home')">ERKEK</a>
        <a href="#" @click.prevent="$emit('navigate', 'home')">KADIN</a>
        <a href="#" @click.prevent="$emit('navigate', 'home')">YENİ</a>
        <a href="#" @click.prevent="$emit('navigate', 'campaigns')">İNDİRİM</a>
      </div>
      <div class="nav-icons">
        <IconButton icon="🔍" @click="$emit('navigate', 'home')" title="Ara" />
        <IconButton icon="👤" @click="$emit('navigate', 'login')" title="Hesap" />
        <IconButton icon="🛒" @click="$emit('navigate', 'cart')" title="Sepet" />
      </div>
    </nav>
  </header>
</template>

<script>
import IconButton from '../atoms/IconButton.vue'

export default {
  name: 'Header',
  components: {
    IconButton
  },
  emits: ['toggle-menu', 'navigate']
}
</script>

<style scoped>
.header {
  background: var(--panel-light);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.top-bar {
  background: var(--accent-primary);
  color: white;
  text-align: center;
  padding: 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
}

.nav {
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.logo {
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 4px;
  color: var(--accent-primary);
  text-transform: uppercase;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 25px;
}

.nav-links a {
  text-decoration: none;
  color: var(--accent-secondary);
  font-weight: 500;
  font-size: 14px;
}

.nav-icons {
  display: flex;
  gap: 20px;
}
</style>

