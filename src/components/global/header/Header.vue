<template>
    <div class="relative h-80px w-full mb-0 z-50 w-full">
        <div class="md:px-30px lg:px-30px 2xl:px-270px w-full py-10px px-10px header fixed top-0 h-80px">
            <Menu />
        </div>
    </div>
</template>
<script setup >
//自製元件
import Menu from './Menu.vue';
</script>
<style scoped>
.header{
    background-color:#920000;
}
</style>