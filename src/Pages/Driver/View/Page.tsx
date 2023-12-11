import React, { useEffect, useState } from 'react'
import { getInitialValues, getValidationSchema, getDataToSend } from '../formUtil'
import { Tab, TabList, TabPanel as TabBody, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { MdLanguage } from 'react-icons/md'
import { FaSadCry } from 'react-icons/fa'
import ViewPage from '../../../Layout/Dashboard/ViewPage';
import { Rate } from 'antd';
import BasicInfo from './BasicInfo';
import CarInfo from './CarInfo';
import DriverInfo from './DriverInfo';
import OrderInfo from './OrderInfo';
import { usePageState } from '../../../lib/state mangment/LayoutPagestate';
import { useParams } from 'react-router-dom';
import { useGetOneDriver } from '../../../api/Driver';
import { Spinner } from 'reactstrap';

const ViewDriver = () => {
  const [BarStatus, setBarStatus] = useState({ value: 0, isLoading: false, isError: false, isSuccess: false })
  const handleSubmit = (values: any) => {

  }
  const { setObjectToEdit, objectToEdit } = usePageState()

  const { id } = useParams()
  const { data } = useGetOneDriver(`?driver_id=${id}`)

  useEffect(() => {

    setObjectToEdit(data);

  }, [data]);


  const ViewProps = { getInitialValues, getValidationSchema, getDataToSend, handleSubmit, BarStatus };


  return (
    <div className='ViewPage'>
      {objectToEdit && data ?
        <ViewPage {...ViewProps}>
          <Rate defaultValue={4} disabled className='ms-2 fs-2 translate-middle-y' />
          <Tabs>
            <TabList>
              <Tab><div className='d-flex'><MdLanguage size={20} /> <h6>{("BasicInfo")}</h6></div></Tab>

              <Tab><div className='d-flex'><FaSadCry size={20} /> <h6>{("Additional Car Info")}</h6></div></Tab>
              <Tab><div className='d-flex'><FaSadCry size={20} /> <h6>{("Additional Driver Info")}</h6></div></Tab>

              <Tab><div className='d-flex'><FaSadCry size={20} /> <h6>{(" Driver Order")}</h6></div></Tab>

            </TabList>
            <TabBody >
              <div className=" mt-4"><BasicInfo /></div>
            </TabBody>
            <TabBody >
              <div className=" mt-4"><CarInfo /></div>
            </TabBody>
            <TabBody >
              <div className=" mt-4"><DriverInfo /></div>
            </TabBody>
            <TabBody >
              <div className=" mt-4"><OrderInfo /></div>
            </TabBody>
          </Tabs>
        </ViewPage>
        : <Spinner />}


    </div>
  )

}

export default ViewDriver