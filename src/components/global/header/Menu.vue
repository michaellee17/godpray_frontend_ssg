<template>
    <div class="flex justify-between h-full">
        <img @click="isOpen = !isOpen" class="block lg:hidden mr-5" src="../../../assets/header/Group67.svg" width="30" height="24" alt="">
        <router-link class="flex items-center" to="/">
            <div class="flex items-center logo">
                <img class="logo_left" src="../../../assets/header/logo.svg" alt="">
                <img class="logo_right" src="../../../assets/header/logo_title.svg" alt="">
            </div>
        </router-link>
        <div class="flex">
            <ul class="flex gap-5 items-center hidden lg:flex">
                <li class="nav-item">
                    <router-link to="/allTemple/" class="nav-link">全台廟宇</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/mainGod/" class="nav-link">主神</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/latest/all" class="nav-link">最新活動</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/service/" class="nav-link">信眾服務</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/todo/" class="nav-link">代辦項目</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/product/all" class="nav-link">文創商品</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/qa/" class="nav-link">Q&A</router-link>
                </li>
                <li class="nav-item">
                </li>
            </ul>
            <ul class="flex gap-5 items-center">
                <li class="nav-item">
                    <Member />
                </li>
                <li class="nav-item">
                    <Cart />
                </li>
            </ul>
        </div>
    </div>
    <Transition name="slide-fade">
        <div class="mobileMenu" v-show="isOpen">
            <ul class="mobileUl">
                <li class="nav-item-mobile">
                    <router-link to="/allTemple/" class="nav-link-mobile" @click="isOpen = !isOpen">全台廟宇</router-link>
                </li>
                <li class="nav-item-mobile">
                    <router-link to="/mainGod/" class="nav-link-mobile" @click="isOpen = !isOpen">主神</router-link>
                </li>
                <li class="nav-item-mobile">
                    <router-link to="/latest/all" class="nav-link-mobile" @click="isOpen = !isOpen">最新活動</router-link>
                </li>
                <li class="nav-item-mobile">
                    <router-link to="/service/" class="nav-link-mobile" @click="isOpen = !isOpen">服務</router-link>
                </li>
                <li class="nav-item-mobile">
                    <router-link to="/todo/" class="nav-link-mobile" @click="isOpen = !isOpen">代辦事項</router-link>
                </li>
                <li class="nav-item-mobile">
                    <router-link to="/product/all" class="nav-link-mobile" @click="isOpen = !isOpen">文創商品</router-link>
                </li>
                <li class="nav-item-mobile">
                    <router-link to="/qa/" class="nav-link-mobile">Q&A</router-link>
                </li>
            </ul>
        </div>
    </Transition>
    <div class="mask" v-show="isOpen" @click="isOpen = !isOpen"></div>
    <img class="close" v-show="isOpen" @click="isOpen = !isOpen" src="../../../assets/header/Union.svg" alt="">
</template>
<script setup >
//官方套件
import { ref,watch } from 'vue';
import { useModal } from 'vue-final-modal'

//自製元件
import Member from './Member.vue';
import Cart from './Cart.vue';

//控制手機板選單，鎖屏
const isOpen = ref(false);
watch(isOpen,(newValue)=>{
    newValue ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';
})
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
.close{
    z-index:30;
    top:15px;
    right:15px;
    position: absolute;
}
.mask{
    z-index:10;
    top:0;
    left:0;
    position: absolute;
    background-color:#00000080;
    width: 100%;
    height: 100vh;
}
.mobileUl{
    margin-top: 34px;
}
.mobileMenu{
    z-index:20;
    position: absolute;
    top:0;
    left:0;
    background-color: #ffffff;
    height: 100vh;
    width:65vw;
}
.nav-link{
    color:#FFFFFF;
}
.nav-link-mobile{
    color:#000000;
    font-family: Noto Serif TC;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.1em;
    text-align: left;
}
.nav-link-mobile:hover{
    color:#ceb96e;
}
.nav-item-mobile{
    padding-top: 15px;
    padding-bottom: 7px;
    padding-left: 22px;
    border-bottom: 1px solid #EEEEEE;
}
@media(max-width:512px){
    .logo{
        width: 66%;
    }
    .logo_left{

    }
    .logo_right{

    }
}
</style>