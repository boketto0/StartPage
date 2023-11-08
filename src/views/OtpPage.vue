<template>
    <div class="page__wrapper">
        <div class="otp-content">
            <div class="otp-content__wrapper">
                <div class="otp-list">
                    <TitleComponent titleText="Enter OTP"/>
                    <span>
                        <SubtitleComponent subtitleText="Sent OTP on">
                            <span class="otp-link">email</span>
                        </SubtitleComponent>
                    </span>
                    <span class="otp-email__link">Change email</span>
                </div>
                <InputOtpForm/>
                <ButtonComponent text="Submit" />
            </div>
        </div>
        <ImageWrapperComponent
            imageSrc="../assets/images/otp_image.svg"
            title="It's just OTP verification"
            subtitle="You are one step away from recovering your password."
        />
    </div>
</template>

<script setup lang="ts">
import ButtonComponent from '../components/ButtonComponent.vue';
import InputOtpForm from '../components/InputOtpForm.vue'
import TitleComponent from '../components/TitleComponent.vue'
import SubtitleComponent from '../components/SubtitleComponent.vue'
import ImageWrapperComponent from '../components/ImageWrapperComponent.vue'
</script>

<style scoped>
.page__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.otp-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    align-items: center;
    background: #F5F8FF;
    height: 100vh;
}

.otp-content__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.otp-email__link {
    color: #8098F9;
    font-family: 'Monseratt', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    cursor: pointer;
}

.otp-list {
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    margin-right: 120px;
    align-self: first baseline;
}
.otp-link {
    color: #8098F9;
    font-family: 'Montserrat', sans-serif;
    line-height: 150%;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
}
</style>
  