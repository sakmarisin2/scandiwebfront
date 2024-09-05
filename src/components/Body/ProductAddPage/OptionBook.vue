<template>
    <div v-show="store.state.currentType === 'Book'" class="select-option" id="Book">
        <label for="Weight">Weight (KG)</label>
        <input type="number" v-model="formData.attributes.weight" placeholder="Weight" id="weight" required> 
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