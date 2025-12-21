<template>
  <div class="profile-layout">
    <header class="profile-header">
      <NuxtLink to="/" class="logo">BERSHKA</NuxtLink>
      <nav class="profile-nav">
        <NuxtLink to="/account" class="nav-link">Hesabım</NuxtLink>
        <NuxtLink to="/account/orders" class="nav-link">Siparişlerim</NuxtLink>
        <NuxtLink to="/account/settings" class="nav-link">Ayarlar</NuxtLink>
      </nav>
    </header>
    <main class="profile-main">
      <slot />
    </main>
    <footer class="profile-footer">
      <p>&copy; 2025 BERSHKA</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.profile-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.profile-header {
  border-bottom: 1px solid #e5e5e5;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-weight: 900;
  font-size: 1.5rem;
  text-decoration: none;
  color: #000;
  letter-spacing: 1px;
}

.profile-nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #000;
}

.profile-main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.profile-footer {
  border-top: 1px solid #e5e5e5;
  padding: 1.5rem 2rem;
  text-align: center;
  color: #666;
  font-size: 0.875rem;
}
</style>

