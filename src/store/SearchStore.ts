import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getSearchItemApi } from '../services/api/rest/getSearchItemApi';
import { Items } from '../services/api/rest/getAllItemsApi';

export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const vitamins = ref<Items[]>([]);
  let abortController: AbortController;

  const getSearchVitamins = async (search: string) => {
    abortController?.abort();
    abortController = new AbortController();
    loader.value = true;
    try {
      vitamins.value = await getSearchItemApi(search, abortController);
    } finally {
      loader.value = false;
    }
  };

  return {
    loader, vitamins, getSearchVitamins
  }
})