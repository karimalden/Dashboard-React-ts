import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'

function AddExampleModal() {
  return (
    <LayoutModal
     isAddModal={true}
     getInitialValues={{}} 
     handleSubmit={() => { }} 
     isLoading={false}
     headerText='Add Modal'
     
     getValidationSchema={{}}>

    <div>
      hello
    </div>
  </LayoutModal>
  )
}

export default AddExampleModal