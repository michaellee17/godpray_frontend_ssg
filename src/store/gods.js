//官方套件
import { ref, onMounted  } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useGods = defineStore('gods', () => {
    const originGodArray = ref([])
    const godArray = ref([])
    const fetchGod = async () => {
     try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_PATH}/api/gc/god`
        );
        originGodArray.value = response.data.split(',')
        godArray.value = response.data.split(',').slice(0, 12);
      } catch (error) {
        console.error("API 請求失敗:", error);
      }
    }

    onMounted(fetchGod);
    
    return { godArray,originGodArray };
});