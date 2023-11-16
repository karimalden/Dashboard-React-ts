
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormTest from './FormTest'
import { getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../Layout/Dashboard/state'

function EditTestModal() {
  const {objectToEdit} = usePageState()
  return (
    <LayoutModal 
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={() => { }}
     isLoading={false}
     headerText='Edit Modal' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormTest />
    </LayoutModal>
  )
}

export default EditTestModal
