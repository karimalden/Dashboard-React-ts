const fs = require('fs');

// Get the file name from the command line arguments
const fileName = process.argv[2];

// Check if a file name is provided
if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

const folderPath = 'src/Pages/'+fileName;


if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
}

let FileContiner = `
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGet${capitalizeFirstLetter(fileName)}} from '../../api/${fileName}'
import { QueryStatusEnum } from '../../config/QueryStatus'
import Edit${capitalizeFirstLetter(fileName)}Modal from './Edit${capitalizeFirstLetter(fileName)}Modal'
import Add${capitalizeFirstLetter(fileName)}Modal from './Add${capitalizeFirstLetter(fileName)}Modal'

function ${capitalizeFirstLetter(fileName)}Page() {

    const column   =useTableColumns()
    const {data  ,status } = useGet${capitalizeFirstLetter(fileName)}()

    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'${capitalizeFirstLetter(fileName)}'}></DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
    />
      
    <Edit${capitalizeFirstLetter(fileName)}Modal />
    <Add${capitalizeFirstLetter(fileName)}Modal />
    </DashBody>
  )
}

export default ${capitalizeFirstLetter(fileName)}Page

`

fs.writeFileSync('src/Pages/'+fileName+"/"+capitalizeFirstLetter(fileName)+"Page.tsx", 
FileContiner
);

console.log(`File "${fileName}" generated successfully.`);


function capitalizeFirstLetter(word) {
    return (word).charAt(0).toUpperCase() + (word).slice(1);
}