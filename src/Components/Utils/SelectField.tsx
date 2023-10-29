import React from "react";
import Select from "react-select";
import { ValidatedField } from "./ValidatedField";
import { useFormikContext } from "formik";

const SelectField = ({ label, name, options, ...props }:any) => {
  const formik = useFormikContext<any>();

  return (
    <ValidatedField
      CustomField={Select}
      label={label}
      name={name}
      className="React"
      classNamePrefix="select"
      options={options || []}
      value={options?.find((opt:any) => opt.value === formik?.values[name]) || ""}
      onChange={(opt:any) => formik.setFieldValue(name, opt.value)}
      onBlur={() => formik.setFieldTouched(name)}
      key={name}
      {...props}
    />
  );
};


export default SelectField;


