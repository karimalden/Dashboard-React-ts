
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"
  
  const API = {
    GET: "/test",
    ADD: "/test/create",
    UPDATE: "/test/update",
    DELETE: "/test/delete",
  };
  
   
  const KEY = "TEST";
  export const useGetTest = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddTest = () => useAddMutation(KEY, API.ADD);
  export const useUpdateTest = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteTest = () =>useDeleteMutation(KEY, API.DELETE);
