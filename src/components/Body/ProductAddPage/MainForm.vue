<template>
    <div class="inpt-wrap">
        <div class="inpt-el">
            <div class="field">
                <label for="sku">SKU</label>
                <input type="text" placeholder="sku" id="sku" v-model="formData.SKU" required>
            </div>
            <div class="field">
                <label for="name">NAME</label>
                <input type="text" placeholder="Name" id="name" v-model="formData.name" required>
            </div>
            <div class="field">
                <label for="prive">PRICE ($)</label>
                <input type="number" placeholder="price" id="price" v-model="formData.price" required>
            </div>
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