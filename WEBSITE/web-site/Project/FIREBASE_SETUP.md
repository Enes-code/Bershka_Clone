# Firebase Kurulum Rehberi

## Firebase Environment Variables Açıklaması

`.env` dosyasındaki `NUXT_PUBLIC_FIREBASE_*` değişkenleri, Firebase projenize bağlanmak için gerekli yapılandırma bilgileridir.

### Her bir değişken ne anlama geliyor?

1. **NUXT_PUBLIC_FIREBASE_API_KEY**
   - Firebase API anahtarı
   - Örnek: `AIzaSyAbCdEf1234567890...`
   - Firebase servislerine erişim için gerekli

2. **NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN**
   - Authentication domain
   - Örnek: `my-project.firebaseapp.com`
   - Kullanıcı girişi için kullanılır

3. **NUXT_PUBLIC_FIREBASE_PROJECT_ID**
   - Firebase proje ID'si
   - Örnek: `my-project-12345`
   - Projenizi tanımlar

4. **NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET**
   - Storage bucket adı
   - Örnek: `my-project-12345.appspot.com`
   - Dosya depolama için kullanılır

5. **NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID**
   - Messaging sender ID
   - Örnek: `123456789012`
   - Push notification için kullanılır

6. **NUXT_PUBLIC_FIREBASE_APP_ID**
   - App ID
   - Örnek: `1:123456789012:web:abcdef123456`
   - Uygulamanızı tanımlar

## Adım Adım Kurulum

### 1. Firebase Console'a Gidin
https://console.firebase.google.com/

### 2. Proje Oluşturun veya Seçin
- Yeni proje oluşturmak için "Add project" butonuna tıklayın
- Mevcut projeyi kullanmak için projeyi seçin

### 3. Web App Ekleyin
1. Project Settings (⚙️) > General sekmesine gidin
2. "Your apps" bölümünde Web app (</>) ikonuna tıklayın
3. App nickname verin (örn: "Bershka Web")
4. "Register app" butonuna tıklayın

### 4. Config Değerlerini Kopyalayın
Açılan sayfada şu şekilde bir `firebaseConfig` objesi göreceksiniz:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "my-project.firebaseapp.com",
  projectId: "my-project-12345",
  storageBucket: "my-project-12345.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

### 5. .env Dosyası Oluşturun
Proje kök dizininde (nuxt.config.ts ile aynı seviyede) `.env` dosyası oluşturun:

```env
NUXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=my-project.firebaseapp.com
NUXT_PUBLIC_FIREBASE_PROJECT_ID=my-project-12345
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=my-project-12345.appspot.com
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NUXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
```

**ÖNEMLİ:** 
- `.env` dosyasını Git'e commit ETMEYİN (zaten .gitignore'da olmalı)
- Gerçek değerleri `your-api-key-here` gibi placeholder'lar yerine yazın
- `NUXT_PUBLIC_` prefix'i önemli - Nuxt 3'te public değişkenler için gerekli

### 6. Firestore Koleksiyonlarını Oluşturun
Firebase Console > Firestore Database'de şu koleksiyonları oluşturun:
- `products` (read-only)
- `categories` (read-only)
- `orders` (read-write)
- `users` (read-write, opsiyonel)

### 7. Firestore Rules Ayarlayın
Firestore > Rules sekmesinde güvenlik kurallarını ayarlayın:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Products - read only
    match /products/{productId} {
      allow read: if true;
      allow write: if false;
    }
    
    // Categories - read only
    match /categories/{categoryId} {
      allow read: if true;
      allow write: if false;
    }
    
    // Orders - authenticated users can create
    match /orders/{orderId} {
      allow read: if request.auth != null;
      allow create: if true; // Demo için herkese açık
      allow update, delete: if false;
    }
    
    // Users - users can update their own data
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Test Etme

`.env` dosyasını oluşturduktan sonra:

```bash
npm run dev
```

Uygulama çalıştığında, Firebase bağlantısı otomatik olarak kurulacak ve store'lar Firestore'dan veri çekebilecek.

