<template>
    <div class="text-wrap">
        <p v-show="store.state.currentType === 'DVD'">Please, provide size</p>
        <p v-show="store.state.currentType === 'Book'" >Please, provide weight</p>
        <p v-show="store.state.currentType === 'Furniture'" >Please, provide dimensions</p>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
</script>

<style lang="scss" scoped>
.text-wrap{
    margin-top: 20px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}
</style>