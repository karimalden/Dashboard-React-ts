import * as Yup from "yup";

// export const FNSchema = (ValidationSchema:any) => {
//     // return Yup.object().shape({
//     //   name:Yup.string().required('Required'),
//     //   password:Yup.string().required('Required'),
//     //   email:Yup.string().required('Required'),
  
//     // });
//   };
  export function FNSchema(schema:any) {
    return Yup.object().shape({
      //  id:Yup.string().required('Required'),
  
     });
  }
  export function FNDataToSend(values:any,DataToSend:any) {
    const data = { ...values };   
    eval(DataToSend);
        return data
  }

  export function FNInitialValues (objectToEdit: any,InitialValues:any){

    const resultObject: any = {};
     InitialValues?.map((property: any) => {
        resultObject[property] = objectToEdit?.[property] ?? null;
    });
    console.log(resultObject);
    return resultObject
}



export function createFormDataHandler(ValidationSchema:any, DataToSend:any, InitialValues:any) {
    function getInitialValues(objectToEdit:any) {
      return FNInitialValues(objectToEdit, InitialValues);
    }
  
    function getDataToSend(values:any) {
      return FNDataToSend(values, DataToSend);
    }
  
    function getValidationSchema() {
      return FNSchema(ValidationSchema);
    }
  
    return {
      getInitialValues,
      getDataToSend,
      getValidationSchema,
    };
  }