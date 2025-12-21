<template>
  <footer class="main-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <h3 class="footer-title">YARDIM</h3>
          <ul class="footer-links">
            <li><a href="#">Sıkça Sorulan Sorular</a></li>
            <li><a href="#">Sipariş takip</a></li>
            <li><a href="#">Teslimat</a></li>
            <li><a href="#">İade</a></li>
            <li><a href="#">İletişim</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="footer-title">ŞİRKET</h3>
          <ul class="footer-links">
            <li><a href="#">Bershka hakkında</a></li>
            <li><a href="#">Kariyer</a></li>
            <li><a href="#">Sürdürülebilirlik</a></li>
            <li><a href="#">Basın</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="footer-title">ÖDEMELER</h3>
          <ul class="footer-links">
            <li><a href="#">Kartlar</a></li>
            <li><a href="#">Taksit seçenekleri</a></li>
            <li><a href="#">Hediye kartı</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="footer-title">BİZİ TAKİP EDİN</h3>
          <ul class="footer-links">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-left">
          <p class="legal-text">
            <a href="#" class="legal-link">Satın alma şartları ve koşulları</a>
            <span class="separator">+</span>
            <a href="#" class="legal-link">#bershkastyle Şartları ve koşulları</a>
            <span class="separator">+</span>
            <a href="#" class="legal-link">Gizlilik Politikası</a>
            <span class="separator">+</span>
            <a href="#" class="legal-link">Çerezler politikası</a>
          </p>
          <p class="company-info">
            Resmi şirket dataları<br>
            <span class="country-info">Turkey | Türkçe</span>
          </p>
        </div>
        <div class="footer-bottom-right">
          <p class="copyright">© 2025 BERSHKA</p>
          <div class="footer-options">
            <a href="#" class="footer-option-link">Çerez ayarları</a>
            <a href="#" class="footer-option-link">Site haritası</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

.main-footer {
  background-color: #000;
  color: #fff;
  padding: 60px 0 30px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 60px;
}

.footer-title {
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  opacity: 0.8;
}

.footer-links a:hover {
  opacity: 1;
  text-decoration: underline;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 30px;
  border-top: 1px solid #333;
  font-size: 12px;
}

.legal-text {
  margin-bottom: 15px;
  line-height: 1.6;
}

.legal-link {
  color: #fff;
  text-decoration: none;
  opacity: 0.8;
}

.legal-link:hover {
  opacity: 1;
  text-decoration: underline;
}

.separator {
  margin: 0 8px;
  opacity: 0.5;
}

.company-info {
  opacity: 0.6;
  line-height: 1.6;
}

.country-info {
  font-weight: bold;
}

.copyright {
  opacity: 0.6;
  margin-bottom: 10px;
}

.footer-options {
  display: flex;
  gap: 20px;
}

.footer-option-link {
  color: #fff;
  text-decoration: none;
  opacity: 0.8;
}

.footer-option-link:hover {
  opacity: 1;
  text-decoration: underline;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>

