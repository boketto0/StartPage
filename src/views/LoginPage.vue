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
          <img src="../assets/images/envelope.svg" alt="" class="input-icon" />
        </div>
        <div class="input-wrapper">
          <div class="input-icon">
            <img src='../assets/images/shield-slash.svg' alt="" />
          </div>
          <input type="password" id="password" v-model="password" placeholder="Password" class="input-text" />
        </div>
        <button type="submit">
          <div class="button-text">Log in</div>
        </button>
      </form>
      <span class="text1">Don’t have account? <span class="text2">Create an account</span></span>
    </div>
    <div class="login-image">
      <div></div>
    </div>
  </div>
</template>

<script>
export const LoginPage = {
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
  font-weight: bold;
  line-height: 60%;
  font-family: 'Monseratt', sans-serif;
}

.subtitle {
  font-family: 'Monseratt', sans-serif;
  color: #71717A;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-right: 36px;
  margin-left: 36px;
}

.text1 {
  color: #71717A;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 20px;
}

.text2 {
  color: #8098F9;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
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

.input-icon {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.input-icon img {
  max-height: 24px;
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
}

button {
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

.button-text {
  color: #FFF;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
</style>
