import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormExample from './FormExample'
import { getInitialValues, getValidationSchema } from './formUtils'
import { usePageState } from '../../Layout/Dashboard/state'

function EditExampleModal() {
  const {objectToEdit} = usePageState()
  return (
    <LayoutModal 
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={() => { }}
     isLoading={false}
     headerText='Edit Modal' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormExample />
    </LayoutModal>
  )
}

export default EditExampleModal