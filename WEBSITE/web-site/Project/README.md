# Bershka Clone - Nuxt 3 E-Commerce

Modern, clean architecture ile geliştirilmiş Bershka e-ticaret sitesi klonu. Nuxt 3, TypeScript, Pinia ve Firebase kullanılarak oluşturulmuştur.

## Proje Yapısı

Bu proje temiz mimari (clean architecture) prensiplerine göre yapılandırılmıştır:

```
├── components/
│   ├── atoms/          # BaseButton, BaseText, BaseImage, BasePrice
│   ├── molecules/      # GenderTile, ProductCard, SearchInput, QuantitySelector
│   └── organisms/      # HeaderBar, ProductGrid, CartList
├── layouts/
│   ├── default.vue     # Ana layout (HeaderBar + content)
│   └── checkout.vue    # Checkout layout (simplified header)
├── pages/
│   ├── index.vue       # Homepage (Bershka-style with gender tiles)
│   ├── category/
│   │   └── [slug].vue  # Category page
│   ├── product/
│   │   └── [id].vue    # Product detail page
│   ├── cart.vue        # Shopping cart
│   ├── checkout.vue     # Checkout (creates Firestore order)
│   └── account.vue     # User account
├── stores/             # Pinia stores (ALL Firestore operations here)
│   ├── products.ts     # Firestore read: fetchProductsByGender, fetchProductsByCategory, fetchOneProduct
│   ├── categories.ts    # Firestore read: fetchCategories, fetchCategoryBySlug
│   ├── cart.ts         # Local state management
│   ├── orders.ts       # Firestore write: createOrder (proof of write operation)
│   └── user.ts         # Firestore write: upsertUserProfile, updateUserAddress
├── types/              # TypeScript interfaces
│   ├── product.ts
│   ├── category.ts
│   ├── cart.ts
│   ├── order.ts
│   └── user.ts
└── plugins/
    └── firebase.client.ts  # Firebase initialization
```

## Özellikler

✅ **Nuxt 3** - Vue 3 Composition API  
✅ **TypeScript** - Tam type safety  
✅ **Pinia** - State management (tüm Firestore işlemleri store'larda)  
✅ **Firebase/Firestore** - 4 collection: products, categories, users, orders  
✅ **Atomic Design** - Bileşen yapısı (atoms, molecules, organisms)  
✅ **2 Layout** - Default ve Checkout layout'ları  
✅ **Bershka Homepage** - Centered logo + 2 large gender tiles side-by-side  
✅ **Firestore Write Proof** - Checkout sayfasında order oluşturma  

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Firebase yapılandırması:
   - Proje kök dizininde `.env` dosyası oluşturun
   - Firebase Console'dan (https://console.firebase.google.com/) proje ayarlarınızı alın
   - `.env` dosyasına aşağıdaki formatı kullanarak ekleyin:

```env
NUXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NUXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NUXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
```

   **Firebase değerlerini nasıl alırsınız:**
   1. Firebase Console'a gidin: https://console.firebase.google.com/
   2. Projenizi seçin (veya yeni proje oluşturun)
   3. ⚙️ Project Settings > General sekmesine gidin
   4. "Your apps" bölümünde Web app (</>) ikonuna tıklayın
   5. App nickname verin ve "Register app" butonuna tıklayın
   6. Açılan sayfada `firebaseConfig` objesindeki değerleri `.env` dosyasına kopyalayın

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## Firestore Collections

Proje aşağıdaki Firestore collection'larını kullanır:

1. **products** (read-only)
   - `gender`: 'kadin' | 'erkek' | 'unisex'
   - `categorySlug`: string
   - `inStock`: boolean
   - Diğer ürün bilgileri

2. **categories** (read-only)
   - `slug`: string
   - `isActive`: boolean
   - `order`: number

3. **orders** (read-write)
   - Checkout sayfasında `createOrder` action ile yeni order oluşturulur
   - `userId`, `items`, `total`, `status`, vb.

4. **users** (read-write)
   - `upsertUserProfile` ile profil güncelleme
   - `updateUserAddress` ile adres güncelleme

## Önemli Notlar

- **Tüm Firestore işlemleri Pinia store'larında yapılır**
- Sayfalar ve bileşenler sadece store action'larını çağırır
- Business logic hiçbir zaman page/component içinde değil, store'larda
- TypeScript type safety tüm projede aktif

## Teknolojiler

- Nuxt 3
- Vue 3 (Composition API)
- TypeScript
- Pinia
- Firebase / Firestore
- Atomic Design

## Geliştirme

Production build:
```bash
npm run build
```

Preview:
```bash
npm run preview
```
