
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"
  
  const API = {
    GET: "/tes2",
    ADD: "/tes2/create",
    UPDATE: "/tes2/update",
    DELETE: "/tes2/delete",
  };
  
   
  const KEY = "TES2";
  export const useGetTes2 = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddTes2 = () => useAddMutation(KEY, API.ADD);
  export const useUpdateTes2 = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteTes2 = () =>useDeleteMutation(KEY, API.DELETE);
