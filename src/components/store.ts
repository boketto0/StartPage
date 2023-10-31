import { createPinia } from 'pinia';

export const pinia = createPinia();

export const useAuthStore = pinia.defineStore('auth', {
  state: () => ({
    username: '',
    password: '',
    email: '',
  }),
  actions: {
    setUsername(username: string) {
      this.username = username;
    },
    setPassword(password: string) {
      this.password = password;
    },
    setEmail(email: string) {
      this.email = email;
    },
  },
});