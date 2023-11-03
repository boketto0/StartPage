<template>
    <div class="title-component">
        <h1>{{ titleText }}</h1>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    titleText: String,
});
</script>

<style scoped lang="scss">

.title-component {
    color: #09090B;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    font-family: 'Monseratt', sans-serif;
    align-self: baseline;
}

</style>
