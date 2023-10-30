import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import useAxios from './useAxios'
import { useTranslation } from 'react-i18next'

function useAddMutation(key , url) {
    const axios = useAxios()
    const [t] = useTranslation() 
    const queryClient = useQueryClient()
  return (
    useMutation(
        async (dataToSend)=>{
            const data = await axios.post(url , dataToSend)
            return data
        },
        {
            onSuccess:({message})=>{
           
                queryClient.invalidateQueries([key]);
                toast.success(message || "Add Successful")
            },
            onError:({response})=>{
                const message = response?.data?.message || t("failed_to_add_data");
                toast.error(message);
            }
        }
    )
  )
}

export default useAddMutation



