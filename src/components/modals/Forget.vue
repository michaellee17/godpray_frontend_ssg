<template>
    <div class="pb-20px">
        <p class="small mb-30px">忘記您的密嗎？請輸入您的使用者名稱或註冊的電子郵件。您將會在電子郵件信箱中收到重設密碼的連結。</p>
        <div class="mb-10px">
            <h5 v-show="errorMessage" class="mb-5px sub_title error">{{ errorMessage }}</h5>
            <h5 class="mb-5px sub_title">電子郵件</h5>
            <input v-model="email" class="member_input" type="text" placeholder="請輸入電子郵件">
        </div>
        <button class="reset_btn" @click="resetPassword">重設密碼</button>
    </div>
</template>
<script setup>
//官方套件
import { ref } from "vue";
import axios from "axios";

const emit = defineEmits(['reset-password']);

//格式驗證
const email = ref('')
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const errorMessage = ref('')
const resetPassword = async () => {
    if (!validateEmail(email.value)) {
        errorMessage.value = '請輸入有效電子郵件';
        return;
    }
    try {
        const requestData = {
            email: email.value,
        };
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_PATH}/api/gc/reset`,
            requestData
        );
        if(response.data.success === false){
            errorMessage.value = response.data.data
        }else{
            emit('reset-password',email.value);
        }
    } catch (error) {
        console.error("API 請求失敗:", error);
    }
    
}
</script>
<style scoped>
.error{
    color:red;
}
.reset_btn{
    width: 100%;
    height: 40px;
    color:#ffffff;
    background-color: #CEB96E;
    border: none;
    outline: none;
    border-radius: 0;
}
.reset_btn:hover{
    color:#CEB96E;
    background-color: #ffffff;
    border:1px solid #CEB96E;
}
.small{
    font-size: 14px;
}
.sub_title{
    font-size: 16px;
}
.member_input{
  padding: 0 10px;
  height: 30px;
  width: 100%;
  background-color: #EEEEEE;
}
</style>