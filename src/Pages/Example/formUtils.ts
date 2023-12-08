import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
  // name:string,
}

interface ObjectToEdit extends formUtilCommon {

  name : any
  number : any
  date : any
  time : any
CheckBox:any
select:any
Multiselect:any
DateFrom:any
DateTo:any
CheckBox2:any

file:any
}

interface InitialValues extends ObjectToEdit {
  name : any
number : any
date : any
time : any
CheckBox:any
select:any
Multiselect:any
DateFrom:any
DateTo:any
CheckBox2:any
file:any

}
interface ValidateSchema  extends formUtilCommon{

}
const today = new Date()

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {  
  return {
    name:objectToEdit?.name?? "" ,
    number:objectToEdit?.number?? "" ,
    date:objectToEdit?.date?? [],
    time:objectToEdit?.time?? "" ,
    CheckBox:objectToEdit?.CheckBox?? 1 ,
    select:objectToEdit?.select ?? [ {  value : 1,  label : "default value"}],
    Multiselect:objectToEdit?.Multiselect ,
    DateFrom:objectToEdit?.DateFrom ,
    DateTo:objectToEdit?.DateTo ,
    CheckBox2:objectToEdit?.CheckBox2 ,
    file:objectToEdit?.file ??"",

    


  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    // file:Yup.string().required('is required '),
    
    name:Yup.string().required('is required '),
    // date:Yup.array().required('is required '),
    // time:Yup.string().required('is required '),
    // select:Yup.array().required('is required '),
  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  
  
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};
