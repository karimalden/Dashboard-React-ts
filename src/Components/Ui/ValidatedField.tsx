import React from 'react';
import { ErrorMessage, useField, Field } from 'formik';
import {  FormGroup } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const ValidatedField: React.FC<any> = ({
  name,
  label,
  icon: Icon,
  optional,
  labelIcon = null,
  formProps,
  type,   
 
  ...props
}) => {
  const [field, meta] = useField({ name, ...props });
  const [t] = useTranslation();

  return (
    <div key={name}>
      {label && type !== 'hidden' && ( // Use type from props
        <label htmlFor={name}>
          {label} {labelIcon}
        </label>
      )}
      <FormGroup className={Icon ? 'position-relative has-icon-left' : ''} {...formProps}>
        <Field
          className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
          {...field}
          {  ...props}
        />
        {Icon && (
          <div className="form-control-position">
            <Icon size={15} />
          </div>
        )}
        <ErrorMessage name={field.name}>
          {(msg:any) => <span className="field-error text-danger">{t(msg)}</span>}
        </ErrorMessage>
      </FormGroup>
    </div>
  );
};

export { ValidatedField };
