<template>
  <header class="top-navigation">
    <div class="top-bar">ÜCRETSİZ KARGO | HIZLI TESLİMAT | BERSHKA</div>
    <nav class="nav">
      <IconAction icon="☰" @click="$emit('toggle-menu')" />
      <div class="logo" @click="$emit('navigate', 'home')">BERSHKA</div>
      <div class="nav-links">
        <a href="#" @click.prevent="$emit('navigate', 'home')">ERKEK</a>
        <a href="#" @click.prevent="$emit('navigate', 'home')">KADIN</a>
        <a href="#" @click.prevent="$emit('navigate', 'home')">YENİ</a>
        <a href="#" @click.prevent="$emit('navigate', 'campaigns')">İNDİRİM</a>
      </div>
      <div class="nav-icons">
        <IconAction icon="🔍" @click="$emit('navigate', 'home')" title="Ara" />
        <IconAction icon="👤" @click="$emit('navigate', 'login')" title="Hesap" />
        <IconAction 
          icon="🛒" 
          @click="$emit('navigate', 'cart')" 
          title="Sepet"
          :isActive="cartCount > 0"
        />
        <IconAction 
          icon="❤️" 
          @click="$emit('navigate', 'favorites')" 
          title="Favoriler"
          :isActive="favoritesCount > 0"
        />
      </div>
    </nav>
  </header>
</template>

<script>
import IconAction from '../atoms/IconAction.vue'

export default {
  name: 'TopNavigation',
  components: {
    IconAction
  },
  props: {
    cartCount: {
      type: Number,
      default: 0
    },
    favoritesCount: {
      type: Number,
      default: 0
    }
  },
  emits: ['toggle-menu', 'navigate']
}
</script>

<style scoped>
.top-navigation {
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
  transition: background 0.3s;
}

.top-bar:hover {
  background: #1a1a1a;
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo:hover {
  transform: scale(1.05);
  letter-spacing: 6px;
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-primary);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a:hover {
  color: var(--accent-primary);
  transform: translateY(-2px);
}

.nav-icons {
  display: flex;
  gap: 20px;
}
</style>

