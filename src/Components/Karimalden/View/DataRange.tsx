import { Form, DatePicker } from 'antd'

import React from 'react'
import useFormField from '../../../Hooks/useFormField';

const { RangePicker } = DatePicker;

const DataRange = ({ name, label, isDisabled, option, isMulti,Format ,props }: any) => {

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
            <RangePicker
            allowClear
            className='w-100'
            format={Format}
            onCalendarChange={onCalendarChange}
            />


      </Form.Item>
    </div>
  )
}

export default DataRange