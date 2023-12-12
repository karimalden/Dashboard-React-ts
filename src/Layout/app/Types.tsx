export  interface FormTableState {
    objectToEdit: any[]; 
    OpenEdit: boolean;
    OpenAdd: boolean;
  }

  export type KarimFieldProps = {
    name: string;
    name2?: string;
    type: string;
    placeholder?: string;
    label?: string;
    className?: string;
    option?: any;
    isMulti?: boolean;
    Disabled?: boolean;
    group ? : boolean;
    dir?:'rtl' | 'ltr'
  };