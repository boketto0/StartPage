import { createPinia, defineStore } from 'pinia';

const pinia = createPinia();

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    username: '',
    password: '',
    email: '',
  }),
  actions: {
    setUsername(username) {
      this.username = username;
    },
    setPassword(password) {
      this.password = password;
    },
    setEmail(email) {
      this.email = email;
    },
  },
});

export { pinia };
