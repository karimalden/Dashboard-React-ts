import { useGetDynamik, useAddDynamik, useEditDynamik } from './';

// Custom hook for CRUD operations
export const useMixApi = (name:string) => {
  const GetMutation = useGetDynamik(name);
  const AddMutation = useAddDynamik(name);
  const EditMutation = useEditDynamik(name);

  return {
    GetMutation,
    AddMutation,
    EditMutation,
  };
};