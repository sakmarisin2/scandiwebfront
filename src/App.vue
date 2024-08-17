<script setup>
import Footer from './components/Footer/Footer.vue';
import Header from './components/Header/Header.vue';
</script>

<template>
  <div class="main-container"> 
    <Header/>
    <router-view />
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.main-container{
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
