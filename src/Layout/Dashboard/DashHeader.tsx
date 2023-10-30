import React from 'react'
import AddButtonLayout from './AddButton/AddButtonLayout';
import { useTranslation } from 'react-i18next';


const DashHeader = ({ children , title}: { title:string , children?: React.ReactNode }) => {
  const [t] = useTranslation();

  return (

    <div className='Page_Header'> 
      {t(`${title}`)} 
      {children}
     <AddButtonLayout />  
      </div>

  )
}

export default DashHeader