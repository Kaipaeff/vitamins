import { defineStore } from "pinia";
import { ref } from 'vue';

const url = 'https://692caae35f87239b.mokky.dev/items';

export const useVitaStore = defineStore('vitaStore', () => {
  const loader = ref(false);
  const vitamins = ref([]);

  const getVitamins = async () => {
    loader.value = true;
    try {
      const res = await fetch(`${url}`);
      if (!res.ok) {
        console.error(`Failed to fetch vitamins. Status: ${res.status}`);
        throw new Error('Failed to fetch vitamins');
      }
      const data = await res.json();
      vitamins.value = data;
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
