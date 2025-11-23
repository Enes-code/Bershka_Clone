<template>
  <div class="login-signup-page">
    <div class="component-header">
      <h2>{{ isLogin ? 'Giriş Yap' : 'Kayıt Ol' }}</h2>
      <p>{{ isLogin ? 'Bershka hesabınıza giriş yapın' : 'Yeni Bershka hesabı oluşturun' }}</p>
    </div>
    <div class="auth-container">
      <div class="auth-form">
        <h3>{{ isLogin ? 'GİRİŞ YAPIN' : 'HESAP OLUŞTURUN' }}</h3>
        <Input
          v-if="!isLogin"
          type="text"
          placeholder="Ad Soyad"
          v-model="formData.name"
        />
        <Input
          type="email"
          placeholder="E-posta adresiniz"
          v-model="formData.email"
        />
        <Input
          type="password"
          :placeholder="isLogin ? 'Şifreniz' : 'Şifre oluşturun'"
          v-model="formData.password"
        />
        <div v-if="!isLogin" class="terms-checkbox">
          <label>
            <input type="checkbox" v-model="formData.agreeTerms" />
            <a href="#">Kullanım koşullarını</a> okudum ve kabul ediyorum
          </label>
        </div>
        <Button @click="handleSubmit">
          {{ isLogin ? 'GİRİŞ YAP' : 'KAYIT OL' }}
        </Button>
        <p class="switch-text" @click="toggleMode">
          {{ isLogin ? 'Hesabınız yok mu? Kayıt Olun' : 'Zaten üye misiniz? Giriş Yapın' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../components/atoms/Input.vue'
import Button from '../components/atoms/Button.vue'

export default {
  name: 'LoginSignup',
  components: {
    Input,
    Button
  },
  data() {
    return {
      isLogin: true,
      formData: {
        name: '',
        email: '',
        password: '',
        agreeTerms: false
      }
    }
  },
  methods: {
    toggleMode() {
      this.isLogin = !this.isLogin
      this.formData = {
        name: '',
        email: '',
        password: '',
        agreeTerms: false
      }
    },
    handleSubmit() {
      if (!this.isLogin && !this.formData.agreeTerms) {
        alert('Lütfen kullanım koşullarını kabul edin')
        return
      }
      const message = this.isLogin 
        ? 'Giriş yapılıyor: ' + this.formData.email
        : 'Kayıt olunuyor: ' + this.formData.name
      alert(message)
    }
  }
}
</script>

<style scoped>
.login-signup-page {
  padding: 20px 0;
}

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

.switch-text {
  color: var(--accent-primary);
  text-decoration: underline;
  cursor: pointer;
  margin-top: 15px;
  text-align: center;
}

.switch-text:hover {
  text-decoration: none;
}
</style>

