const { exec } = require('child_process');


const fileName = process.argv[2]


const CreateApi =  `node  src/Extensions/FileGenerator/generateApi.js ${fileName}`
const CreatePage =  `node  src/Extensions/FileGenerator/generatePage.js ${fileName}`
const CreateColumn =  `node  src/Extensions/FileGenerator/generateColumn.js ${fileName}`
const CreateformUtil=  `node  src/Extensions/FileGenerator/generateformUtils.js ${fileName}`
const CreateAddModal=  `node  src/Extensions/FileGenerator/generateAddModal.js ${fileName}`
const CreateEditModal=  `node  src/Extensions/FileGenerator/generateEditModal.js ${fileName}`
const CreateForm=  `node  src/Extensions/FileGenerator/generateForm.js ${fileName}`



const RunCommand = async()=>{

     exec(CreatePage)
     exec(CreateApi)
     setTimeout(()=>{},100)
     exec(CreateColumn)
     exec(CreateformUtil)
     exec(CreateAddModal)
     exec(CreateEditModal)
     exec(CreateForm)




} 

RunCommand()
