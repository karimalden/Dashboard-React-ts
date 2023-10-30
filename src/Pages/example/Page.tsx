import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import { useTranslation } from 'react-i18next'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import EditExampleModal from './EditExampleModal'

function Page() {

    const [t] = useTranslation()
    const column   =useTableColumns()
  return (
    <DashBody>
      <DashHeader title={'Example'}></DashHeader>
      <LyTable
        data={[{id:1}]}
        isLoading={false}
        columns={column}
    />
      
      

      <EditExampleModal />
    </DashBody>
  )
}

export default Page