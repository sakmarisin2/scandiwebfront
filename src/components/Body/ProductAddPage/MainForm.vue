<template>
    <div class="inpt-wrap">
        <div class="inpt-el">
            <label for="sku">SKU</label>
            <label for="name">NAME</label>
            <label for="prive">PRICE ($)</label>
        </div>
        <div class="inpt-el">
            <input type="text" placeholder="sku" id="sku" v-model="formData.SKU" required>
            <input type="text" placeholder="Name" id="name" v-model="formData.name" required>
            <input type="number" placeholder="price" id="price" v-model="formData.price" required>
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

.inpt-wrap{
    @include flex-between;
    @include inpt-el-class;
    @include input-labels;
}
</style>