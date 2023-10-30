import axios from 'axios'
import { BaseURL } from '../config'
function useAxios() {
  return (
    axios.create({
        baseURL:BaseURL  
    })
  )
}

export default useAxios