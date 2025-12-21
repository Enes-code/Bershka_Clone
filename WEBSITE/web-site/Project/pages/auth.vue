<template>
  <div class="w-full max-w-md p-8 space-y-8 bg-card rounded-xl shadow-lg border">
    <div class="text-center">
      <h1 class="text-3xl font-black uppercase tracking-tighter mb-2">Bershka</h1>
      <p class="text-muted-foreground">{{ isLogin ? 'Welcome back' : 'Create an account' }}</p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <AtomsInput
        v-model="email"
        type="email"
        label="Email"
        placeholder="name@example.com"
        required
      />
      <AtomsInput
        v-model="password"
        type="password"
        label="Password"
        placeholder="••••••••"
        required
      />

      <div v-if="error" class="text-destructive text-sm">{{ error }}</div>

      <AtomsButton type="submit" class="w-full" :disabled="loading">
        {{ loading ? 'Loading...' : (isLogin ? 'Sign In' : 'Sign Up') }}
      </AtomsButton>
    </form>

    <div class="text-center text-sm">
      <button @click="toggleMode" class="text-primary hover:underline">
        {{ isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in" }}
      </button>
    </div>
     <div class="text-center">
         <NuxtLink to="/" class="text-muted-foreground text-xs hover:underline">Back to Store</NuxtLink>
     </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '~/stores/useUserStore';
import { useRouter } from 'vue-router';

definePageMeta({
  layout: 'custom',
});

const isLogin = ref(true);
const email = ref('');
const password = ref('');
const userStore = useUserStore();
const router = useRouter();

const loading = computed(() => userStore.loading);
const error = computed(() => userStore.error);

const toggleMode = () => {
    isLogin.value = !isLogin.value;
    userStore.error = null; // Clear error
};

const handleSubmit = async () => {
    if (isLogin.value) {
        await userStore.login(email.value, password.value);
    } else {
        await userStore.register(email.value, password.value);
    }

    if (userStore.isAuthenticated) {
        router.push('/');
    }
};
</script>
