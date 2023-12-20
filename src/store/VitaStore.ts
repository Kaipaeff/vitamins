import { defineStore } from "pinia";
import { ref } from 'vue';
import { getAllItemsApi, Items } from '../services/api/rest/getAllItemsApi';
// import { getOneItemApi } from "../services/api/rest/getOneItemApi";


export const useVitaStore = defineStore('vitaStore', () => {
  const loader = ref(false);
  const vitamins = ref<Items[]>([]);
  // const oneVitamin = ref<Items | null>(null);

  const getAllVitamins = async () => {
    loader.value = true;
    try {
      vitamins.value = await getAllItemsApi();
    } catch (error: any) {
      console.error('Error fetching vitamins:', error.message);
    } finally {
      loader.value = false;
    }
  }

  // const getOneVitamin = async (id: number) => {
  //   loader.value = true;
  //   try {
  //     oneVitamin.value = await getOneItemApi(id);
  //   } catch (error: any) {
  //     console.error('Error fetching vitamin details:', error.message);
  //   } finally {
  //     loader.value = false;
  //   }
  // }

  return {
    // loader, vitamins, oneVitamin, getAllVitamins, getOneVitamin,
    loader, vitamins, getAllVitamins,
  }
})
