import React, { useState } from 'react'
import {getInitialValues, getValidationSchema, getDataToSend} from '../formUtils'
import { Tab, TabList, TabPanel as TabBody, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { MdLanguage } from 'react-icons/md'
import { FaSadCry } from 'react-icons/fa'
import ViewPage from '../../../Layout/Dashboard/ViewPage';
import FirstPage from './FirstPage';
import SecPage from './SecPage';

const ViewUser = () => {
  const [BarStatus, setBarStatus] = useState( {value:0,isLoading:false,isError:false,isSuccess:false}) 

  const handleSubmit = (values:any)=>{
    setBarStatus((pre: any) => ({...pre, value: 70}))   
        setBarStatus((pre: any) => ({...pre, isSuccess: true,value:100}))   

    
        setBarStatus((pre: any) => ({...pre, isError: true,value: 0}))   

       setTimeout(() => {
          setBarStatus((pre: any) => ({...pre , value: 0}))   
        }, 1000);
    
  
   
  }
  const ViewProps = { getInitialValues, getValidationSchema, getDataToSend,handleSubmit,BarStatus};
  return (
  <div className='ViewPage'>
    <ViewPage {...ViewProps}>
    <Tabs>
      <TabList>
      <Tab><div className='d-flex'><MdLanguage size={20} /> <h6>{("add_new_user")}</h6></div></Tab>
      
      <Tab><div className='d-flex'><FaSadCry size={20} /> <h6>{("Edit_user")}</h6></div></Tab>
      </TabList>
       <TabBody >
       <div className=" mt-4"><FirstPage/></div>
        </TabBody>
        <TabBody >
       <div className=" mt-4"><SecPage/></div>
        </TabBody>
    </Tabs>
    </ViewPage>
   
  </div>
  )

}

export default ViewUser