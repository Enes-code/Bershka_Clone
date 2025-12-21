<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>MÜŞTERİ HİZMETLERİ</h4>
        <p>Sıkça Sorulan Sorular</p>
        <p>İade ve Değişim</p>
        <p>Teslimat Bilgileri</p>
        <p>Beden Rehberi</p>
      </div>
      <div class="footer-section">
        <h4>BERSHKA HAKKINDA</h4>
        <p>Hakkımızda</p>
        <p>Kariyer</p>
        <p>Sürdürülebilirlik</p>
        <p>Basın</p>
      </div>
      <div class="footer-section">
        <h4>MAĞAZALARIMIZ</h4>
        <p>Mağaza Bulucu</p>
        <p>İstanbul - İstinyePark</p>
        <p>Ankara - Armada</p>
        <p>İletişim</p>
      </div>
      <div class="footer-section">
        <h4>BİZİ TAKİP EDİN</h4>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>TikTok</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 BERSHKA. Tüm hakları saklıdır.</p>
      <p>Bershka - Trendy ve uygun fiyatlı giyim için moda destinasyonunuz</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  background: #f5f5f5;
  border-top: 1px solid #eee;
  margin-top: 60px;
}

.footer-content {
  display: flex;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 20px;
}

.footer-section {
  flex: 1;
}

.footer-section h4 {
  margin-bottom: 15px;
  color: #000;
  font-weight: 700;
  font-size: 14px;
}

.footer-section p {
  margin: 8px 0;
  cursor: pointer;
  color: #666;
  font-size: 13px;
}

.footer-section p:hover {
  color: #000;
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  font-size: 12px;
  color: #666;
  padding-bottom: 20px;
}

.footer-bottom p {
  margin-bottom: 10px;
}

.footer-bottom p:last-child {
  font-size: 11px;
}
</style>

