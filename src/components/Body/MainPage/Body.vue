<template>
    <div class="body-container">
      <div v-if="data && data.data" class="product-wrap"> 
        <div v-for="product in data.data" :key="product.id">
          <ProductCard :jsonData="product"/>
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
@import '../../../styles/mixins.scss';
.body-container{
    width: 100%;
    height: calc(100vh - 100px);
    padding: 40px;
    overflow:auto;

    .loader-wrap{
      width: 100%;
      height: 100%;
      @include flex-center;
      @include loader;
    }
    .product-wrap{
      display: flex;  
      flex-wrap:wrap;  
    }
}
</style>