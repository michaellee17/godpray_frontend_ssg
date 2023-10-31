<template>
    <VueFinalModal hide-overlay="false" :lock-scroll="false" :click-to-close="true"
      class="custom_position"
      content-class="flex flex-col p-4 bg-white dark:bg-black rounded-lg border border-gray-100 dark:border-gray-800 "
    >   
        <loading :active="isLoading" :is-full-page="fullPage"></loading>
        <div class="flex justify-end">
          <img class="close" src="../../assets/modal/close.png" alt="" @click="emit('close')">
        </div>
        <div v-if="products.length !== 0" class="w-240px px-10px pt-10px">
            <div class="flex flex-col mb-30px">
               <div class="flex block" v-for="item in products" :key="item.product_id">
                    <img class="mini_img" :src="item.image_url" alt="">
                    <div class="flex flex-col justify-center">
                        <h6 class="name">{{ item.product_name }}</h6>
                        <h6 class="price">{{ item.quantity }} X NT${{ item.price.toLocaleString() }}</h6>
                        
                    </div>
                    <div class="flex justify-end">
                        <img class="cancel" @click="deleteItem(item.product_id)" src="../../assets/cart/cancel_icon1.svg" alt="">
                    </div>
               </div>
               <div class="block flex justify-center">
                    <h6>小計: NT${{ total.toLocaleString() }}</h6>
               </div>
            </div>
            <div class="flex flex-col gap-10px">
                <button class="know_btn delete" @click="emit('confirm')">查看購物車</button>
                <button class="know_btn" @click="emit('info')">結帳</button>
            </div>
        </div>
        <div v-if="products.length === 0 && isLoading === false " class="w-240px px-10px pt-10px">
            <h4>您的購物車還沒有任何商品</h4>
        </div>
    </VueFinalModal>
  </template>
<script setup>
//官方套件
import { ref,onMounted } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import axios from "axios";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

//自製元件
const backend = import.meta.env.VITE_BACKEND_PATH
import { useAuth } from '@/store/auth.js'
const auth = useAuth();
onMounted(() =>{
    getCart(auth.member.user_id)
})



const isLoading = ref(false);
const products = ref([])
const total = ref()
const getCart = async(id) =>{
    isLoading.value = true;
    const requestData = {
        user_id:auth.member.user_id
    };
    try {
        const response = await axios.post(`${backend}api/gc/get/cart`,requestData
        );
       products.value = response.data.product_info
       total.value = response.data.total
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally{
        isLoading.value = false;
    }
}

const emit = defineEmits(['confirm','delete','close']);

//刪除商品
const deleteItem = async(id) =>{
    isLoading.value = true;
    const requestData = {
        user_id:auth.member.user_id,
        product_id:id
    };
    try {
        const response = await axios.post(`${backend}api/gc/cart/delete`,requestData
        );
        getCart()
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally{
        isLoading.value = false;
    }
}
</script>


<style scoped>
.price{
    font-size: 14px;
}
.cancel{
    width: 16px;
    height: 16px;
}
.block{
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid #F5F5F5;
}
.name{
    color:#543118;
}
.mini_img{
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 15px;
}

.know_btn {
    width: 100%;
    height: 40px;
    color: #ffffff;
    background-color: #CEB96E;
    border: none;
    outline: none;
    border-radius: 0;
}
.delete{
    background-color: #920000;
}

.know_btn:hover {
    color: #920000;
    background-color: #ffffff;
    border: 1px solid #920000;
}
.msg {
    color: #920000;
}
.check {
    width: 18px;
    height: 18px;
}
</style>