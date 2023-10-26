<template>
    <div class="signup-page">
      <div class="signup-content">
        <div class="signup-title">Create your account</div>
        <div class="signup-divider">
          <div class="signup-subtitle">Unlock all Features!</div>
        </div>
        <form @submit="signup">
            <div class="input-wrapper">
                <input type="text" id="username" v-model="username" placeholder="Username" class="input-text">
                <!-- <img src="../assets/images/envelope.svg" alt="" class="input-icon" /> -->
            </div>
            <div class="input-wrapper">
                <input type="text" id="username" v-model="username" placeholder="Email" class="input-text">
                <img src="../assets/images/envelope.svg" alt="" class="input-icon" />
            </div>
            <div class="input-wrapper">
                <input type="text" id="username" v-model="password" placeholder="Password" class="input-text">
                <img src="../assets/images/shield-slash.svg" alt="" class="input-icon" />
            </div>
            <div class="input-wrapper">
                <input type="text" id="username" v-model="password" placeholder="Confirm Password" class="input-text">
                <img src="../assets/images/shield-slash.svg" alt="" class="input-icon" />
            </div>

          <button class="signup-button" type="submit">
            <div class="signup-button__text">Sign up</div>
          </button>
        </form>
        <span class="signup-text">You have account?<span class="signup-link">Login now</span></span>
      </div>
      <div class="signup-image">
        <div class="outer-circle">
          <div class="inner-cicle">
            <img src='../assets/images/signup_image.svg' alt="" />
          </div>
        </div>
        <div class="signup-text1">Connect with any device.</div>
        <div class="signup-text2">Everything you need is an internet connection.</div>
      </div>
    </div>
  </template>
  
  <script>
  export const SignupPage = {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      signup() {
        console.log("Попытка входа:", this.username, this.password);
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .signup-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .signup-divider {
    display: flex;
    justify-content: baseline;
    align-items: center;
    flex-direction: row;
    margin-top: 25px;
    text-align: left;
  }
  
  .signup-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    text-align: center;
    align-items: center;
    background: #F5F8FF;
    height: 100vh;
  }
  
  .signup-title {
    color: #09090B;
    font-size: 40px;
    font-style: normal;
    font-weight: bold;
    line-height: 60%;
    font-family: 'Monseratt', sans-serif;
  }
  
  .signup-subtitle {
    font-family: 'Monseratt', sans-serif;
    color: #71717A;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-right: 36px;
    margin-left: 36px;
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
  
  .signup-link  {
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
  
  .signup-divider__line {
    background: #71717A;
    width: 120px;
    height: 1px;
  }
  
  .signup-image {
    height: 100%;
    width: 50%;
    background: #6172F3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .signup-form {
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
  
  .signup-button {
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
  
  .signup-button__text {
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
  
  .signup-text1,
  .signup-text2 {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
  }
  
  .signup-text1 {
    color: #E0EAFF;
    font-size: 20px;
    font-weight: 700;
    line-height: 120%;
  }
  
  .signup-text2 {
    color: rgba(224, 234, 255, 0.75);
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
  }
  
  </style>
  