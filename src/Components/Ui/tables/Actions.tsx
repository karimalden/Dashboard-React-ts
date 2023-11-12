import React , {ReactNode} from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import CustomConfirmAlert from "../Alert";

type TableActionsProps = {
  onDelete: () => any;
  onEdit: () => any;
  showEdit?: boolean;
  showDelete?: boolean;
  children?: ReactNode;
};


const TableActions = ({ onDelete   , onEdit,showEdit=true,showDelete=true ,children }:TableActionsProps) => {

  
  return (
    <div className="data-list-action TableActions">
    {showEdit && <FaEdit onClick={onEdit} className="cursor-pointer m-1" size={20} />}

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
