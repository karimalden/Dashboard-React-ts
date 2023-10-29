
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Card, CardBody, Spinner } from 'reactstrap';

const LyTable = (props:any) => {
  const [isMount  , setIsMount] = useState(false)
  console.log(props?.data);
  
  useEffect(()=>{
    setIsMount(true)
  },[])
  return (
    <Card>
    <CardBody>
      {
        isMount && 
      <DataTable
      
      columns={props?.column}
      data={props?.data}
      noDataComponent={<h6 className="my-4">{("no_records")}</h6>}
      noHeader
      pagination
      progressComponent={<Spinner />}
      
      />
    }
    </CardBody>
  </Card>
  )
}

export default LyTable