
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
  name:string,
  email:string 
}

interface ObjectToEdit extends formUtilCommon {

    id?:number,

}

interface InitialValues extends ObjectToEdit {

}
interface ValidateSchema  extends formUtilCommon{

}

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {
 

  return {
    id:objectToEdit?.id?? 0 ,
    name:objectToEdit?.name ?? "",
    email:objectToEdit?.email?? ""
  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    name:Yup.string().required('required'),
    email:Yup.string().required("required")
  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  
  
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

