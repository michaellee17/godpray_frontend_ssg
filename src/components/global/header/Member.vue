<template>
    <div v-show="!auth.isLogin" class="icon" @click="showLogin"></div>
    <router-link v-show="auth.isLogin" :to="`/member/${auth.member.user_id}`"><div class="icon"></div></router-link>
</template>
<script setup>
//官方套件
import { ref } from 'vue';
import { useModal } from 'vue-final-modal'

//自製套件
import LoginModal from '../../modals/LoginModal.vue';
import { useAuth } from '@/store/auth.js'
const auth = useAuth();

const { open, close } = useModal({
  component: LoginModal,
  attrs: {
    onConfirm() {
        close()
    },
  },
})

const showLogin = () =>{
    open()
}

</script>
<style scoped>
.icon{
    width: 33px;
    height: 32px;
    background-image: url(../../../assets/header/user_icon.svg);
}
.icon:hover{
    background-image: url(../../../assets/header/user_icon2.svg);
}
</style>