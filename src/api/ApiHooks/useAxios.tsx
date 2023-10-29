import axios from 'axios'
import { BaseURL } from '../../Layout/app/Const'
function useAxios() {
  return (
    axios.create({
        baseURL:BaseURL 
    })
  )
}

export default useAxios