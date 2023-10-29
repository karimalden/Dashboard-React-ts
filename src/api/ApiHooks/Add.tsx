import { useMutation, useQueryClient } from 'react-query'
import useAxios from './useAxios'

function useAddMutation(Api:string) {
    const axios = useAxios()
    const queryqlent = useQueryClient()

  return (
    useMutation(
        async (dataToSend)=>{
            const data = await axios.post(Api , dataToSend)
            return data
        },
        {
            onSuccess:({})=>{
              queryqlent.invalidateQueries(Api)

            },
            onError:({response})=>{
            }
        }
    )
  )
}


export const useAddDynamik = (Api:string) =>useAddMutation(Api);
