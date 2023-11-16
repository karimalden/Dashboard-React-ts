

import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormTest2 from './FormTest2'
import { useAddTest2 } from '../../api/test2'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'

function AddTest2Modal() {


  const [t] = useTranslation()
  const {mutate , status} = useAddTest2()
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
     headerText={t('Add') +t('test2')}
     
     getValidationSchema={getValidationSchema()}>

    <FormTest2 />
  </LayoutModal>
  )
}

export default AddTest2Modal

