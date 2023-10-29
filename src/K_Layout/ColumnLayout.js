import { baseURL } from "api/config";
import HovarableImage from "components/HovarableImage";
import Actions from "components/table/TableActions";
import Null from "Mix/Null";
import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useTranslation } from "utility/language";
import AuthComponent from "components/AuthComponent";
import StatusBadge from "components/StatusBadge";

export const DynamicColumns = (t, Dynamic=[]) => {      
  return Dynamic.map((column) => ({
    name: t(column.name),
    sortable: false,
    center: column?.center ? false : true,
    width:  column?.width ? column.width : "auto" ,
    maxWidth: "auto",
    // selector: column.name,
    cell: (row)=> (
      column?.type ?  
        <div>{(row[column?.name] === 0)? <p className="false"> false </p>:  <p className="true"> true </p> }</div>

      :
      <div className={column?.more? "more" :column?.name}>{(row[column?.name] === null)? <Null/> : row[column?.name] }</div>

    )
  }))
}

export const ImageColumn = (t, name) => ({
  name: t(name),
  sortable: false,
  center: true,
  cell: (row) =>{
    return  (
      
        <HovarableImage
          id={row?.id}
          src={`${baseURL}/images/${row[name]}`}
          width="100"
          
        />
      
    )
  }
});
//// <ActionColumn setisOpen={setisOpen} setobjectToEdit={setobjectToEdit} deleteMutation={deleteMutation}/>
export const ActionColumn = ( setisOpen, setobjectToEdit, deleteMutation ) => ({
  name: '#',
  sortable: false,
  center: true,
  maxWidth: 'auto',
  cell: (row) => (
    <Actions
      onEdit={() => {
        setisOpen(true);
        setobjectToEdit(row);

      }}
      onDelete={() => deleteMutation.mutate({ id: row.id })}
    />
  ),
}
);
export const StatusColumn = (t, toggleMutation,isWhat) => ({
  name: t("status"),
  sortable: false,
  center: true,
  width: '8%',
  maxWidth: 'auto',
  cell: (row) => (
    <ToggleStatus object={row} toggleMutation={toggleMutation} isWhat={isWhat}/>
  ),
});
export const ToggleStatus = ({ object, toggleMutation,isWhat, ...props }) => {
  const t = useTranslation();
  const handleSwitch = () => {
    toggleMutation.mutate({
      id: object.id,
      new_status: !object[isWhat],
    });
  };

  return (
    <AuthComponent
      notAuthRender={() => <StatusBadge status={object?.isWhat} />}
    >
      <div className="p-0">
        <p
          className="mb-0 p-0"
          style={{ whiteSpace: "nowrap", textAlign: "center" }}
        >
          {object[isWhat] ? t("active") : t("inactive")}
        </p>
        <Toggle
          {...props}
          className="custom-switch"
          disabled={toggleMutation.isLoading}
          onChange={handleSwitch}
          checked={object[isWhat]}
        />
      </div>
    </AuthComponent>
  );
};
