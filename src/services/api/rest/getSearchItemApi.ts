const url = 'https://692caae35f87239b.mokky.dev/items?name=';

export interface SearchItem {
  id: number;
  name: string;
  descr: string;
  price: string;
  imageUrl: string;
  prod: string;
}

export const getSearchItemApi = async (search: string, abortController: AbortController): Promise<SearchItem[]> => {
  const signal = abortController.signal;
  try {
    const res = await fetch(`${url}${search}*`, { signal });
    if (!res.ok) {
      console.error(`Failed to fetch search. Status: ${res.status}`);
      throw new Error(`Failed to fetch search`);
    }
    const data: SearchItem[] = await res.json();
    return data;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.log('Request was aborted');
    } else {
      console.error('Error fetching search:', error.message);
    }
    return [];
  }
};