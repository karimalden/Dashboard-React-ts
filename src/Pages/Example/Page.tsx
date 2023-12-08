import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import EditExampleModal from './EditExampleModal'
import AddExampleModal from './AddExampleModal'
import { useGetDynamic } from '../../api/Route/Get'
import { QueryStatusEnum } from '../../config/QueryStatus'

function ExamplePage() {

  const column = useTableColumns()
  const { data, status } = useGetDynamic(`api/admin/transaction/all`)
  
  return (
    <DashBody status={status as QueryStatusEnum} >
      <>
        <DashHeader title={'Example'}></DashHeader>

        {/* <LyTable
          data={data?.data?.data}
          isLoading={false}
          columns={column}
          is_pagination={true}
          total={data?.data?.pagination?.total}
        /> */}



        <EditExampleModal />
        <AddExampleModal />

      </>
    </DashBody>
  )
}

export default ExamplePage