
import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useUpdateMutation from "./helper/useUpdateMutation"
  
  const API = {
    GET: `/api/admin/driver/all`,
    GetOne:`/api/admin/driver/get`,
    ADD: "/api/admin/Driver/create",
    UPDATE: "/api/admin/Driver/update",
    DELETE: "/api/admin/Driver/delete",
  };
  
   
  const KEY = "DRIVER";
    const KEY2 = "DRIVER2";

  export const useGetDriver = (params?:any) => useGetQueryPagination(KEY, API.GET, params);
    export const useGetOneDriver = (params?:any) => useGetQueryPagination(KEY2, API.GetOne, params);

  export const useAddDriver = () => useAddMutation(KEY, API.ADD);
  export const useUpdateDriver = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteDriver = () =>useDeleteMutation(KEY, API.DELETE);
