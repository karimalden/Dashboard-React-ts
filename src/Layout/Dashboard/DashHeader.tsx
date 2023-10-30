import React from 'react'
import AddButtonLayout from './AddButton/AddButtonLayout';


const DashHeader = ({ children , title}: { title:string , children?: React.ReactNode }) => {
  return (

    <div className='Page_Header'> 
      {title} 
      {children}
     <AddButtonLayout />  
      </div>

  )
}

export default DashHeader