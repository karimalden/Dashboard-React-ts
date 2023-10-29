import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import useAxios from './useAxios'

function useDeleteMutation(url) {
    const axios = useAxios()
    const queryqlent = useQueryClient()
  return (
    useMutation(
        async (dataToSend)=>{
            const data = await axios.delete(url +`/${dataToSend}` )
            return data
        },
        {
            onSuccess:({message})=>{
                queryqlent.invalidateQueries('Cart')
                toast.success("Deleted ")
            }
        }
    )
  )
}

export default useDeleteMutation



