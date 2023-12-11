
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { Button } from "antd";
import ColumnsSwitch from "../../Components/Columns/ColumnsSwitch";

function fnDelete(props: any) { }

const useTableColumns: any = () => {
  const [t] = useTranslation();

  return useMemo(
    () => [
      {
        name: t("image"),
        center: "true",
        cell: (row: any) => {
          return (
            <ColumnsImage src={row?.image} />
          )
        }
      },
      {
        name: t("name"),
        center: "true",
        cell: (row: any) => row?.full_name
      },
      {
        name: t("Drivercode"),
        center: "true",
        cell: (row: any) => row?.code
      },
      {
        name: t("wallet"),
        center: "true",
        cell: (row: any) => row?.wallet
      },
      {
        name: t("city"),
        center: "true",
        cell: (row: any) => row?.city_name
      },
      {
        name: t("status"),
        center: "true",
        cell: (row: any) => {
          switch (row?.status) {
            case ("online"): return (    <Button type="primary" className="bg-success"  >online </Button>)
            case ("pending"): return (   <ColumnsSwitch name="status" Front="pending" Back="pending"   Checked />)
            case ("offline"): return (    <Button type="primary" danger>Offline </Button>)

          }

        }
      },
      {
        name: t("phone_verfication"),
        center: "true",
         cell: (row: any) => {
          switch (row?.phone_verfication) {
            case (1): return (    <Button type="dashed"   >Done </Button>)
            case (0): return (   <ColumnsSwitch  name="status"  Front="InActive" Back="Active" Checked />)

          }

        }
      },
      {
        name: t("block_timer"),
        center: "true",
        cell: (row: any) => row?.block_timer
      },

      // {
      //   name: "#",
      //   sortable: false,
      //   center: "true",
      //   cell: (row:any) => (
      //       <Actions

      //       // importnat to return the row in on Edit Function to store in objectToEdit That Upper in Edit Modal 
      //         onEdit={() => row}
      //         onView={()=>{}}
      //         objectToEdit={row}
      //         showEdit={true}
      //         // showDelete={false}
      //         onDelete={() => fnDelete({ id: row.id })}
      //       />
      //   ),
      // },
    ],
    [t]
  );
};

export default useTableColumns;

