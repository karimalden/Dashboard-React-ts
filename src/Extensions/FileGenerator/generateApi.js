const fs = require('fs');

const fileName = process.argv[2]


if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}


let FileContiner = `
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"
  
  const API = {
    GET: "/${fileName}",
    ADD: "/${fileName}/create",
    UPDATE: "/${fileName}/update",
    DELETE: "/${fileName}/delete",
  };
  
   
  const KEY = "${fileName.toUpperCase()}";
  export const useGet${capitalizeFirstLetter(fileName)} = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAdd${capitalizeFirstLetter(fileName)} = () => useAddMutation(KEY, API.ADD);
  export const useUpdate${capitalizeFirstLetter(fileName)} = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDelete${capitalizeFirstLetter(fileName)} = () =>useDeleteMutation(KEY, API.DELETE);
`
fs.writeFileSync('src/api/'+fileName+".ts", 
FileContiner
);

console.log(`File "${fileName}" generated successfully.`);


function capitalizeFirstLetter(word) {
    return (word).charAt(0).toUpperCase() + (word).slice(1);
}