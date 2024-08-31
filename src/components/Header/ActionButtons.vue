<template>
    <div v-show="route.name === 'Product List'"  class="header-btn-wrap">
        <button @click="ToAddProduct">ADD</button>
        <button @click="deleteProducts" id="delete-product-btn">MASS DELETE</button>
    </div>
    <div v-show="route.name === 'Product Add'" class="header-btn-wrap">
        <button @click="saveProduct">Save</button>
        <button @click="CancelAddProduct">Cancel</button>
    </div>
</template>

<script setup>
import {
  useRoute,
  useRouter,
} from 'vue-router';
import { useStore } from 'vuex';

import {
  CancelAddProduct,
  handleSave,
  ToAddProduct,
} from '../../js/methods/redirect';
import { massDelete } from '../../js/requests/massDelete';

const store = useStore()
const route = useRoute()
const router = useRouter()

const saveProduct = async () =>{
    await handleSave(store.state.formData)
}
const deleteProducts = async () =>{
    await massDelete(store.state.selectedProductIds)

    router.go()
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.header-btn-wrap {
    @include flex-between;
    margin-bottom: 10px;
}
</style>