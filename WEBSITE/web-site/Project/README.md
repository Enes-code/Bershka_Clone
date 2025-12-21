# Bershka Clone - Nuxt 3 E-commerce

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Firebase yapılandırması:**
   - `.env` dosyası oluşturun (`.env.example` dosyasına bakın)
   - Firebase bilgilerinizi ekleyin

3. **Development server'ı başlatın:**
   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın:**
   - http://localhost:3000

## 📁 Proje Yapısı

```
├── components/        # Vue componentleri (Atomic Design)
├── layouts/          # Layout dosyaları
├── pages/            # Sayfa dosyaları
├── stores/           # Pinia store'ları
├── types/            # TypeScript interface'leri
├── plugins/          # Nuxt plugin'leri
└── assets/           # Statik dosyalar
```

## 🔥 Firebase Collections

- `markets` - Market bilgileri
- `products` - Ürün bilgileri
- `users` - Kullanıcı bilgileri ve seçimleri
- `basket` - Sepet bilgileri

## 📝 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run generate` - Static site generation
- `npm run preview` - Preview production build

## 🛠️ VS Code Kullanımı

1. VS Code'da `web-site/Project` klasörünü açın
2. Terminal'de `npm run dev` komutunu çalıştırın
3. Veya `Ctrl+Shift+B` ile build task'ı çalıştırın
