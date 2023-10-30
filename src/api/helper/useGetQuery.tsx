import { useQuery } from 'react-query';
import useAxios from './useAxios';

function useGetQuery(key: string, url: string , params:any={}) {
  const axios = useAxios();

  return useQuery(key, async () => {
    const response = await axios.get(url , params);
    return response.data; 
  }, {
    onError: (error) => {
      console.error('An error occurred:', error);
    },
    refetchOnWindowFocus: false,
  });
}

export default useGetQuery;
