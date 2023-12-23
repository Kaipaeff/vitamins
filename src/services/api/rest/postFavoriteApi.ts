import axios from "axios";

import { Items } from "./getAllItemsApi";

const url = 'https://692caae35f87239b.mokky.dev/favorites';

export const postFavorite = async (item: Items) => {
  try {
    const obj = {
      vitaminId: item.id,
    }
    const { data } = await axios.post(url, obj);
    item.isFavorite = true;

    console.log('data from postFavoriteApi function:', data);

    return data;
  } catch (error: any) {
    console.error('Error axios.get to favorites:', error.message);
    throw error;
  }
};