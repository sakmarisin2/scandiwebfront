<template>
    <div class="form-container">
        <form action="post" id="product_form" class="form-wrap">
            <MainForm/>
            <Switcher/>
            <OptionDVD/>
            <OptionBook/>
            <OptionFurniture/>
            <TypeText/>
        </form>
    </div>
</template>

<script setup>
import MainForm from './MainForm.vue';
import OptionBook from './OptionBook.vue';
import OptionDVD from './OptionDVD.vue';
import OptionFurniture from './OptionFurniture.vue';
import Switcher from './Switcher.vue';
import TypeText from './TypeText.vue';
</script>

<style lang="scss" scoped>
.form-container {
    height: 100%;
    width: 100%;
    padding: 40px;
    .form-wrap{
        height: 100%;
        width: 30%;
        display: flex;
        flex-direction: column;
        @include input-labels;
    }
}
</style>