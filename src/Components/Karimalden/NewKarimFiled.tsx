import React from "react";
import "./KarimField.scss";
import { Date, Time, File, DataRange, SelectField, Default, CheckboxField } from './View';

export interface KarimFieldProps {
  name: string;
  type?: "text" | "Select" | "DataRange" | "Date" | "Time" | "File" | "number" | "Checkbox";
  placeholder?: string;
  label?: string;
  className?: string;
  option?: any[];
  isMulti?: boolean;
  disabled?: boolean;
  picker?: "data" | "week" | "month" | "quarter" | "year";
  Format?: "YYYY/MM/DD" | "MM/DD" | "YYYY/MM";
  onChange?: (value: any) => void;
  Group?: boolean
}

const NewKarimField = (props: KarimFieldProps) => {
  switch (props?.type) {
    case 'Select':
      return <SelectField {...props} />;
    case "DataRange":
      return <DataRange {...props} />;
    case "Date":
      return <Date {...props} />;
    case "Time":
      return <Time {...props} />;
    case "File":
      return <File {...props} />;
       case "Checkbox":
      return <CheckboxField {...props} />;
    default:
      return <Default {...props} />;
  }
};

NewKarimField.defaultProps = {
  type: "text",
  placeholder: 'Default Placeholder',
  label: 'Default Label',
  className: 'default-class',
  option: [],
  isMulti: false,
  disabled: false,
  picker: "date",
  Format: "YYYY/MM/DD",
  onChange: undefined,
  Group:false

};

export default NewKarimField;
