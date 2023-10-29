import  { useState } from 'react'
import { FormTableState } from '../app/Types';
import AddModel from './AddModel';

const DashBody = ({ children }: { children: React.ReactNode }) => {
    const [FormTable, setFormTable] = useState<FormTableState>({ objectToEdit: [], OpenEdit: false, OpenAdd: false });
    const [isMount  , setIsMount] = useState(false)

  return (
    <div className='Page' >
      { children }
    
  </div>
  )
}

export default DashBody
