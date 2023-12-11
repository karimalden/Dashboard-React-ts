
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
  name: string,
  status: any
}

interface ObjectToEdit extends formUtilCommon {

  id?: number,

}

interface InitialValues extends ObjectToEdit {

}
interface ValidateSchema extends formUtilCommon {

}

export const getInitialValues = (objectToEdit: any | null = null): any => {
  console.log(objectToEdit?.images[0]?.media_path, "objectToEdit");

  return {
    id: objectToEdit?.id ?? 0,
    image: objectToEdit?.image ?? "",
    full_name: objectToEdit?.full_name ?? "",
    code: objectToEdit?.code ?? "",
    wallet: objectToEdit?.wallet ?? "",
    city: objectToEdit?.city?.google_short_name ?? "",
    status: objectToEdit?.status ?? "",
    block_timer: objectToEdit?.block_timer ?? "",
    birthday: objectToEdit?.birthday ?? "",
    phone: objectToEdit?.phone ?? "",
    gender: objectToEdit?.gender ?? "",
    avatar: objectToEdit?.avatar ?? "",
    created_at: objectToEdit?.created_at ?? "",

    //// Bacic info
    car_type: objectToEdit?.car_type ?? "",
    car_model: objectToEdit?.car_model ?? "",
    car_seat_count: objectToEdit?.car_seat_count ?? "",
    car_color: objectToEdit?.car_color ?? "",

    //// images 
    car_front: objectToEdit?.images[0]?.media_path ?? "",
    car_right: objectToEdit?.images[1]?.media_path ?? "",
    car_internal: objectToEdit?.images[2]?.media_path ?? "",
    car_back: objectToEdit?.images[3]?.media_path ?? "",
    car_left: objectToEdit?.images[4]?.media_path ?? "",
    car_internal_back: objectToEdit?.images[5]?.media_path ?? "",

    //// Driver info
    license_front_image: objectToEdit?.images[6]?.media_path ?? "",
    license_backe: objectToEdit?.images[7]?.media_path ?? "",
    nationality_front: objectToEdit?.images[8]?.media_path ?? "",
    residential_card: objectToEdit?.images[9]?.media_path ?? "",
    nationality_back: objectToEdit?.images[10]?.media_path ?? "",
    yearly_back: objectToEdit?.images[11]?.media_path ?? "",
    yearly_front: objectToEdit?.images[12]?.media_path ?? "",

    
    
    
    
    
    






















  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
  // validate input  
  return Yup.object().shape({
    name: Yup.string().required('required'),
    status: Yup.boolean().required("status")
  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };


  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

