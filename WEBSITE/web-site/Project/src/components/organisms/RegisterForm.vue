<template>
  <div>
    <div class="component-header">
      <h2>Kayıt Ol</h2>
      <p>Yeni Bershka hesabı oluşturun</p>
    </div>
    <div class="auth-container">
      <div class="auth-form">
        <h3>HESAP OLUŞTURUN</h3>
        <input 
          type="text" 
          placeholder="Ad Soyad" 
          v-model="formData.name"
          class="auth-input"
        />
        <input 
          type="email" 
          placeholder="E-posta adresiniz" 
          v-model="formData.email"
          class="auth-input"
        />
        <input 
          type="password" 
          placeholder="Şifre oluşturun" 
          v-model="formData.password"
          class="auth-input"
        />
        <div class="terms-checkbox">
          <label>
            <input type="checkbox" v-model="formData.agreeTerms" />
            <a href="#" class="switch-text">Kullanım koşullarını</a> okudum ve kabul ediyorum
          </label>
        </div>
        <button class="btn" @click="handleSubmit">KAYIT OL</button>
        <p class="switch-text" @click="$emit('show-component', 'giriş')">
          Zaten üye misiniz? Giriş Yapın
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
        agreeTerms: false
      }
    }
  },
  methods: {
    handleSubmit() {
      if (!this.formData.agreeTerms) {
        alert('Lütfen kullanım koşullarını kabul edin')
        return
      }
      alert('Kayıt olunuyor: ' + this.formData.name)
    }
  },
  emits: ['show-component']
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

.component-header p {
  color: var(--accent-secondary);
}

.auth-container {
  background: var(--panel-light);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  max-width: 500px;
  margin: 0 auto;
  border-radius: 4px;
  transition: box-shadow 0.3s;
}

.auth-container:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 40px;
}

.auth-form h3 {
  color: var(--accent-primary);
  margin-bottom: 20px;
  font-size: 24px;
}

.auth-input {
  background: var(--bg-light);
  color: var(--accent-secondary);
  border: 1px solid #ddd;
  border-radius: 0;
  padding: 12px 15px;
  font-size: 14px;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: Arial, Helvetica, sans-serif;
}

.auth-input:focus {
  border-color: var(--accent-primary);
  outline: none;
  background: white;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.terms-checkbox {
  margin: 15px 0;
}

.terms-checkbox label {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--accent-secondary);
}

.terms-checkbox input {
  margin-right: 8px;
}

.btn {
  background: var(--accent-primary);
  color: white;
  border: none;
  padding: 12px;
  width: 100%;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 0;
  font-weight: bold;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
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

.switch-text {
  color: var(--accent-primary);
  text-decoration: underline;
  cursor: pointer;
  margin-top: 15px;
  text-align: center;
  transition: all 0.3s;
}

.switch-text:hover {
  text-decoration: none;
  transform: scale(1.05);
}
</style>

