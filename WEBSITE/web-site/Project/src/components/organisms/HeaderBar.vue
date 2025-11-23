<template>
  <header class="header">
    <div class="top-bar">ÜCRETSİZ KARGO | HIZLI TESLİMAT | BERSHKA</div>
    <nav class="nav">
      <button class="hamburger-btn" @click="$emit('toggle-menu')">☰</button>
      <div class="logo" @click="$emit('show-component', 'anasayfa')">BERSHKA</div>
      <div class="nav-links">
        <a href="#" @click.prevent="$emit('show-component', 'anasayfa')">ERKEK</a>
        <a href="#" @click.prevent="$emit('show-component', 'anasayfa')">KADIN</a>
        <a href="#" @click.prevent="$emit('show-component', 'anasayfa')">YENİ</a>
      </div>
      <div class="nav-icons">
        <button @click="$emit('show-component', 'arama')">🔍</button>
        <button @click="$emit('show-component', 'giriş')">👤</button>
        <button @click="$emit('show-component', 'sepet')">🛒</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
  emits: ['toggle-menu', 'show-component']
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
  transition: background 0.3s;
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

.nav-icons {
  display: flex;
  gap: 20px;
}

.nav-icons button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: var(--accent-primary);
  padding: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icons button:hover {
  transform: scale(1.15) rotate(5deg);
  background: rgba(0, 0, 0, 0.05);
}

.hamburger-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: var(--accent-primary);
  margin-right: 20px;
}
</style>

