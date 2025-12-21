import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey || '',
    authDomain: config.public.firebaseAuthDomain || '',
    projectId: config.public.firebaseProjectId || '',
    storageBucket: config.public.firebaseStorageBucket || '',
    messagingSenderId: config.public.firebaseMessagingSenderId || '',
    appId: config.public.firebaseAppId || '',
  }

  // Only initialize if we have at least projectId
  if (!firebaseConfig.projectId) {
    console.warn('Firebase config is missing. Please create a .env file with Firebase credentials.')
    // Return a mock db object to prevent errors
    return {
      provide: { 
        db: null as any,
      },
    }
  }

  const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
  const db = getFirestore(app)

  return {
    provide: { db },
  }
})

declare module '#app' {
  interface NuxtApp {
    $db: ReturnType<typeof getFirestore>
  }
}

