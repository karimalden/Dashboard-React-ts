import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";


interface ObjectToEdit {

    id?:number
}

interface InitialValues {
  id?:number
}
interface ValidateSchema {
    id?:number
  }

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {
 

  return {
    id:objectToEdit?.id?? 1
  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    id:Yup.number()
  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  if (values.image === "") {
    delete data["category_image"];
  }
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};
