import { defineStore } from "pinia";
import { ref } from 'vue';
import { getAllItemsApi, Items } from '../services/api/rest/getAllItemsApi';

export const useVitaStore = defineStore('vitaStore', () => {
  const loader = ref(false);
  const vitamins = ref<Items[]>([]);

  const getVitamins = async () => {
    loader.value = true;
    try {
      vitamins.value = await getAllItemsApi();
    } catch (error: any) {
      console.error('Error fetching vitamins:', error.message);
    } finally {
      loader.value = false;
    }
  }
  return {
    loader, vitamins, getVitamins
  }
})
