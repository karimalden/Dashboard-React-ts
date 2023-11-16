
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormTest2 from './FormTest2'
import { getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state'

function EditTest2Modal() {
  const {objectToEdit} = usePageState()
  return (
    <LayoutModal 
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={() => { }}
     isLoading={false}
     headerText='Edit Modal' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormTest2 />
    </LayoutModal>
  )
}

export default EditTest2Modal
