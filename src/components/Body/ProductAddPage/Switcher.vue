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
.type-wrap{
    margin-top: 10vh;
    display: flex;
    label{
        color: white;
        white-space: nowrap;
    }
    input{
        width: 100%;
        height: 30px;
    }
}
</style>