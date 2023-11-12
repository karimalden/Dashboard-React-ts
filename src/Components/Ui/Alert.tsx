import React from "react";
import { confirmAlert } from "react-confirm-alert";
import SweetAlert from "react-bootstrap-sweetalert";
import { useTranslation } from "react-i18next";

export default function CustomConfirmAlert(options : any) {
  confirmAlert({
    customUI: ({ onClose }) => <CustomUI onClose={onClose} options={options} />,
  });
}

type CustomUIProps ={
    onClose :()=> void
    options:{
        title?:string
        confirmBtnText:string 
        cancelBtnText:string 
        body:string
        onConfirm:()=>void 


    }
}
function CustomUI({ onClose, options }:CustomUIProps) {


  const [t] = useTranslation()
  return (
    <div className="">
  <SweetAlert
      title={options.title || t(`delete_are_you_sure`)}
      customClass="SweetAlert"
      warning
      show={true}
      showCancel
      reverseButtons
      cancelBtnBsStyle="danger"
      confirmBtnText={options.confirmBtnText || t("yes_delete_id")}
      cancelBtnText={options.cancelBtnText || t("cancel")}
      onConfirm={() => {
        options.onConfirm();
        onClose();
      }}
      onCancel={onClose}
      
    />
    </div>
  
  );
}
