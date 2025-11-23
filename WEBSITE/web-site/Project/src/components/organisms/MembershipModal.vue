<template>
  <div>
    <div class="component-header">
      <h2>Bershka Club Üyelik</h2>
      <p>Özel avantajlar ve ödüller</p>
    </div>
    <div class="auth-container">
      <div class="membership-content">
        <div class="membership-image">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&auto=format&fit=crop" 
            alt="Bershka Club"
            @error="handleImageError"
          />
        </div>
        <h3>BERSHKA CLUB AVANTAJLARI</h3>
        <div class="benefits-list">
          <p>✅ Yeni üyelere özel %15 indirim</p>
          <p>✅ Özel kampanyalara erken erişim</p>
          <p>✅ Doğum gününüzde özel hediye çeki</p>
          <p>✅ Özel etkinlik davetleri</p>
          <p>✅ Tüm siparişlerde ücretsiz kargo</p>
        </div>
        <input 
          type="email" 
          placeholder="E-posta adresinizi girin" 
          class="membership-input"
        />
        <button class="btn">CLUBA KATIL</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MembershipModal',
  methods: {
    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/200x200/000000/FFFFFF?text=BERSHKA+CLUB'
    }
  }
}
</script>

<style scoped>
.component-header {
  margin-top: 0;
  margin-bottom: 30px;
  text-align: center;
}

.component-header h2 {
  font-size: 32px;
  color: var(--accent-primary);
  margin-bottom: 10px;
}

.auth-container {
  background: var(--panel-light);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  max-width: 500px;
  margin: 0 auto;
  border-radius: 4px;
}

.membership-content {
  padding: 40px;
  text-align: center;
}

.membership-image {
  margin-bottom: 30px;
}

.membership-image img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
  display: block;
}

.membership-content h3 {
  font-size: 28px;
  margin-bottom: 30px;
  color: var(--accent-primary);
}

.benefits-list {
  text-align: left;
  max-width: 400px;
  margin: 0 auto;
  color: var(--accent-secondary);
}

.benefits-list p {
  margin: 15px 0;
  font-size: 16px;
}

.membership-input {
  background: var(--bg-light);
  color: var(--accent-secondary);
  border: 1px solid #ddd;
  border-radius: 0;
  padding: 12px 15px;
  font-size: 14px;
  width: 100%;
  max-width: 400px;
  margin-top: 30px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: Arial, Helvetica, sans-serif;
}

.membership-input:focus {
  border-color: var(--accent-primary);
  outline: none;
  background: white;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.btn {
  background: var(--accent-primary);
  color: white;
  border: none;
  padding: 12px;
  width: 100%;
  max-width: 400px;
  cursor: pointer;
  margin: 20px auto 0;
  border-radius: 0;
  font-weight: bold;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: block;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

.btn:hover {
  background: #333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style>

