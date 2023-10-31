//官方套件
import { ref, onMounted  } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const uselatest = defineStore('latest', () => {
    const originGodArray = ref([])
    const types = ref([])
    const latest = async () => {
     try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_PATH}/api/gc/latest/type`
        );
        types.value = response.data.type
      } catch (error) {
        console.error("API 請求失敗:", error);
      }
    }

    onMounted( latest );
    
    return { types };
});