
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"
  
  const API = {
    GET: "/test3",
    ADD: "/test3/create",
    UPDATE: "/test3/update",
    DELETE: "/test3/delete",
  };
  
   
  const KEY = "TEST3";
  export const useGetTest3 = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddTest3 = () => useAddMutation(KEY, API.ADD);
  export const useUpdateTest3 = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteTest3 = () =>useDeleteMutation(KEY, API.DELETE);
