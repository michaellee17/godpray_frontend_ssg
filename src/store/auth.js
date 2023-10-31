//官方套件
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useAuth = defineStore('auth', () => {
  const jwt = ref('')
  const isLogin = ref(false)
  const member = ref({
    user_id: '',
    email: '',
    name:'',
    city:'',
    area:'',
    zipCode:'',
    address:'',
    phone:''
  });
  const setJWT = (newjwt) => {
    jwt.value = newjwt
  }
  const setMember = (data) => {
    member.value.user_id = data.user_id
    member.value.email = data.email
    member.value.name = data.name
    member.value.city = data.city
    member.value.area = data.area
    member.value.zipCode = data.zipCode
    member.value.address = data.address
    member.value.phone = data.phone
    isLogin.value = true
    
  }

  const logout = () => {
    jwt.value = ''
    member.value.user_id = ''
    member.value.email = ''
    member.value.name = ''
    member.value.city = ''
    member.value.area = ''
    member.value.zipCode = ''
    member.value.address = ''
    member.value.phone = ''
    isLogin.value = false
  }

  return { jwt, member, isLogin, setJWT, setMember,logout };
}, {
  persist: true,
},
);