<template>
    <div class="Header-container">
        <h1>{{route.name}}</h1>
        <ActionButtons/>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

import ActionButtons from './ActionButtons.vue';

const route = useRoute()
</script>

<style lang="scss" scoped>
@import '../../styles/color.scss';
@import '../../styles/mixins.scss';
.Header-container{
    width: 100%;
    height: 90px;
    padding: 30px;
    border-bottom: $gray-white;

    @include flex-between;
    align-items: baseline;

    h1{
        @include title;
    }
}
</style>