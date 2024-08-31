<template>
    <div v-show="store.state.currentType === 'Furniture'" class="select-option" id="Furniture">
        <div class="inpt-el">
            <label for="height">Height (CM)</label>
            <label for="height">Width (CM)</label>
            <label for="height">Lenght (CM)</label>
        </div>
        <div class="inpt-el">
            <input type="number" v-model="formData.attributes.height" placeholder="Height" id="height" required>
            <input type="number" v-model="formData.attributes.width" placeholder="Width" id="width" required>
            <input type="number" v-model="formData.attributes.length" placeholder="Length" id="length" required>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

import { useStore } from 'vuex';

const store = useStore();
const formData = computed(() => store.state.formData);
</script>

<style lang="scss" scoped>
@import '../../../styles/mixins.scss';
@include select-class;
@include inpt-el-class;
@include input-labels;
</style>