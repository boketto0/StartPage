<template>
  <div class="login-page">
    <div class="login-content">
      <div class="login-content__wrapper">
      <div class="login-title">Login to your Account</div>
      <div class="login-divider">
        <div class="login-divider__line"></div>
        <div class="login-subtitle">with email</div>
        <div class="login-divider__line"></div>
      </div>
      <form @submit="login">
        <div class="input-wrapper">
          <input type="text" id="username" v-model="username" placeholder="Email" class="input-text">
          <img src="../assets/images/envelope.svg" alt="" class="input-icon" />
        </div>
        <div class="input-wrapper">
          <div class="input-icon">
            <img src='../assets/images/shield-slash.svg' alt="" />
          </div>
          <input type="password" id="password" v-model="password" placeholder="Password" class="input-text" />
        </div>
        <ButtonVue @onClick="login" text="Log in"/>
      </form>
      <span class="login-text">Don’t have account? <router-link to="/signup" class="login-link">Create an account</router-link></span>
    </div>
    </div>
    <div class="login-image">
      <div class="outer-circle">
        <div class="inner-cicle">
          <img src='../assets/images/login_image.svg' alt="" />
        </div>
      </div>
      <div class="login-text1">Connect with any device.</div>
      <div class="login-text2">Everything you need is an internet connection.</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonVue from '../components/Button.vue';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const login = (event: MouseEvent) => {
  console.log('Попытка регистрации:', username.value, email.value, password.value, confirmPassword.value);
};
</script>

<style scoped lang="scss">
.login-page {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.login-divider {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 25px;
}

.login-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  text-align: center;
  align-items: center;
  background: #F5F8FF;
  height: 100vh;
}

.login-content__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: center;
}

.login-title {
  color: #09090B;
  font-size: 40px;
  font-style: normal;
  font-weight: bold;
  line-height: 60%;
  font-family: 'Monseratt', sans-serif;
}

.login-subtitle {
  font-family: 'Monseratt', sans-serif;
  color: #71717A;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-right: 36px;
  margin-left: 36px;
}

.login-text {
  color: #71717A;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 20px;
}

.login-link  {
  color: #8098F9;
  font-family: 'Montserrat', sans-serif;
  line-height: 150%; 
  font-size: 16px;
  font-weight: 700;
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

.login-divider__line {
  background: #71717A;
  width: 120px;
  height: 1px;
}

.login-image {
  height: 100%;
  width: 50%;
  background: #6172F3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login-form {
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

.login-button {
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

.login-button__text {
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

.login-text1,
.login-text2 {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.login-text1 {
  color: #E0EAFF;
  font-size: 20px;
  font-weight: 700;
  line-height: 120%;
}

.login-text2 {
  color: rgba(224, 234, 255, 0.75);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
}

</style>
