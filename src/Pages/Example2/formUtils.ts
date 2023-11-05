import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
  name:string,
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


}
interface ValidateSchema  extends formUtilCommon{

}

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {
 
  

  return {
    name:objectToEdit?.name?? "name" ,
    number:objectToEdit?.number?? "" ,
    date:objectToEdit?.date?? "" ,
    time:objectToEdit?.time?? "" ,
    CheckBox:objectToEdit?.CheckBox?? 1 ,
    select:objectToEdit?.select ,
    Multiselect:objectToEdit?.Multiselect ,
    DateFrom:objectToEdit?.DateFrom ,
    DateTo:objectToEdit?.DateTo ,
    CheckBox2:objectToEdit?.CheckBox2 ,

    
    


  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    name:Yup.string().required('is required '),
    number:Yup.string().required('is required '),
    date:Yup.string().required('is required '),
    time:Yup.string().required('is required '),
    select:Yup.object().required('is required '),
  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  
  
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};
