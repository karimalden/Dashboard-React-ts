import { useMemo } from "react";
import { useModal } from "../../lib/Zustand";
import TableActions from "../../Components/Ui/TableActions";

const useTableColumns = () => {
  const { setIsOpenEditModel,SetobjectToEdit } = useModal(state => state )
  const OnDelet = (row: any) => {
    //   mutate(row?.id)
      
  }
  return useMemo(

    () => [
      {
        id: '1',
        name: "name",
        selector: (row: any) => row.name,
        center: "true",
        
      }
     
,
      {
        name: "#",
        sortable: false,
        center: true,
        maxWidth: "auto",
        cell: (row: any) => (
          <TableActions
            onDelete={() => OnDelet(row)}
            onEdit={() =>{
              SetobjectToEdit(row)
              setIsOpenEditModel()
            }
            }
          />
        ),
      },
    ],
    []
  );
};

export default useTableColumns;