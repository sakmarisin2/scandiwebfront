<template>
    <div v-show="route.name === 'Product List'"  class="header-btn-wrap">
        <button @click="toAddProduct" class="button-28">ADD</button>
        <button @click="deleteProducts" class="button-28" id="delete-product-btn">MASS DELETE</button>
    </div>
    <div v-show="route.name === 'Product Add'" class="header-btn-wrap">
        <button @click="saveProduct" class="button-28">Save</button>
        <button @click="cancel" class="button-28">Cancel</button>
    </div>
</template>

<script setup>
import {
  useRoute,
  useRouter,
} from 'vue-router';
import { useStore } from 'vuex';

import {
  cancelAddProduct,
  handleSave,
  toAddProduct,
} from '../../js/methods/navigation';
import { massDelete } from '../../js/requests/massDelete';

const store = useStore()
const route = useRoute()
const router = useRouter()
const cancel = () =>{
    cancelAddProduct()
    store.commit('resetFormData')
}
const saveProduct = async () =>{
    const result = await handleSave(store.state.formData)
    if (result) {
        router.push('/')
        store.commit('resetFormData')
    }
}
const deleteProducts = async () =>{
    await massDelete(store.state.selectedProductIds)
    router.go()
}
</script>

<style lang="scss" scoped>

.header-btn-wrap {
    @include flex-between;
    margin-bottom: 10px;
    @include button;
}
</style>