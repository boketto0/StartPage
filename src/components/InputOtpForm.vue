<template>
    <div class="otp-code">
        <input
            v-for="index in 6"
            :key="index"
            v-model="otpCode[index - 1]"
            class="otp-code-input"
            maxlength="1"
            @input="handleInput(index - 1)"
            ref="otpInput"
        />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const otpCode = ref(["", "", "", "", "", ""]);

        const handleInput = (index) => {
            if (index < 5 && otpCode.value[index].length === 1) {
                const nextInput = $refs.otpInput[index + 1];
            if (nextInput) {
                nextInput.focus();
        }
        }
    };

    return {
        otpCode,
        handleInput,
    };
    },
};
</script>

<style scoped>
.otp-code-input {
    width: 64px;
    height: 64px;
    margin: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid rgba(128, 152, 249, 0.50);
    background: rgba(128, 152, 249, 0.10);
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    position: relative;
    margin-bottom: 10px;
}

.otp-code-input::before {
    content: "-";
    color: rgba(45, 49, 166, 0.20);
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    display: inline-block;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
}
</style>
    