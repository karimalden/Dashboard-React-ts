import { useQuery } from 'react-query';
import useAxios from '../helper/useAxios';
import { useLocation } from 'react-router-dom';

function useGetQuery(Api: string) {
  const axios = useAxios();
  const location = useLocation();
  const pagination = location?.search || '';

  return useQuery([Api, pagination], async () => {
    const response = await axios.get(Api + pagination);
    return response.data; 
  }, {
    onError: (error) => {
      console.error('An error occurred:', error);
    },
    refetchOnWindowFocus: false,
  });
}

export const useGetDynamic = (Api: string) => useGetQuery(Api);
