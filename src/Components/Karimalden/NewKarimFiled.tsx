import "./KarimField.scss";
import {Date,Time,File,DataRange,SelectField,Default} from './View';

export type KarimFieldProps = {
  name: string;
  type?: "text" | "Select" | "DataRange" | "Date" | "Time" | "File";
  placeholder?: string;
  label?: string;
  className?: string;
  option?: any[];
  isMulti?: boolean;
  disabled?: boolean;
  props?: any;
  picker?: "data" | "week" | "month" | "quarter" | "year"
  Format?: "YYYY/MM/DD" | "MM/DD" | "YYYY/MM"
};

const NewKarimField = (props: KarimFieldProps) => {

  switch (props?.type) {
    case ('Select'): return <SelectField {...props} />
    case ("DataRange") : return <DataRange {...props}  /> ;
    case ("Date") : return <Date {...props}  /> ;
    case ("Time") : return <Time {...props}  /> ;
    case ("File") : return <File {...props}  /> ;

    default: return <Default {...props} />;
  }
};

NewKarimField.defaultProps = {
  type: "string",
  placeholder: 'Default Placeholder',
  label: 'Default Label',
  className: 'default-class',
  option: [],
  isMulti: false,
  disabled: false,
  props: {},
  picker:"date",
  Format:"YYYY/MM/DD"
};

export default NewKarimField;
