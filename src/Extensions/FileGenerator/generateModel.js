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
import { useAdd${capitalizeFirstLetter(fileName)} } from '../../api/${(fileName)}'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'

function Add${capitalizeFirstLetter(fileName)}Modal() {


  const [t] = useTranslation()
  const {mutate , status} = useAdd${capitalizeFirstLetter(fileName)}()
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
     headerText={t('Add') +t('${(fileName)}')}
     
     getValidationSchema={getValidationSchema()}>

    <Form${capitalizeFirstLetter(fileName)} />
  </LayoutModal>
  )
}

export default Add${capitalizeFirstLetter(fileName)}Modal

`
fs.writeFileSync('src/Pages/'+fileName+"/"+"Add"+ capitalizeFirstLetter(fileName)+"Modal.tsx", 
FileContiner
);

console.log(`File "${fileName}" generated successfully.`);





function capitalizeFirstLetter(word) {
  return (word).charAt(0).toUpperCase() + (word).slice(1);
}