import React from "react";
import { useTranslation } from "utility/language";
import Actions from "components/table/TableActions";
import HovarableImage from "components/HovarableImage";
import { baseURL } from "api/config";
import { ToggleStatus } from "components/ToggleStatus";

const useTableColumns = ({ Row, setobjectToEdit, setisOpen, deleteMutation, toggleMutation }) => {
  const t = useTranslation();

  const getImageColumn = (key) => ({
    name: t("image"),
    sortable: false,
    center: true,
    cell: (row) => (
      <span style={{ marginTop: "10px" }}>
        <HovarableImage
          src={`${baseURL}/images/${row[key.name]}`}
          width="100"
        />
      </span>
    ),
  });

  const getStatusColumn = () => ({
    name: t("status"),
    sortable: false,
    center: true,
    cell: (row) => {
      row["is_active"] = row?.is_blocked;
      return <ToggleStatus object={row} toggleMutation={toggleMutation} />;
    },
  });

  const getDefaultColumn = (key) => ({
    name: t(key.name),
    center: key.center ? false : true,
    width: key.Width,
    maxWidth: "auto",
    selector: key.name,
  });

  const getActionColumn = () => ({
    name: "#",
    sortable: false,
    center: true,
    cell: (row) => (
      <span className="Actions">
        <Actions
          onEdit={() => {
            setisOpen(true);
            setobjectToEdit(row);
          }}
          onDelete={() => deleteMutation.mutate({ id: row.id })}
        />
      </span>
    ),
  });

  return Row?.map((key) => {
    switch (key.name) {
      case "image":
        return getImageColumn(key);
      case "status":
        return getStatusColumn();
      case "#":
        return getActionColumn();
      default:
        return getDefaultColumn(key);
    }
  });
};

export default useTableColumns;