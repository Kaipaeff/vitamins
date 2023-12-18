import { defineStore } from 'pinia';
import { ref } from 'vue';

const url = 'https://692caae35f87239b.mokky.dev/items?name=';

export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const vitamins = ref([]);
  let abortController: AbortController;
  let signal: AbortSignal;

  const getVitamins = async (search: string) => {
    if (abortController) {
      abortController.abort();
    }
    abortController = new AbortController();
    signal = abortController.signal;

    loader.value = true;
    try {
      const res = await fetch(`${url}${search}*`, { signal });
      if (!res.ok) {
        console.error(`Failed to fetch search. Status: ${res.status}`);
        throw new Error(`Failed to fetch search`);
      }
      const data = await res.json();
      vitamins.value = data;
    } catch (error: any) {
      if(error.name === 'AbortError') {
        console.log('Request was aborted');
      } else {
        console.error('Error fetching search:', error.message);        
      }
    } finally {
      loader.value = false;
    }
  }

  return {
    loader, vitamins, getVitamins
  }
})