<template>
    <div class="footer-container">
        <h2>Scandiweb Test assignment</h2>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../../styles/color.scss';
@import '../../styles/mixins.scss';
.footer-container{
    width: 100%;
    height: 40px;
    @include flex-center;
    border-top: $gray-white;
    padding:20px;
    background:$background-color;

    margin-top: 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    h2{
        @include title;
    }
}
</style>