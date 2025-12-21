<template>
  <div class="wrap">
    <header class="top">
      <NuxtLink to="/" class="brand">BERSHKA</NuxtLink>
      <div class="title">CHECKOUT</div>
    </header>

    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrap { min-height: 100vh; background: #fff; }
.top {
  height: 64px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 0 24px;
}
.brand { text-decoration: none; color: #000; font-weight: 900; letter-spacing: 1px; }
.title { font-weight: 700; }
.main { padding: 24px; }
</style>
