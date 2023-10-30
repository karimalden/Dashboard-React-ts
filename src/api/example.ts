import useAddMutation from "./helper/useAddMutation"
import useGetQuery from "./helper/useGetQuery"



const API = {
    
    GET:"/example",
    ADD:"/example",
    DELETE:"/example",
    UPDATE:"/example"
}

const KEY = "EXAMPLE"

export const useGetAllExample = (params?:any) => useGetQuery(KEY , API.GET, params)
export const useAddExample = () => useAddMutation(KEY , API.ADD)
