import { useMutation, useQueryClient } from 'react-query'
import useAxios from './useAxios'

function useUpdateMutation(Api:string) {

  const queryqlent = useQueryClient()

    const axios = useAxios()
  return (
    useMutation(
        async (dataToSend:any)=>{
            const data = await axios.put(Api+"/"+dataToSend?.id , dataToSend)
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
export const useEditDynamik = (Api:string) => useUpdateMutation(Api);




