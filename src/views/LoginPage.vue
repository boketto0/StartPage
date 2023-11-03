<template>
  <div class="page__wrapper">
    <div class="login-content">
      <div class="login-content__wrapper">
        <TitleComponent titleText="Login to your Account" />
        <div class="login-divider">
          <div class="login-divider__line"></div>
          <SubtitleComponent subtitleText="with email" />
          <div class="login-divider__line"></div>
        </div>
        <form @submit="signup">
          <InputForm
            :inputCount="2"
            :inputType="'text'"
            :inputPlaceholders="['Email', 'Password']"
            :inputValues="['', '']"
            :inputIconsLeft="['', '']"
            :inputIconsRight="[ '', '']"
          />
        </form>
        <a href="/otp">
          <ButtonComponent text="Log in"/>
        </a>
      <span class="login-text">Don’t have account? <a href="/signup" class="login-link">Create an account</a></span>
    </div>
    </div>
    <ImageWrapperComponent
    imageSrc="../assets/images/login_image.svg"
    title="Connect with any device."
    subtitle="Everything you need is an internet connection."
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonComponent from '../components/ButtonComponent.vue';;
import TitleComponent from '../components/TitleComponent.vue'
import SubtitleComponent from '../components/SubtitleComponent.vue'
import InputForm from '../components/InputForm.vue'
import ImageWrapperComponent from '../components/ImageWrapperComponent.vue'
</script>

<style scoped lang="scss">
.page__wrapper {
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
  width: 477px;
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
  text-decoration: none;
}

.login-divider__line {
  background: #71717A;
  width: 120px;
  height: 1px;
}

</style>
