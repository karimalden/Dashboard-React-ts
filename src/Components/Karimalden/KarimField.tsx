import { KarimFieldProps } from "../../Layout/app/Types";
import "./KarimField.scss";
import {useState, ErrorMessage, useField, Field, useFormikContext, useTranslation, FaExclamationCircle, Select, convert_data_to_select, } from './'
import { hasValue } from "../../Layout/app/Const";
import { FaUpload } from "react-icons/fa";


const KarimField: React.FC<KarimFieldProps> = ({ name,name2,type,placeholder,label,className = "",option = [],isMulti, Disabled=false ,group, ...props}) => {
  const { t } = useTranslation();
  const [field, meta] = useField({ name, ...props });
  const formik = useFormikContext<any>();

  const isError = meta.touched && meta.error;
  const hasValueClass = hasValue(formik.values[name], type) ? "hasValue" : "";

  const inputClass = isError
    ? `${className} is-invalid`
    : hasValueClass
    ? `${className} hasValue`
    : Disabled
    ? `${className} Disabled `
    : `${className} `;

  const [firstDate, setFirstDate] = useState<string>('');
  const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format

  const handleFirstDateChange = (event: any) => {
    const { value } = event.target;
    setFirstDate(value);
    
  };


  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event:any) => {
    const file = event.currentTarget.files[0];
      formik.setFieldValue(name , file)
      setSelectedFile(file);

  
  };
        
  if (type === "checkbox") {
    return (
      <div className="KarimCheckbox">
        <label className="cont">
          <input
            checked={formik.values[name] === 1}
            type="checkbox"
            name={name}
            onChange={() =>
              formik.setFieldValue(name, formik.values[name] === 1 ? 0 : 1)
            }
          />
          <span />
          {label}
        </label>
      </div>
    );
  } else if (type === "select") {
    return (
      <div className='KarimSelect'>
        <label htmlFor={field.name} className="text">
          {label}
        </label>
        <Field
          as={Select}
          className={inputClass}
          classNamePrefix="react-select"
          name={name}
          value={formik.getFieldProps(name).value}
          onChange={(opt: any) => formik.setFieldValue(name, opt)}
          options={convert_data_to_select(option)}
          isMulti={!!isMulti}
          isDisabled={!!Disabled}
          placeholder={placeholder}
        />
        <ErrorMessage name={name}>
          {(msg: any) => <span className="field-error text-danger">{t(msg)}</span>}
        </ErrorMessage>
      </div>
    );
  } else if (type === "DataRange") {
    return (
      <div className='Datepicker'>
        <div className="KarimField">
          <label htmlFor="firstDate" className="text">
            {"date from"} {""}
          </label>
          <input
            type="date"
            id="firstDate"
            name={name}
            className={inputClass}
            value={firstDate}
            onChange={handleFirstDateChange}
            min={today}
          />
        </div>
        <div className="KarimField">
          <label htmlFor="secondDate" className="text">
            {firstDate === "" ? `select ${name2}` : "date to"}
          </label>
          <input
            type="date"
            id="secondDate"
            name={name2}
            className={inputClass}
            min={firstDate}
            readOnly={firstDate === "" ? true : false}
          />
        </div>
      </div>
    );
  } else if (type === "file") {
    return (
      <div className="KarimField">
      <label htmlFor={name} className="text">
        {isError ? <span className='isErrorIcon'> <FaExclamationCircle /></span> : ""} {label} {""}
        <ErrorMessage name={name}>
          {(msg: any) => <span className="field-error text-danger isErrorIcon">{t(msg)} <FaExclamationCircle /> </span>}
        </ErrorMessage> 
      </label>
      <input
        type={type}
        placeholder={placeholder}
       
        className={selectedFile ?  ` hasValue form-control ` :  ` form-control ` }
          onChange={handleFileChange}

      />
         <div  className={selectedFile ?  ` ImagePreview_hasValue ` :  ` ImagePreview ` }>
      {selectedFile ? (
        <img
          className="p-1"
          style={{
            maxWidth: "100%",
          }}
          height={200}
          src={URL.createObjectURL(formik.values[name] || selectedFile)}
          alt=""
        />
      ) : (
        <div className="image_preview_text">{t("image_preview")}</div>
      )}
    </div>
    </div>
      );
    }
  else {
    return (
      <div className="KarimField">
        <label htmlFor={field.name} className="text">
          {isError ? <span className='isErrorIcon'> <FaExclamationCircle /></span> : ""} {label} {""}
          <ErrorMessage name={field.name}>
            {(msg: any) => <span className="field-error text-danger isErrorIcon">{t(msg)} <FaExclamationCircle /> </span>}
          </ErrorMessage>
        </label>
        <Field
          type={type}
          placeholder={placeholder}
          name={field.name}
          className={inputClass}
          disabled={Disabled}
        />
      
      </div>
    );
  }
};

export default KarimField;

