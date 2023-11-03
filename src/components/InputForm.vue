<template>
    <div class="input-form">
        <div v-for="index in inputCount" :key="index" class="input-form__input-wrapper">
            <div class="input__input-inner">
                <label :for="'input-' + index" class="input-form__input-icon-left">
                    <!-- <img :src="inputIconsLeft[index - 1]" alt="Input Icon Left" /> -->
                </label>
                <input
                    :id="'input-' + index"
                    class="input-text input-form__input"
                    :type="inputType"
                    v-model="inputValues[index - 1]"
                    :placeholder="inputPlaceholders[index - 1]"
                />
                <label :for="'input-' + index" class="input-form__input-icon-right">
                    <!-- <img :src="inputIconsRight[index - 1]" alt="Input Icon Right" /> -->
                </label>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
    inputCount: Number,
    inputType: String,
    inputPlaceholders: Array,
    inputValues: Array,
    inputIconsLeft: Array,
    inputIconsRight: Array,
    });
</script>

<style scoped>
.input-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.input-form__input {
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
    display: flex;
    align-items: center;
    justify-content: baseline;
    margin-bottom: 10px;
}
    
.input-form__input-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding-left: 10px;
    padding-right: 20px;
}
    
.input-form__input-icon-left {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    max-height: 24px;
}
    
.input-form__input-icon-right {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    max-height: 24px;
}
</style>
