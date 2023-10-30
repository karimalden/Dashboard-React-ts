import { useMutation, useQueryClient, UseMutationResult } from 'react-query';
import { toast } from 'react-toastify';
import useAxios from './useAxios';

type AxiosResponse = {
  message: string;
  // Add other properties as needed
};

function useDeleteMutation(key:any , url: string): UseMutationResult<AxiosResponse, unknown, string, unknown> {
  const axios = useAxios();
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, unknown, string, unknown>(
    async (dataToSend) => {
      const { data } = await axios.delete(url);
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(key);
        toast.success('Deleted');
      }
    }
  );
}

export default useDeleteMutation;
