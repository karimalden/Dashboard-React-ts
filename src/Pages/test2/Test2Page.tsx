
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetTest2} from '../../api/test2'
import { QueryStatusEnum } from '../../config/QueryStatus'
import EditTest2Modal from './EditTest2Modal'
import AddTest2Modal from './AddTest2Modal'

function Test2Page() {

    const column   =useTableColumns()
    const {data  ,status } = useGetTest2()

    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'Test2'}></DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
    />
      
    <EditTest2Modal />
    <AddTest2Modal />
    </DashBody>
  )
}

export default Test2Page

