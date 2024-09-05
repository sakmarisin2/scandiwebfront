<template>
    <div v-show="store.state.currentType === 'DVD'" class="select-option" id="DVD">
        <label for="size">Size (MB)</label>
        <input type="number" v-model="formData.attributes.size" placeholder="Size" id="size" required> 
    </div>
</template>

<script setup>
import { computed } from 'vue';

import { useStore } from 'vuex';

const store = useStore();
const formData = computed(() => store.state.formData);
</script>

<style lang="scss" scoped>
@include select-class;
@include input-labels;
</style>