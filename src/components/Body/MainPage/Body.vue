<template>
    <div class="body-container">
      <div v-if="data && data.data" class="product-wrap"> 
        <div class="product-display">
          <div v-for="product in data.data" :key="product.id">
            <ProductCard :jsonData="product"/>
          </div>
        </div>
      </div>
      <div v-else class="loader-wrap">
        <div class="loader"/>
      </div>
    </div>
</template>

<script setup>
import {
  onMounted,
  ref,
} from 'vue';

import { getProducts } from '../../../js/requests/getProducts';
import ProductCard from './ProductCard.vue';

const data = ref(null);

onMounted(async () => {
  try {
    const result = await getProducts();
    data.value = result;
  } catch (error) {
    throw error;
  }
});
</script>

<style lang="scss" scoped>

.body-container{
    width: 100vw;
    height: calc(100vh - 100px);
    overflow:auto;
    padding: 30px;
    .loader-wrap{
      width: 100%;
      height: 100%;
      @include flex-center;
      @include loader;
    }
    .product-wrap{
      width: 100%;
      max-width: 1150px; 
      margin: 0 auto;
      @media (max-width: 1250px){
          max-width: 1100px;
      } 
      @media (max-width: 1152px){
          max-width: 1020px;
      }

      .product-display{
        width: 100%;
        display: flex;
        flex-wrap: wrap;  
      }
    }
}
</style>