import { defineStore } from "pinia";
import { ref } from 'vue';

const url = 'https://692caae35f87239b.mokky.dev/items';

export const useVitaStore = defineStore('vitaStore', () => {
  const loader = ref(false);
  const vitamins = ref([]);

  const getVitamins = async () => {
    loader.value = true;
    const res = await fetch(`${url}`);
    const data = await res.json();
    console.log('dataFromVitaStore====>>>>>', data); //не забыть убрать после отладки!!!!
    vitamins.value = data;
    loader.value = false;
  }

  return {
    loader, vitamins, getVitamins
  }
})
