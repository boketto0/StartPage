<template>
    <label class="checkbox">
      <input type="checkbox" v-model="isChecked" class="checkbox-input" />
      <span :class="checkboxClasses"></span>
      <span class="label">{{ label }}</span>
    </label>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      disabled: Boolean,
    },
    data() {
      return {
        isChecked: false,
      };
    },
    computed: {
      checkboxClasses() {
        return {
          checkmark: true,
          "checkmark-disabled": this.disabled,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    align-self: center;
    margin-left: -258px;
  }
  
  .checkbox input {
    display: none;
  }
  
  .checkmark {
    position: relative;
    width: 20px;
    height: 20px;
    border: 1px solid #8098F9;
    border-radius: 2px;
    transition: background-color 0.3s ease;
    margin: 8px;
  }
  
  .checkmark:hover {
    border: 1px solid #007bff;
  }
  
  .checkmark-disabled:hover {
    border: 1px solid #8098F9;
    cursor: not-allowed;
  }
  
  .checkbox input:checked + .checkmark::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  
  .checkbox input:checked ~ .checkmark {
    background-color: #8098F9;
  }
  
  .checkbox input:checked ~ .checkmark-disabled {
    background-color: #8098F9;
  }
  
  .checkbox input:disabled ~ .label {
    color: gray;
    cursor: not-allowed;
  }
  
  .checkbox .label {
    font-size: 14px;
    color: black;
  }
  
  .label:hover {
    cursor: pointer;
  }
  </style>
  