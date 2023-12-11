import { Button, Form, Upload, UploadFile } from 'antd'
import React from 'react'
import useFormField from '../../../Hooks/useFormField';
import { UploadOutlined } from '@ant-design/icons';
import { BaseURL } from '../../../api/Route/config';


const File = ({ name, label, placeholder,onChange, isDisabled, props }: any) => {

  const { formik, errorMsg, isError, t } = useFormField(name, props)
    const imageUrl = BaseURL+formik.values[name];

const fileList: UploadFile[] = [
 
  {
    uid: '-1',
    name: !(formik.values[name]) ? `Choose Your Image` : ``,
    status: 'done',
    url: imageUrl,
    thumbUrl: imageUrl,
  }
];
  const FilehandleChange = (value: { value: string; label: React.ReactNode }) => {
     formik.setFieldValue(name, value)

  };
    const customRequest = async ({ onSuccess, file }: any) => {
    onSuccess();
  };
  return (
    <div className="KarimField">
      <label htmlFor={name} className="text">
        {t(`${label ?  label  : name}`)}
      </label>
      <Form.Item
        hasFeedback
        validateStatus={isError ? "error" : ""}
        help={isError ? (errorMsg) : ""}
      >
           <Upload

      listType="picture"
      maxCount={1}
      className='w-100'
      defaultFileList={[...fileList]}
      onChange={onChange || FilehandleChange}
      customRequest={customRequest}

    >
      <Button className='w-100' icon={<UploadOutlined />}>Upload</Button>
    </Upload>
      </Form.Item>



    </div>
  )
}

export default File