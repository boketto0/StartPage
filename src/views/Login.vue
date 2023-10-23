<template>
    <div class="wrapper">
      <div class="login-content">
        <h2>Login to your Account</h2>
        <h5>with email</h5>
        <form @submit="login">
          <label for="username">Email</label>
          <input type="text" id="username" v-model="username" />
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
          <button type="submit">Log in</button>
        </form>
      </div>
      <div class="login-image">
        <img src='../assets/images/right_side.svg' alt="Right Side Image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        console.log('Попытка входа:', this.username, this.password);
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 0;
  }
  
  .login-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    text-align: center;
    align-items: center;
  }
  
  .login-image {
    height: 100%;
  }
  
  h2 {
    font-size: 24px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  label {
    font-weight: bold;
  }
  
  input {
    width: 453px;
    height: 64px;
    padding: 5px;
    border: 2px solid rgba(128, 152, 249, 0.50);
    background: rgba(128, 152, 249, 0.10);
    border-radius: 10px;
  }
  
  button {
    background-color: #8098F9;
    margin-top: 25px;
    width: 453px;
    height: 64px;
    border-radius: 10px;;
    border: none;
    cursor: pointer;
  }
  </style>
  