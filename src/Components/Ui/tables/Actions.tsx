import React , {ReactNode} from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import CustomConfirmAlert from "../Alert";
import { usePageState } from "../../../lib/state";

type TableActionsProps = {
  onDelete: () => any;
  onEdit: () => any;
  onView:() => any;
  showView?: boolean;
  showEdit?: boolean;
  showDelete?: boolean;
  children?: ReactNode;
  objectToEdit:any

};


const TableActions = ({ onDelete   , objectToEdit,onEdit,onView,showEdit=true,showDelete=true,showView=true,children }:TableActionsProps) => {

    const {setObjectToEdit ,  setIsOpenEditModel} = usePageState()
  return (
    <div className="data-list-action TableActions">
    {showEdit && <FaEdit onClick={()=>{
  setObjectToEdit(objectToEdit)
  setIsOpenEditModel()
      onEdit()
      
    }} className="cursor-pointer m-2" size={20} />}
    {showView && <FaEye onClick={onView} className="cursor-pointer m-2" size={25} />}

    {showDelete && (
      <FaTrash
        onClick={() =>
          CustomConfirmAlert({
            onConfirm: () => {

            
              onDelete();

            },
          })
        }
        className="cursor-pointer"
        size={20}
      />
    )}
    {children}
  </div>
);
};
export default TableActions;
