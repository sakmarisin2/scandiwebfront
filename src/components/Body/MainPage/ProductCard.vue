<template>
    <div class="card-wrap">
        <div class="card-content">
            <input type="checkbox" class="delete-checkbox" v-model="isSelected" @change="SelectionChange">
            <p>{{jsonData.SKU}}</p>
            <p>{{jsonData.name}}</p>
            <p>{{jsonData.price}} $</p>
            <p v-show="jsonData.type == 'DVD'">Size: {{jsonData.attributes.size}} MB</p>
            <p v-show="jsonData.type == 'Book'">Weight: {{jsonData.attributes.weight}} KG</p>
            <p v-show="jsonData.type == 'Furniture'">Dimension: 
                {{jsonData.attributes.height}}x{{jsonData.attributes.width}}x{{jsonData.attributes.length}} </p>
        </div>
    </div>
</template>

<script setup>
import {
  defineProps,
  ref,
} from 'vue';

import { useStore } from 'vuex/dist/vuex.cjs.js';

const store = useStore()
const props = defineProps({
    jsonData: {
        type: Object,
        required: true
    }
})

const {jsonData} = props

const isSelected = ref(false)

const SelectionChange = () => {
    store.commit('toggleProductSelection', { id: jsonData.id, selected: isSelected.value })
}
</script>

<style lang="scss" scoped>
.card-wrap {
    width: 250px;
    height: 150px;  
    margin: 1vw;
    @include flex-center;
    @media (max-width: 1152px){
        width: 230px;
        height: 130px;
    }
    .card-content{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        @include flex-center;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        position: relative;
        
        .delete-checkbox{
            position: absolute;
            top: 10px;
            left: 10px;
        }
        p{
            margin-bottom: 10px;
            @include font-family;
        }
    }
}
</style>