<template>
    <div class="card-wrap">
        <div class="card-content">
            <input type="checkbox">
            <p>SKU</p>
            <p>Product name</p>
            <p>Price $</p>
            <p>Size: 100mb</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../../../styles/mixins.scss';

.card-wrap {
    width: 250px;
    height: 150px;
    margin: 30px;

    @include flex-center;

    .card-content{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        @include flex-center;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        position: relative;
        
        input{
            position: absolute;
            top: 0;
            left: 0;
        }
        p{
            margin-bottom: 10px;
        }
    }
}
</style>