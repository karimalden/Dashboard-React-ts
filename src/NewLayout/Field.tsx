import { ErrorMessage, useFormikContext } from 'formik';
import { Check } from "react-feather";
import Select from 'react-select';
import {Checkbox, ImagePreview, SelectField, useImagePreview,ValidatedField} from "../Components/Utils"
import { useTranslation } from 'react-i18next';
import {BaseURL} from '../Layout/app/Const'
import { NewField } from './NewField';

export function Field({ item }:any) {
  const [t] = useTranslation();
  const [value, label] = item?.name.split(".");

  return (
    <ValidatedField
      id={item?.name}
      type={item?.type}
      label={t(value)}
      name={item?.name}
      placeholder={t(value)}

    />
  );
};

export function FieldImg({ item }:any) {
  const formik = useFormikContext();

  const { preview, handleImageChange } = useImagePreview(formik.getFieldProps(item?.name).value);
 const [t] = useTranslation();
 
  return (
    <>
      <input
       id={item?.name} 
       className={`form-control mt-5 mb-4`}
       type="file" 
        name={item?.name} 
        accept="image/*"
        onChange={(e:any) => { handleImageChange(e); formik.setFieldValue(item?.name, e.target.files[0]); }} />

      <ImagePreview preview={preview} height={item?.height} />
    </>

  );
}

export function FieldOption({ item }:any) {
 const [t] = useTranslation();
  const formik = useFormikContext();
  return (
    <>
      <SelectField label={t(item?.name)} options={convert_data_to_select(item?.option)} name={item?.name}
        onChange={(opt:any) => { formik.setFieldValue(item?.name, opt.value) }} isRequired />
    </>


  );
};
export function OptionBy({ item }:any) {
 const [t] = useTranslation();
  const formik = useFormikContext();
  const FillterBy = item?.FillterBy
  const FillterTo = item?.FillterTo

  return (
    <>
        <h6>{t(item?.name || " ")}</h6>

      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        name={item?.name}
        value={formik.getFieldProps(item?.name).value}
        onChange={options => formik.setFieldValue(item?.name, options)}

        options={convert_data_to_select(item?.option?.filter((e:any) => e[FillterBy] == formik.getFieldProps(FillterTo)?.value))}
        // isMulti={true}
      />
      <ErrorMessage name={item?.name}>
        {(msg:any) => <span className="field-error text-danger">{t(msg)}</span>}
      </ErrorMessage>
    </>


  );
};

export const filterDataByDynamicValue = (data:any, searchValue:any, searchKey:any) => {
  let keys : any;
  if (searchKey?.includes('.')) {
    keys = searchKey.split('.');
  } else {
    keys = [searchKey];
  }

  return data.filter((item:any) => {
    let itemValue = item;
    for (const key of keys) {
      itemValue = itemValue?.[key];
    }

    if (typeof itemValue === 'string' && searchValue) {
      return itemValue.toLowerCase().includes(searchValue.toLowerCase());
    } else {
      return false;
    }
  });
};


export const convert_data_to_select = (array = []) => {
  if (typeof array === 'undefined' || !Array.isArray(array)) {
    throw new Error("Expected an array argument")
  }
  let new_array :any = []
  array.map((e:any) => new_array.push({ label: e?.name, value: e?.id ? e?.id : e?.name }))


  return new_array
}

export function convert_data_Search_select(selecter:any) {
  return selecter.map((option:any) => {
    const [value, label] = option.split(".");
    if (value && label) {
      return { value: option, label: `${value}` };
    } else {
      return { value: option, label: option };
    }
  });
}


export function formatTime(input:any) {
  let dateObj;
  if (input instanceof Date) {
    dateObj = input;
  } else if (typeof input === "string") {
    const [hours, minutes, seconds] = input.split(":");
    dateObj = new Date();
    dateObj.setHours(Number(hours));
    dateObj.setMinutes(Number(minutes));
    dateObj.setSeconds(Number(seconds || 0));
  } else {
    dateObj = new Date();
  }
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
}
export function FieldCheckbox({ item }:any) {
 const [t] = useTranslation();
  const formik = useFormikContext<any>();
  return (
    <span className='BoxS'>
      <Checkbox
        color="primary"
        icon={<Check className="vx-icon" size={16} />}
        label={t(item?.name)}
        checked={formik.values[item?.name]}
        onChange={() =>
          formik.setFieldValue(item?.name, (!formik.values[item?.name]) === true ? 1 : 0)
        }
      />
    </span>

  );
};
export function FillterCheckbox({ name, set, value }:any) {
 const [t] = useTranslation();
  return (
    <span className='Fillterbox'>
      <Checkbox
        color="primary"
        icon={<Check className="vx-icon" size={16} />}
        label={t(name)}
        onChange={() => set((value === 1) ? 0 : 1)}
        checked={value}
      />
    </span>
  );
};

export function FieldMultyOption({ item }:any) {
 const [t] = useTranslation();
  const formik = useFormikContext();
  return (
    <>
      <h6>{t(item?.name)}</h6>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        name={`${item?.name}`}
        value={formik.getFieldProps(item?.name).value}
        //  onChange={(opt) => {formik.setFieldValue(item?.name, opt?.value);}}
        onChange={options => formik.setFieldValue(`${item?.name}`, options)}

        options={convert_data_to_select(item?.option)}
        isMulti={true}
        placeholder={t(item?.name)}
      />
    </>


  );
};