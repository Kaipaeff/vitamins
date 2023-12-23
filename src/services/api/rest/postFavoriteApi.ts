import axios from "axios";

import { Items } from "./getAllItemsApi";

const url = 'https://692caae35f87239b.mokky.dev/favorites/';

export const postFavorite = async (item: Items) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        vitaminId: item.id,
      }

      item.isFavorite = true;

      const { data } = await axios.post(url, obj);

      item.favoriteId = data.id;

      console.log('data from postFavoriteApi function:', data);

      return data;
    } else {
      item.isFavorite = false;
      await axios.delete(`${url}${item.favoriteId}`);
      item.favoriteId = null;
    }
  } catch (error: any) {
    console.error('Error axios.get to favorites:', error.message);
    throw error;
  }
};