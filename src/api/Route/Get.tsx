import { useQuery } from 'react-query';
import useAxios from '../helper/useAxios';

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
export const useGetDynamic =(Api:string)=>useGetQuery(Api)

