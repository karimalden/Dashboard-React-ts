
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"
  
  const API = {
    GET: "/test2",
    ADD: "/test2/create",
    UPDATE: "/test2/update",
    DELETE: "/test2/delete",
  };
  
   
  const KEY = "TEST2";
  export const useGetTest2 = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddTest2 = () => useAddMutation(KEY, API.ADD);
  export const useUpdateTest2 = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteTest2 = () =>useDeleteMutation(KEY, API.DELETE);
