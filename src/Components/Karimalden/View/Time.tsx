import { Form, TimePicker } from 'antd'
import React from 'react'
import useFormField from '../../../Hooks/useFormField';

const Time = ({ name, label,props }: any) => {

  const { errorMsg, isError, t, formik } = useFormField(name, props)
  const onCalendarChange = (value: any) => {
    
    formik.setFieldValue(name, value)

  };
  return (

    <div className='KarimField'>
      <label htmlFor={name} className="text">
        {t(`${label}`)}
      </label>
      <Form.Item
        hasFeedback
        validateStatus={isError ? "error" : ""}
        help={isError ? errorMsg : ""}
      >
              <TimePicker
                allowClear
                className='w-100'
                defaultValue={formik.values[name]}
              onChange={onCalendarChange} />
              



      </Form.Item>
    </div>
  )
}

export default Time