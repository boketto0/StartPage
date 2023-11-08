<template>
  <button class="custom-button">
    <span class="button-text">{{ text }}</span>
  </button>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    text: String,
  },
};
</script>

<style scoped>
.custom-button {
  background-color: #8098F9;
  width: 453px;
  height: 64px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  align-self: center;
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
