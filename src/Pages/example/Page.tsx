import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import EditExampleModal from './EditExampleModal'
import AddExampleModal from './AddExampleModal'
import { useGetAllExample } from '../../api/example'
import { QueryStatusEnum } from '../../config/QueryStatus'

function Page() {

    const column   =useTableColumns()
    const {data  ,status } = useGetAllExample()

    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'Example'}></DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
    />
      
      

      <EditExampleModal />
      <AddExampleModal />
    </DashBody>
  )
}

export default Page