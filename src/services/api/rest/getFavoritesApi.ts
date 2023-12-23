import axios from "axios";

import { Items } from "./getAllItemsApi";

const url = 'https://692caae35f87239b.mokky.dev/favorites';

export const getFavorites = async (): Promise<Items[]> => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error: any) {
    console.error('Error axios.get to favorites:', error.message);
    throw error;
  }
};