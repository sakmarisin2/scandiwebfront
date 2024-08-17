<template>
    <div v-show="this.$route.name === 'Product List'"  class="header-btn-wrap">
        <button @click="ToAddProduct">ADD</button>
        <button>MASS DELETE</button>
    </div>
    <div v-show="this.$route.name === 'Product Add'" class="header-btn-wrap">
        <button>Save</button>
        <button @click="CancelAddProduct">Cancel</button>
    </div>
</template>

<script setup>
import {
  CancelAddProduct,
  ToAddProduct,
} from '../../js/methods/redirect';
</script>

<style lang="scss" scoped>
.header-btn-wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
</style>