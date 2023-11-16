

import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormTest from './FormTest'
import { useAddTest } from '../../api/test'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'

function AddTestModal() {


  const [t] = useTranslation()
  const {mutate , status} = useAddTest()
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
     headerText={t('Add') +t('test')}
     
     getValidationSchema={getValidationSchema()}>

    <FormTest />
  </LayoutModal>
  )
}

export default AddTestModal

