import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { useNavigate } from "react-router-dom";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const navigate = useNavigate();

  return useMemo(
    () => [
 
      {
        name: `${t("id")}`,
        sortable: false,
        center: "true",
        cell: (row:any) => row?.id
      },
     
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row:any) => (
            <Actions
              onEdit={() => row}   
              onView={() => {
                navigate("/3");

              }}    
              objectToEdit={row}
              showEdit={true}          
              // showDelete={false}
              onDelete={() => fnDelete({ id: row.id })}
            />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;
