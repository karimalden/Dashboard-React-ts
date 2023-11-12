import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();

  return useMemo(
    () => [
 
      {
        name: `${t("id")}`,
        sortable: false,
        center: "true",
        cell: (row:any) => row?.id
      },
      {
        name: `${t("name")}`,
        sortable: false,
        center: "true",
        cell: (row:any) => row?.name
      },

      {
        name: `${t("username")}`,
        sortable: false,
        center: "true",
        cell: (row:any) => row?.username
      },

      {
        name: `${t("password")}`,
        sortable: false,
        center: "true",
        cell: (row:any) => row?.password
      },
     
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row) => (
            <Actions
              onEdit={() => row}              
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
