<template>
    <div class="otp-page">
      <div class="otp-content">
        <div class="otp-title">Enter OTP</div>
        <div class="otp-divider">
          <div class="otp-subtitle">Sent OTP on <span class="otp-link">{{ authStore.email }}</span></div>
        </div>
        <div class="otp-email__link">Change email</div>
        <form @submit="otp">
          <div class="otp-code">
            <input type="text" v-model="code" maxlength="1" class="otp-code-input" />
            <input type="text" v-model="code" maxlength="1" class="otp-code-input" />
            <input type="text" v-model="code" maxlength="1" class="otp-code-input" />
            <input type="text" v-model="code" maxlength="1" class="otp-code-input" />
            <input type="text" v-model="code" maxlength="1" class="otp-code-input" />
            <input type="text" v-model="code" maxlength="1" class="otp-code-input" />
          </div>
          <Button @click="otp" text="Submit"/>
        </form>
      </div>
      <div class="otp-image">
        <div class="outer-circle">
          <div class="inner-circle">
            <img src='../assets/images/otp_image.svg' alt="" />
          </div>
        </div>
        <div class="otp-text1">It's just OTP verification</div>
        <div class="otp-text2">You are one step away from recovering your password.</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Button from '../components/Button.vue';
  import { useAuthStore } from '../components/store.ts';
  import { useRoute } from 'vue-router'; // Импорт для использования маршрута
  
  const authStore = useAuthStore();
  const code = ref('');
  
  const otp = () => {
    console.log('Попытка регистрации:', authStore.email, code.value);
    const route = useRoute(); // Использование маршрута
    if (route.name === 'otp') {
      // Действия для маршрута 'otp'
    }
  };
  </script>

  <style scoped lang="scss">
  .otp-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .otp-divider {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 25px;
  }
  
  .otp-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    text-align: center;
    align-items: center;
    background: #F5F8FF;
    height: 100vh;
  }
  
  .otp-title {
    color: #09090B;
    font-size: 40px;
    font-style: normal;
    font-weight: bold;
    line-height: 60%;
    font-family: 'Monseratt', sans-serif;
  }

  .otp-email__link {
    color: #8098F9;
    font-family: 'Monseratt', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
  
  .otp-subtitle {
    font-family: 'Monseratt', sans-serif;
    color: #71717A;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-right: 36px;
    margin-left: 36px;
  }
  
  .otp-text {
    color: #71717A;
    text-align: center;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 20px;
  }
  
  .otp-link  {
    color: #8098F9;
    font-family: 'Montserrat', sans-serif;
    line-height: 150%; 
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }
  
  .input-text {
    color: rgba(45, 49, 166, 0.20);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
    padding-left: 48px;
  }
  
  .otp-divider__line {
    background: #71717A;
    width: 120px;
    height: 1px;
  }
  
  .otp-image {
    height: 100%;
    width: 50%;
    background: #6172F3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .otp-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .input-icon {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  
  input {
    width: 400px;
    height: 64px;
    border: 2px solid rgba(128, 152, 249, 0.50);
    background: rgba(128, 152, 249, 0.10);
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: baseline;
    margin-bottom: 10px;
  }
  
  .otp-button {
    background-color: #8098F9;
    margin-top: 25px;
    width: 453px;
    height: 64px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    align-self: center;
  }
  
  .input-wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .input-icon {
    position: absolute;
    left: 10px; 
    top: 50%;
    transform: translateY(-50%);
    max-height: 24px;
  }
  
  .otp-button__text {
    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
  
  .outer-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 606px;
    height: 606px;
    flex-shrink: 0;
    border-radius: 606px;
    background: linear-gradient(163deg, rgba(68, 76, 231, 0.16) 6.85%, rgba(0, 0, 0, 0.00) 89.34%), radial-gradient(50% 50% at 50% 50%, rgba(68, 76, 231, 0.16) 0%, rgba(68, 76, 231, 0.06) 100%);
  }
  
  .inner-cicle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 528px;
    height: 528px;
    border-radius: 528px;
    background: linear-gradient(174deg, rgba(164, 188, 253, 0.20) 4.83%, rgba(68, 76, 231, 0.16) 91.13%), radial-gradient(50% 50% at 50% 50%, rgba(68, 76, 231, 0.16) 0%, rgba(68, 76, 231, 0.06) 100%);
  }
  
  .otp-text1,
  .otp-text2 {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
  }

  .otp-code {
    display: flex;
    gap: 10px;
  }

  .otp-code-input {
    display: flex;
    width: 64px;
    height: 64px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid rgba(128, 152, 249, 0.50);
    background: rgba(128, 152, 249, 0.10);
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  
  .otp-text1 {
    color: #E0EAFF;
    font-size: 20px;
    font-weight: 700;
    line-height: 120%;
  }
  
  .otp-text2 {
    color: rgba(224, 234, 255, 0.75);
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
  }
  
  </style>
  