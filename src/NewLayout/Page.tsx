import {  DashHeader, LyTable, AddModel, EditModel, ModelForm, createFormDataHandler,useMixApi} from './'
const Page = ({ name,api, column, InitialValues, ValidationSchema, DataToSend, EditModelData, AddModelData }: any) => {
const {getInitialValues,getValidationSchema,getDataToSend} = createFormDataHandler(ValidationSchema, DataToSend, InitialValues);
const {GetMutation ,AddMutation , EditMutation} = useMixApi(api)
const Modelprops = { getInitialValues, getValidationSchema, getDataToSend, AddMutation, EditMutation,name };
    return (
        <div className='page'>
            <DashHeader>   {name} </DashHeader>
            <LyTable columns={column} GetMutation={GetMutation} />
            <AddModel {...Modelprops}>
             <ModelForm ModelData={AddModelData} />
            </AddModel>
            <EditModel {...Modelprops}> 
            <ModelForm ModelData={EditModelData} />
            </EditModel>
        </div>
    )}
export default Page


