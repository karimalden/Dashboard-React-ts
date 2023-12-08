import { Button, Form, Upload, UploadFile } from 'antd'
import React from 'react'
import useFormField from '../../../Hooks/useFormField';
import { UploadOutlined } from '@ant-design/icons';


const File = ({ name, label, placeholder, isDisabled, props }: any) => {

  const { formik, errorMsg, isError, t } = useFormField(name, props)
const fileList: UploadFile[] = [
 
  {
    uid: '-1',
    name: 'Choose Your Image',
    status: 'done',
    url: '',
    thumbUrl: '',
  }
];
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
        {/* <Field
          as={Input}
          type="file"
          placeholder={t(`${placeholder}`)}
          name={name}
          disabled={isDisabled}

        /> */}
           <Upload
      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
      listType="picture"
      maxCount={1}
      className='w-100'
      defaultFileList={[...fileList]}

    >
      <Button className='w-100' icon={<UploadOutlined />}>Upload</Button>
    </Upload>
      </Form.Item>



    </div>
  )
}

export default File