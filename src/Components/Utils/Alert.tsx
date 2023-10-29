import React from "react";
import { confirmAlert } from "react-confirm-alert";
import SweetAlert from "react-bootstrap-sweetalert";

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


  return (
    <div className="SweetAlert">
  <SweetAlert
      title={options.title || `DELETE, Are you sure?`}
      warning
      show={true}
      showCancel
      reverseButtons
      cancelBtnBsStyle="danger"
      confirmBtnText={options.confirmBtnText || "Yes, delete it!"}
      cancelBtnText={options.cancelBtnText || "Cancel"}
      onConfirm={() => {
        options.onConfirm();
        onClose();
      }}
      onCancel={onClose}
      
    />
    </div>
  
  );
}
