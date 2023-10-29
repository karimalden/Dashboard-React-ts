import { DashHeader, LyTable, AddModel, EditModel } from '../../Layout/app/Export'
import { useAddDynamik } from '../../api/ApiHooks/Add';
import { useEditDynamik } from '../../api/ApiHooks/Edit';
import { useGetDynamik } from '../../api/ApiHooks/Get';
import { getInitialValues, getValidationSchema, getDataToSend, AddBody,useTableColumns,EditBody} from './index'

const Products = () => {
    const column: any = useTableColumns()
    const { data } = useGetDynamik("users")
    const AddMutation = useAddDynamik("users")
    const EditMutation = useEditDynamik("users")

    const Modelprops = { getInitialValues, getValidationSchema, getDataToSend ,AddMutation,EditMutation};
    return (
        <div className='page'>
            {/* <DashHeader>   Right </DashHeader>
            <LyTable column={column} data={data} />
            <AddModel {...Modelprops}>  <AddBody /> </AddModel>
            <EditModel {...Modelprops}>  <EditBody /> </EditModel> */}
        </div>
    )
}

export default Products