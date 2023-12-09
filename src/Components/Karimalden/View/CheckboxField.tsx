import React from 'react'
import useFormField from '../../../Hooks/useFormField';
import { Checkbox } from 'antd';

const CheckboxField = ({ name, label, placeholder, isDisabled, option, isMulti, onChange,Group, props }: any) => {

  const { t, formik } = useFormField(name, props)
  const CheckboxhandleChange = (value: { value: string; label: React.ReactNode }) => {
    formik.setFieldValue(name, value)

  };
  return (
    <div className={Group ? "d-inline mt-3 Checkboxs" :``}>
      <Checkbox
        onChange={onChange || CheckboxhandleChange}
        disabled={isDisabled}


      >
        {t(label)}
      </Checkbox>

    </div>
  )
}

export default CheckboxField