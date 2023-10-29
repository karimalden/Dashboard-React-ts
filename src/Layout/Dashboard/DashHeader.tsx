import React from 'react'
import Add_Button from '../../Components/Utils/AddButton/Add_Button';


const DashHeader = ({ children }: { children: React.ReactNode }) => {
  return (

    <div className='Page_Header'> 
    
     <Add_Button />  
     <div> {children}</div>
      </div>

  )
}

export default DashHeader