import { defineStore } from 'pinia';
import { ref } from 'vue';

const url = 'https://692caae35f87239b.mokky.dev/items?name=*';

export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const vitamins = ref([]);

  const getVitamins = async (search: string) => {
    loader.value = true;
    const res = await fetch(`${url}${search}`);
    const data = await res.json();
    console.log('dataFromSearchStore====>>>>>', data); //не забыть убрать после отладки!!!!
    vitamins.value = data;
    loader.value = false;
  }

  return {
    loader, vitamins, getVitamins
  }
})