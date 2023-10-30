import React from "react";
import { confirmAlert } from "react-confirm-alert";
import SweetAlert from "react-bootstrap-sweetalert";

interface CustomUIProps {
  onClose: () => void;
  options: {
    title?: string;
    confirmBtnText?: string;
    cancelBtnText?: string;
    onConfirm: () => void;
    body?: string;
  };
}

export default function CustomConfirmAlert(options: any) {
  confirmAlert({
    customUI: ({ onClose }) => <CustomUI onClose={onClose} options={options} />,
  });
}

function CustomUI({ onClose, options }: CustomUIProps) {
  const sweetAlertProps: any = {
    title: options.title || `DELETE, Are you sure?`,
    warning: true,
    show: true,
    showCancel: true,
    reverseButtons: true,
    cancelBtnBsStyle: "danger",
    confirmBtnText: options.confirmBtnText || "Yes, delete it!",
    cancelBtnText: options.cancelBtnText || "Cancel",
    onConfirm: () => {
      options.onConfirm();
      onClose();
    },
    onCancel: onClose,
  };

  return <SweetAlert {...sweetAlertProps}>{options.body || "You won't be able to revert this!"}</SweetAlert>;
}
