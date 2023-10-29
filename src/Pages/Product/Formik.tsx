// import * as Yup from "yup";

export const getInitialValues : any = (objectToEdit : any) => {
    return {
      id :objectToEdit?.id ?? "",
      name :objectToEdit?.name ?? "",
     

    };
  

};

export const getValidationSchema = () => {
  // return Yup.object().shape({
  //   name:Yup.string().required('Required'),
  //   password:Yup.string().required('Required'),
  //   email:Yup.string().required('Required'),

  // });
};

export const getDataToSend = (values : any) => {
      const data = { ...values };

  // const formData = new FormData();
  // buildFormData(formData, data);
  // return formData;
  return data
};

