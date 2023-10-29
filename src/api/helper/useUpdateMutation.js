import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import useAxios from './useAxios'

function useUpdateMutation(url,params) {

    const axios = useAxios()
  return (
    useMutation(
        async (dataToSend)=>{
            const data = await axios.put(url+"/"+dataToSend.id , dataToSend , params)
            return data
        },
        {
            onSuccess:({message})=>{
                toast.success("update ")
            }
        }
    )
  )
}

export default useUpdateMutation



