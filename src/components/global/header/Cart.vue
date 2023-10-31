<template>
    <div v-show="cartDisabled" class="icon" @click="openCart()"></div>
</template>
<script setup>
//官方套件
import { computed } from 'vue'
import { useModal } from 'vue-final-modal'
import { useRouter,useRoute } from "vue-router";
const router = useRouter()
const route = useRoute()

//自製元件
const backend = import.meta.env.VITE_BACKEND_PATH
import LoginModal from '@/components/modals/LoginModal.vue';
import CartModal from '@/components/modals/CartModal.vue'
import { useAuth } from '@/store/auth.js'

//登入modal
const auth = useAuth();
const { open, close } = useModal({
  component: LoginModal,
  attrs: {
    onConfirm() {
        close()
    },
  },
})

//購物車modal 第二個modal所以不能用解構來處理
const cart = useModal({
  component: CartModal,
  attrs: {
    onConfirm() {
      router.push(`/cart/${auth.member.user_id}`)
      cart.close();
    },
    onClose() {
      cart.close();
    },
    onInfo(){
      cart.close()
      router.push(`/info/${auth.member.user_id}`)
    }
  },
});

//購物車內頁及結帳頁購物車不能被打開
const cartDisabled = computed(() => {
  return !(route.path.includes('/cart') || route.path.includes('/info'));
});

//打開購物車流程
const openCart = (id) =>{
    if(auth.isLogin){
       cart.open()
    }else{
      open()
    }
}

</script>
<style scoped>
.icon{
    width: 33px;
    height: 32px;
    background-image: url(../../../assets/header/cart_icon.svg);
}
.icon:hover{
    background-image: url(../../../assets/header/cart_icon2.svg);
}
</style>