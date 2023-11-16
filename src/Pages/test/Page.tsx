
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetTest} from '../../api/test'
import { QueryStatusEnum } from '../../config/QueryStatus'
import EditTestModal from './EditTestModal'
import AddTestModal from './AddTestModal'

function Page() {

    const column   =useTableColumns()
    const {data  ,status } = useGetTest()

    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'Test'}></DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
    />
      
    <EditTestModal />
    <AddTestModal />
    </DashBody>
  )
}

export default Page

