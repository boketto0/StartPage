<template>
    <div class="subtitle-component">
        <h1>{{ subtitleText }}</h1>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    subtitleText: String,
});
</script>

<style scoped>

.subtitle-component {
    font-family: 'Montserrat', sans-serif;
    color: #71717A;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    align-self: baseline;
    margin-top: -32px;
    margin-bottom: 24px;
}

</style>
