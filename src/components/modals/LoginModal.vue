<template>
    <VueFinalModal class="flex justify-center items-center"
        content-class="flex flex-col p-4 bg-white dark:bg-black rounded-lg border border-gray-100 dark:border-gray-800 ">
        <div class="flex justify-end">
            <img class="close" src="../../assets/modal/close.png" alt="" @click="emit('confirm')">
        </div>
        <div class="w-360px px-10px pt-30px">
            <div v-show="activePage === 'login'" class="login">
                <h4 class="title">會員登入</h4>
                <div class="w-full flex flex-col mt-20px gap-20px input_section">
                    <div v-if="errorMessage" class="flex justify-center">
                        <h5 class="error">{{ errorMessage }}</h5>
                    </div>
                    <div>
                        <h5 class="mb-5px sub_title">電子郵件</h5>
                        <input v-model="email" class="member_input" type="text" placeholder="請輸入電子郵件">
                    </div>
                    <div class="relative">
                        <h5 class="mb-5px sub_title">密碼</h5>
                        <div class="relative">
                            <input v-model="password" class="member_input" :type="isPswViewed ? 'text' : 'password'"
                                placeholder="請輸入密碼" @keyup.enter="sendLogin">
                            <img v-show="!isPswViewed" class="eye" src="../../assets/modal/eyes_icon_2.svg" alt=""
                                @click="isPswViewed = !isPswViewed">
                            <img v-show="isPswViewed" class="eye" src="../../assets/modal/eyes_icon.svg" alt=""
                                @click="isPswViewed = !isPswViewed">
                        </div>
                    </div>
                    <button class="login_btn" @click="sendLogin">登入</button>
                </div>
                <div class="next px-40px py-10px">
                    <button class="link_btn" @click="activePage = 'forget'">忘記密碼?</button>
                    <span>|</span>
                    <button  class="link_btn"  @click="activePage = 'register'">註冊會員</button>
                </div>
            </div>
            <Register v-show="activePage === 'register'" @redirect-register-success="activePage = 'registerSuccess'"  @close-modal="emit('confirm')"/>
            <Forget v-show="activePage === 'forget'" @reset-password="handleForget" />
            <AfterSuccess :content="`${resetEmail}請到信箱取件重設密碼`" v-show="activePage === 'afterSuccess'"
                @redirect-login="activePage = 'login'" />
            <AfterSuccess content="註冊成功" close="true" v-show="activePage === 'registerSuccess'"
                @redirect-login="activePage = 'login'" @close-modal="emit('confirm')" />
            <AfterSuccess content="登入成功" close="true" v-show="activePage === 'loginSuccess'"
                @redirect-login="activePage = 'login'" @close-modal="emit('confirm')" />
        </div>
    </VueFinalModal>
</template>
<script setup>
//官方套件
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import axios from "axios";

//自製元件
import Register from './Register.vue'
import Forget from './Forget.vue'
import AfterSuccess from './AfterSuccess.vue'
import { useAuth } from '@/store/auth.js'

//忘記密碼
const resetEmail = ref('')
const handleForget = (email) =>{
    activePage.value = 'afterSuccess'
    resetEmail.value = email
   
}

//格式驗證
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    return password.length >= 8;
};

//執行登入
const errorMessage = ref('')
const email = ref('');
const password = ref('');
const sendLogin = async () => {
    if (!validateEmail(email.value)) {
        errorMessage.value = '請輸入有效電子郵件';
        return;
    }

    if (!validatePassword(password.value)) {
        errorMessage.value = '密碼至長度至少八位';
        return;
    }

    try {
        const requestData = {
            email: email.value,
            password: password.value
        };

        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_PATH}/api/gc/login`,
            requestData
        );
        if (response.data.success === false) {
            errorMessage.value = response.data.data
        } else {
            console.log(response.data.data);
            const jwt = response.data.data.jwt
            const auth = useAuth()
            auth.setJWT(jwt)
            auth.setMember(response.data.data)
            activePage.value = 'loginSuccess'
        }
    } catch (error) {
        console.error("API 請求失敗:", error);
    }
}


const emit = defineEmits(['confirm']);
const activePage = ref('login')
const isPswViewed = ref(false)

</script>


<style scoped>
.link_btn:hover{
    color:#CEB96E;
}
.error {
    color: red;
}

.sub_title {
    font-size: 16px;
}

.eye {
    position: absolute;
    right: 7px;
    top: 7px;
    width: 29px;
    height: 16px;
}

.login_btn {
    width: 100%;
    height: 40px;
    color: #ffffff;
    background-color: #CEB96E;
    border: none;
    outline: none;
    border-radius: 0;
}

.login_btn:hover {
    color: #CEB96E;
    background-color: #ffffff;
    border: 1px solid #CEB96E;
}

.close {
    width: 10px;
    height: 10px;
}

.next {
    display: flex;
    justify-content: space-between;
}

.next button {
    color: #333333;
    border: none;
    outline: none;
}

.next span {
    color: #D9D9D9;
}

.input_section {
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 20px;
}

.member_input {
    padding: 0 10px;
    height: 30px;
    width: 100%;
    background-color: #EEEEEE;
}

.title {
    font-family: Noto Serif TC;
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0.2em;
    text-align: center;
    color: #000000;
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 10px;
}</style>