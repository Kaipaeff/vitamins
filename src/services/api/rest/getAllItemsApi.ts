const url = 'https://692caae35f87239b.mokky.dev/items';

export interface Items {
  id: number;
  name: string;
  descr: string;
  price: string;
  imageUrl: string;
  prod: string;
}

export const getAllItemsApi = async (): Promise<Items[]> => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed to fetch vitamins. Status: ${res.status}`);
      throw new Error('Failed to fetch vitamins');
    }
    const data: Items[] = await res.json();
    return data;
  } catch (error: any) {
    console.error('Error fetching vitamins:', error.message);
    throw error;
  }
}