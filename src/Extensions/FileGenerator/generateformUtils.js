const fs = require('fs');

// Get the file name from the command line arguments
const fileName = process.argv[2];

// Check if a file name is provided
if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

let FileContiner = `
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

`
fs.writeFileSync('src/Pages/'+fileName+"/"+"formUtil.ts", 
FileContiner
);

console.log(`File "${fileName}" generated successfully.`);


function capitalizeFirstLetter(word) {
    return (word).charAt(0).toUpperCase() + (word).slice(1);
}