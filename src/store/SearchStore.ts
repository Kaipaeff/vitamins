import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getSearchItemApi, SearchItem } from '../services/api/rest/getSearchItemApi';

export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const vitamins = ref<SearchItem[]>([]);
  let abortController: AbortController;

  const getVitamins = async (search: string) => {
    if (abortController) {
      abortController.abort();
    }
    abortController = new AbortController();
    loader.value = true;
    try {
      vitamins.value = await getSearchItemApi(search, abortController);
    } finally {
      loader.value = false;
    }
  };

  return {
    loader, vitamins, getVitamins
  }
})