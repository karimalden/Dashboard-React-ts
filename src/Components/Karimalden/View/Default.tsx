import { Form, Input } from 'antd'
import React from 'react'
import useFormField from '../../../Hooks/useFormField';

const Default = ({ name, label, placeholder, isDisabled, props }: any) => {

  const { Field, errorMsg, isError, t } = useFormField(name, props)

  return (
    <div className="KarimField">
      <label htmlFor={name} className="text">
        {t(`${label}`)}
      </label>
      <Form.Item
        hasFeedback
        validateStatus={isError ? "error" : ""}
        help={isError ? (errorMsg) : ""}
      >
        <Field
          as={Input}
          type="text"
          placeholder={t(`${placeholder}`)}
          name={name}
          disabled={isDisabled}

        />
      </Form.Item>



    </div>
  )
}

export default Default