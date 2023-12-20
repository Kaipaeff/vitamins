const url = 'https://692caae35f87239b.mokky.dev/items?id=';

import { Items } from "./getAllItemsApi";

export const getOneItemApi = async (id: number): Promise<Items> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 900));
    const res = await fetch(`${url}${id}`);
    if (!res.ok) {
      console.error(`Failed to fetch vitamin details.Status: ${res.status} `);
      throw new Error('Failed to fetch vitamin details');
    }
    const data: Items = await res.json()
    return data;
  } catch (error: any) {
    console.error('Error fetching vitamin details:', error.message);
    throw error;
  }
}