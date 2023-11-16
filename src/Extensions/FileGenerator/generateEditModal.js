const fs = require('fs');

// Get the file name from the command line arguments
const fileName = process.argv[2];

// Check if a file name is provided
if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

let FileContiner = `
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import Form${capitalizeFirstLetter(fileName)} from './Form${capitalizeFirstLetter(fileName)}'
import { getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state'

function Edit${capitalizeFirstLetter(fileName)}Modal() {
  const {objectToEdit} = usePageState()
  return (
    <LayoutModal 
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={() => { }}
     isLoading={false}
     headerText='Edit Modal' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <Form${capitalizeFirstLetter(fileName)} />
    </LayoutModal>
  )
}

export default Edit${capitalizeFirstLetter(fileName)}Modal
`
fs.writeFileSync('src/Pages/'+fileName+"/"+"Edit"+ capitalizeFirstLetter(fileName)+"Modal.tsx", 
FileContiner
);

console.log(`File "${fileName}" generated successfully.`);





function capitalizeFirstLetter(word) {
  return (word).charAt(0).toUpperCase() + (word).slice(1);
}