import React from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "reactstrap";

const StatusBadge = ({ status }:any) => {
  const [t] = useTranslation();

  return (
    <Badge color={status ? "success" : "danger"}>
      {status ? t("active") : t("inacticve")}
    </Badge>
  );
};



export default StatusBadge;
