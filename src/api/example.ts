import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"



const API = {
    
    GET:"/example",
    ADD:"/example",
    DELETE:"/example",
    UPDATE:"/example"
}

const KEY = "EXAMPLE"

export const useGetAllExample = (params?:any) => useGetQuery(KEY , API.GET, params)
export const useAddExample = () => useAddMutation(KEY , API.ADD)
export const useUpdateExample = (params?:any) => useUpdateMutation(KEY , API.GET, params)
export const useDeleteExample = (params?:any) => useDeleteMutation( KEY , API.DELETE)
