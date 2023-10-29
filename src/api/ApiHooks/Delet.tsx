import { useMutation, useQueryClient } from 'react-query'
import useAxios from './useAxios'

function useDeleteMutation(Api: string) {
    const axios = useAxios()
    const queryqlent = useQueryClient()
  return (
    useMutation(
        async (id:number)=>{
            const data = await axios.delete(Api +`/${id}` )
            return data
        },
        {
            onSuccess:({})=>{
                queryqlent.invalidateQueries(Api)
            }
        }
    )
  )
}
export const useDeleteDynamik = (Api:string) =>useDeleteMutation(Api);


