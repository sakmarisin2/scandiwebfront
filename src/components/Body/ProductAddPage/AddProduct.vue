<template>
    <div class="form-container">
        <form action="post" id="product_form" class="form-wrap">
            <div class="inpt-wrap">
                <div class="inpt-el">
                    <label for="sku">SKU</label>
                    <label for="name">NAME</label>
                    <label for="prive">PRICE ($)</label>
                </div>
                <div class="inpt-el">
                    <input type="text" placeholder="sku" id="sku">
                    <input type="text" placeholder="Name" id="name">
                    <input type="number" placeholder="price" id="price">
                </div>
            </div>
            <Switcher/>
            <div v-show="this.$store.state.currentType === 'DVD'" class="select-option" id="DVD">
                <label for="size">Size (MB)</label>
                <input type="number" placeholder="Size" id="size"> 
            </div>
            <div v-show="this.$store.state.currentType === 'Book'" class="select-option" id="Book">
                <label for="Weight">Weight (KG)</label>
                <input type="number" placeholder="Weight" id="weight"> 
            </div>
            <div v-show="this.$store.state.currentType === 'Furniture'" class="select-option" id="Furniture">
                <div class="inpt-el">
                    <label for="height">Height (CM)</label>
                    <label for="height">Width (CM)</label>
                    <label for="height">Lenght (CM)</label>
                </div>
                <div class="inpt-el">
                    <input type="number" placeholder="Height" id="height">
                    <input type="number" placeholder="Width" id="width">
                    <input type="number" placeholder="Length" id="length">
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import Switcher from './Switcher.vue';
</script>

<style lang="scss" scoped>
@import '../../../styles/mixins.scss';

.form-container {
    height: 100%;
    width: 100%;
    padding: 40px;
    .form-wrap{
        height: 100%;
        width: 30%;
        display: flex;
        flex-direction: column;
        .select-option{
            margin-top: 50px;
            width: 100%;
            display: flex;
        }
        .inpt-wrap{
            display: flex;
            justify-content: space-between;
        }
        .inpt-el{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        @include input-labels;
    }
}
</style>