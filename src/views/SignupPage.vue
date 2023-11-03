<template>
  <div class="page__wrapper">
    <div class="signup-content">
      <div class="signup-content__wrapper">
        <TitleComponent titleText="Create your account" />
        <SubtitleComponent subtitleText="Unlock all Features!" />
        <form @submit="signup">
          <InputForm
            :inputCount="4"
            :inputType="'text'"
            :inputPlaceholders="['Username', 'Email', 'Password', 'Confirm Password']"
            :inputValues="['', '', '', '']"
            :inputIconsLeft="['', '', '', '']"
            :inputIconsRight="[ '', '', '', '']"
          />
        </form>
        <CheckboxComponent label="Accept terms and conditions"/>
        <a href="/otp">
          <ButtonComponent text="Sign up"/>
        </a>
        <span class="signup-text">You have an account?<a href="/" class="signup-link">Login now</a></span>
      </div>
    </div>
    <ImageWrapperComponent
      imageSrc="../assets/images/signup_image.svg"
      title="Join us!"
      subtitle="Just go through the boring process of creating an account."
    />
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '../components/ButtonComponent.vue';
import CheckboxComponent from '../components/CheckboxComponent.vue';
import TitleComponent from '../components/TitleComponent.vue'
import SubtitleComponent from '../components/SubtitleComponent.vue'
import InputForm from '../components/InputForm.vue'
import ImageWrapperComponent from '../components/ImageWrapperComponent.vue'
</script>

<style scoped>
.page__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.signup-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  align-items: center;
  background: #F5F8FF;
  height: 100vh;
}
.signup-content__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 477px;
}
.signup-text {
  color: #71717A;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 20px;
}
.signup-link {
  color: #8098F9;
  font-family: 'Montserrat', sans-serif;
  line-height: 150%;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
}
</style>