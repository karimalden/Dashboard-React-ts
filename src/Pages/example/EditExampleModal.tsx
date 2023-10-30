import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'

function EditExampleModal() {
  return (
    <LayoutModal 
     isAddModal={false}
     getInitialValues={{}} 
     handleSubmit={() => { }}
     isLoading={false}
     headerText='Edit Modal' 
     getValidationSchema={{}}>
      hello world
    </LayoutModal>
  )
}

export default EditExampleModal