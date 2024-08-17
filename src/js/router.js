import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import Home from '../components/Body/MainPage/Home.vue';
import AddProduct from '../components/Body/ProductAddPage/AddProduct.vue';

const routes = [
  { path: '/',name: 'Product List', component: Home},
  { path: '/addproduct',name: 'Product Add', component: AddProduct}
]

export const router = createRouter({
  history:createWebHistory(),
  routes,
})