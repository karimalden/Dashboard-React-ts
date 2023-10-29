import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import useAxios from './useAxios'

function useAddMutation(url) {
    const axios = useAxios()
  return (
    useMutation(
        async (dataToSend)=>{
            const data = await axios.post(url , dataToSend)
            return data
        },
        {
            onSuccess:({message})=>{
           
                toast.success("Add Successful")
            },
            onError:({response})=>{
                toast.error(response.data.slice(7, 36));
            }
        }
    )
  )
}

export default useAddMutation



