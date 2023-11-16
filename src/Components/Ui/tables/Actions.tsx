import React , {ReactNode} from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import CustomConfirmAlert from "../Alert";

type TableActionsProps = {
  onDelete: () => any;
  onEdit: () => any;
  onView:() => any;
  showView?: boolean;
  showEdit?: boolean;
  showDelete?: boolean;
  children?: ReactNode;
};


const TableActions = ({ onDelete   , onEdit,onView,showEdit=true,showDelete=true,showView=true,children }:TableActionsProps) => {

  
  return (
    <div className="data-list-action TableActions">
    {showEdit && <FaEdit onClick={onEdit} className="cursor-pointer m-2" size={20} />}
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
