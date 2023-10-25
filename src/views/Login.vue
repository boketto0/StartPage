<template>
    <div class="wrapper">
      <div class="login-content">
        <div class="title">Login to your Account</div>
        <div class="line-wrapper">
          <div class="line"></div>
          <div class="subtitle">with email</div>
          <div class="line"></div>
        </div>
        <form @submit="login">
          <div class="input-wrapper">
            <input type="text" id="username" v-model="username" placeholder="Email" class="input-text">
          </div>
          <div class="input-wrapper">
            <!-- <img src='../assets/images/shield-slash.svg' alt="" /> -->
            <input type="password" id="password" v-model="password" placeholder="Password" class="input-text" />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
      <div class="login-image">
        <!-- <img src='../assets/images/right_side.svg' alt="Right Side Image" /> -->
        <div>sdfghjkl</div>
      </div>
    </div>
  </template>
  
  <script>
  export const Component = {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      login() {
        console.log("Попытка входа:", this.username, this.password);
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: 'Inter', sans-serif;
  }
  
  .line-wrapper {
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
  
  .title {
    color: #09090B;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  
  .subtitle {
    color: #71717A;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-right: 36px;
    margin-left: 36px;
  }

  .input-text {
    color: rgba(45, 49, 166, 0.20);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  
  .line {
    background: #71717A;
    width: 120px;
    height: 1px;
  }
  
  .login-image {
    height: 100%;
    width: 500px;
    background: #6172F3;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  label {
    font-weight: 400;
    color: rgba(45, 49, 166, 0.20);
    display: flex;
    align-items: center;
  }
  
  label img {
    margin-right: 10px;
  }
  
  input {
    width: 453px;
    height: 64px;
    border: 2px solid rgba(128, 152, 249, 0.50);
    background: rgba(128, 152, 249, 0.10);
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  
  button {
    background-color: #8098F9;
    margin-top: 25px;
    width: 453px;
    height: 64px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  