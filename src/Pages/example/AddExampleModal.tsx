import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormExample from './FormExample'
import { useAddExample } from '../../api/example'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtils'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'

function AddExampleModal() {


  const [t] = useTranslation()
  const {mutate , status} = useAddExample()
  const handelSubmit = (values:any )=>{

    const dataToSend = getDataToSend(values)

    mutate(dataToSend)
    // Submit Value
  }
  return (
    <LayoutModal
    
     isAddModal={true}
     getInitialValues={getInitialValues()} 
     handleSubmit={handelSubmit} 
     status={status as QueryStatusEnum}
     headerText={`${t('Add')} ${t('example')}`}
     
     getValidationSchema={getValidationSchema()}>

    <FormExample />
  </LayoutModal>
  )
}

export default AddExampleModal