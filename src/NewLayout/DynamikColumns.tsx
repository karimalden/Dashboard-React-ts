import { ActionColumn, DefaultColumn, ImageColumn, StatusColumn } from "./ColumnLayout";

const DynamikColumns = (Data:any) => {

  return (
    Data?.map((key:any) => {
    switch (key?.type) {
        case "default":
          return DefaultColumn(key);
          case "action":
          return ActionColumn(key);
          case "toggle":
          return StatusColumn(key);
          case "img":
            return ImageColumn(key);
          default:
            return DefaultColumn(key)
    }
    
  })
  )
    }

export default DynamikColumns;