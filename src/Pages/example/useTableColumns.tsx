import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();

  return useMemo(
    () => [
 
      {
        name: `${t("name")}`,
        sortable: false,
        center: true,
        cell: (row:any) => row?.name
      },
     
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) => (
            <Actions
              onEdit={() => row}
              showEdit={true}
              onDelete={() => fnDelete({ id: row.id })}
            />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;
