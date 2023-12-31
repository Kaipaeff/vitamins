import { defineStore } from "pinia";
import { ref } from 'vue';

import { getAllItemsApi, Items } from '../services/api/rest/getAllItemsApi';
import { getOneItemApi } from "../services/api/rest/getOneItemApi";
import { getFavorites } from "../services/api/rest/getFavoritesApi";


export const useVitaStore = defineStore('vitaStore', () => {
  const loader = ref(false);
  const vitamins = ref<Items[]>([]);
  const oneVitamin = ref<Items | null>(null);

  const getAllVitamins = async () => {
    loader.value = true;
    try {
      const data = await getAllItemsApi();
      vitamins.value = data.map(el => ({
        ...el,
        isFavorite: false
      }))
    } catch (error: any) {
      console.error('Error fetching vitamins:', error.message);
    } finally {
      loader.value = false;
    }
  };

  const getOneVitamin = async (id: number) => {
    loader.value = true;
    try {
      oneVitamin.value = await getOneItemApi(id); 
    } catch (error: any) {
      console.error('Error fetching vitamin details:', error.message);
    } finally {
      loader.value = false;
    }
  };

  const getFavoriteVitamins = async () => {
    try {
      const favorites = await getFavorites(); //получаем данные с АПИ из ресурса /favorites


      vitamins.value = vitamins.value.map(el => {
        const favorite = favorites.find((fav) => fav.item_id === el.id)

        if (favorite) {
          return {
            ...el,
            isFavorite: true,
            favoriteId: favorite.id,
          };
        } else {
          return el;
        }
      })
      // console.log('favorites from VitaStore:', favorites);
    } catch (error: any) {
      console.error('Error fetching vitamin favorites:', error.message);
    }
  };

  return {
    loader, vitamins, oneVitamin, getAllVitamins, getOneVitamin, getFavoriteVitamins,
  };
});
