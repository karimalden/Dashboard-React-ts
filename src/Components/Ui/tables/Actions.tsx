import React, { useMemo } from "react";
import { Edit, Trash } from "react-feather";
import { useTranslation } from "react-i18next";
import { usePageState } from "../../../Layout/Dashboard/state";
import confirmAlert from './ConfirmAlert'
import { toast } from "react-toastify";


interface TableActionsProps {
  onDelete: () => void;
  onEdit: () => any;
  showEdit?: boolean;
  showDelete?: boolean;
  children?: React.ReactNode;
}

const Actions: React.FC<TableActionsProps> = ({ onDelete, onEdit, showEdit = true, showDelete = true, children, ...props }) => {
  const [t] = useTranslation();
  const options = useTranslatedLabels();
  const { setObjectToEdit, setIsOpenEditModel } = usePageState();

  return (
    <>
      <div className="data-list-action" >

        {showEdit &&
          <Edit onClick={() => {
            const row = onEdit();
            setIsOpenEditModel();
            setObjectToEdit(row);
          }}
            className="cursor-pointer m-1" size={20} />
        }

        {showDelete &&
          <Trash
            onClick={() =>
              confirmAlert({
                onConfirm: () => {
                  toast.info(t("_loading.delete"));
                  onDelete();
                },
                ...options,
              })
            }
            className="cursor-pointer"
            size={20}
          />
        }

        {children}
      </div>
    </>
  );
};

export default Actions;





export const useUpdateTranslatedLabels = () => {
  const [t] = useTranslation();

  return useMemo(
    () => ({
      title: t("_currency.update_are_you_sure"),
      confirmBtnText: t("_currency.yes_update_it"),
      cancelBtnText: t("_currency.cancel"),
      body: t("_currency.body"),
    }),
    [t]
  );
};



export const useTranslatedLabels = () => {
  const [t] = useTranslation();

  return useMemo(
    () => ({
      title: t("delete_are_you_sure"),
      confirmBtnText: t("yes_delete_it"),
      cancelBtnText: t("cancel"),
      body: t("no_revert"),
    }),
    [t]
  );
};
