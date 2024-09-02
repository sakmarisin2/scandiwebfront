<template>
    <div class="type-wrap">
        <label for="productType">Type Switcher</label> 
        <select name="type" id="productType" @change="SetType">
            <option value="DVD">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
        </select>           
    </div>
</template>

<script setup>
import { SetType } from '../../../js/methods/methods';
</script>

<style lang="scss" scoped>
@import '../../../styles/mixins.scss';
@include input-labels;
.type-wrap{
    margin-top: 5vh;
    display: flex;
}
</style>