import { Switch } from 'antd'
import React from 'react'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useFormikContext } from 'formik';
export interface ColumnsSwitchProps {
  name: string;
  Front?: string;
  Back?: string;
  onChange?: (checked:any,event:any) => any;
  icon?: boolean
  Checked?:boolean

}
const ColumnsSwitch = (props: ColumnsSwitchProps) => {
  const { name, Front, Back, icon, onChange } = props;
    const formik = useFormikContext<any>();
    const onSwitchChange = (checked: boolean, event: Event) => {
    // formik.setFieldValue("status", checked)

    

  };
  return (
    <Switch
      checkedChildren={icon ? <CheckOutlined /> : Front}
      unCheckedChildren={icon ? <CloseOutlined /> : Back}
      onChange={ (checked:any,event:any)=> onChange ? onChange(checked,event) : onSwitchChange(checked,event)}
    />
  )
}

export default ColumnsSwitch


ColumnsSwitch.defaultProps = {
  Front: "Front",
  Back: "Back",
  onChange: undefined,
  icon: false,
  Checked:false

};