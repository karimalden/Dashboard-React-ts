import { DashHeader, LyTable, AddModel, EditModel } from '../../Layout/app/Export'

import { getInitialValues, getValidationSchema, getDataToSend, AddBody,useTableColumns,EditBody} from './index'

const Users = () => {
    const column: any = useTableColumns()
    const Data :any = []
    const AddMutation=()=>{}
    const EditMutation =()=>{}

    const Modelprops = { getInitialValues, getValidationSchema, getDataToSend ,AddMutation,EditMutation,name:""};
    return (
        <div className='page'>
            <DashHeader>   Right </DashHeader>
            <LyTable column={column} data={Data} />
            <AddModel {...Modelprops}>  <AddBody /> </AddModel>
            <EditModel {...Modelprops}>  <EditBody /> </EditModel>
        </div>
    )
}

export default Users