
import useGetQuery from "../helper/useGetQuery"
const KEY= 'Products'
const API= {
    GET:"Products",
   
}

export const useGetProduct = ()=>useGetQuery(KEY, API.GET)
