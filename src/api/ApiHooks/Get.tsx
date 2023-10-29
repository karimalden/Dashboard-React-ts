import { useQuery } from 'react-query';
import useAxios from './useAxios';

function useGetQuery(Api: string) {
  const axios = useAxios();

  return useQuery(Api, async () => {
    const response = await axios.get(Api);
    return response.data; 
  }, {
    onError: (error) => {
      console.error('An error occurred:', error);
    },
    refetchOnWindowFocus: false,
  });
}
export const useGetDynamik =(Api:string)=>useGetQuery(Api)

