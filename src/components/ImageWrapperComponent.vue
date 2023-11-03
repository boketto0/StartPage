<template>
    <div class="image__wrapper">
        <div class="outer-circle">
            <div class="inner-circle">
                <img class="image" src="imageSrc" alt="Image block" />
            </div>
        </div>
        <span class="image__title">{{ title }}</span>
        <span class="image__subtitle">{{ subtitle }}</span>
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: String,
        title: String,
        subtitle: String,
    },
};
</script>
    
<style scoped>
.image__wrapper {
    height: 100%;
    width: 50%;
    background: #6172F3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.image {
    margin-left: 54px;
    margin-top: 54px;
}
.outer-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 606px;
    height: 606px;
    flex-shrink: 0;
    border-radius: 606px;
    background: linear-gradient(163deg, rgba(68, 76, 231, 0.16) 6.85%, rgba(0, 0, 0, 0.00) 89.34%),
    radial-gradient(50% 50% at 50% 50%, rgba(68, 76, 231, 0.16) 0%, rgba(68, 76, 231, 0.06) 100%);
}
.inner-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 528px;
    height: 528px;
    border-radius: 528px;
    background: linear-gradient(174deg, rgba(164, 188, 253, 0.20) 4.83%, rgba(68, 76, 231, 0.16) 91.13%),
    radial-gradient(50% 50% at 50% 50%, rgba(68, 76, 231, 0.16) 0%, rgba(68, 76, 231, 0.06) 100%);
}
.signup-title,
.signup-subtitle {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
}
.image__title {
    color: #E0EAFF;
    font-size: 20px;
    font-weight: 700;
    line-height: 120%;
}
.image__subtitle {
    color: rgba(224, 234, 255, 0.75);
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
}
</style>