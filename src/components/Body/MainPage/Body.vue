<template>
    <div class="body-container">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
</script>

<style lang="scss" scoped>
.body-container{
    width: 100%;
    height: calc(100vh - 100px);

    display: flex;    
    flex-wrap:wrap;

    padding: 40px;
    overflow:auto;
}
</style>