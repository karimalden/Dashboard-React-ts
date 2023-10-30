
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Card, CardBody, Spinner } from 'reactstrap';

const LyTable = (props:any) => {

  return (
    <Card>
    <CardBody>
      <DataTable
      columns={props?.column}
      data={props?.data}
      progressPending={props?.isLoading}
      noDataComponent={<h6 className="my-4">{("no_records")}</h6>}
      noHeader
      pagination
      progressComponent={<Spinner />}
      {...props}
      />
    
    </CardBody>
  </Card>
  )
}

export default LyTable