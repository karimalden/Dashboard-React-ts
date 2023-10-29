//@ts-ignore
import Toggle from "react-toggle";
import "react-toggle/style.css";
import {StatusBadge,HovarableImage} from "../Components/Utils";

import { useTranslation } from "react-i18next";
import TableActions from "../Components/Utils/TableActions";
import { useDeleteDynamik, useEditDynamik } from "../api/ApiHooks";
import { useModal } from "../lib/Zustand";
import { BaseURL } from "../Layout/app/Const";

export const DefaultColumn = (key: any) =>{

  return(
  {  name: key.name,
    selector: (row: any) => row[key.name],
  }
  )
 
};



export const ImageColumn = (key:any) => {
  const [t] = useTranslation();

  return({
    name: t(key?.name),
    sortable: false,
    center: true,
    cell: (row:any) =>{
      return  (
          <HovarableImage
            id={row?.id}
            src={row[key?.src]}
            width="80"
  
          />
  
      )
    }
  });
}


export const ActionColumn = (key:any) => {
  const { setIsOpenEditModel,SetobjectToEdit } = useModal(state => state )
  const {api} = key
  const {mutate} = useDeleteDynamik(api)
  const OnDelet = (row: any) => {    
    mutate(row?.id)
  
  }
  return (
    {
      name: "#",
      center: "true",
      cell: (row: any) => (
        <TableActions
          onDelete={() => OnDelet(row)}
          onEdit={() => {
            SetobjectToEdit(row)
            setIsOpenEditModel()
          }
          }
        />
      ),
    }
  )
}
export const StatusColumn = (key:any) => ({
  name: (key?.status),
  sortable: false,
  center: true,
  width: '8%',
  maxWidth: 'auto',
  cell: (row:any) => (
    <ToggleStatus row={row} api={key?.api} status={key?.status}/>
  ),
});
export const ToggleStatus = ({ row, api,status, ...props }:any) => {
  const [t] = useTranslation();
  const {mutate,isLoading} = useEditDynamik(api)
  const handleSwitch = () => {
    mutate({
      id: row.id,
      [status]: !row[status],
    });
  };

  return (

      <div className="p-0">
        <p
          className="mb-0 p-0"
          style={{ whiteSpace: "nowrap", textAlign: "center" }}
        >
          {row[status] ? t("active") : t("inactive")}
        </p>
        <Toggle
          {...props}
          className="custom-switch"
          disabled={isLoading}
          onChange={handleSwitch}
          checked={row[status]}
        />
      </div>
  );
};
