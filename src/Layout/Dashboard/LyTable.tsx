
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Spinner } from 'reactstrap';
import { usePageState } from './state';

const LyTable = (props:any) => {

  // Important this line for rerender is the them has been changed
  const {isThemChanged} = usePageState()


  const bgColor = getComputedStyle(document.documentElement).getPropertyValue("--bg");
  const text = getComputedStyle(document.documentElement).getPropertyValue("--text");
  const gray = getComputedStyle(document.documentElement).getPropertyValue("--gray");


  
 
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
      customStyles={{
        table:{
          style:{
            background:bgColor,
            color:text
            
          }
        },
        headCells:{
          style:{
            background:bgColor,
            color:text
          }
        },
        cells:{
          style:{
            background:bgColor,
            color:text,
            borderBottom:`2px solid ${gray}`,
            margin:"-1px 0"
          }
        },
        progress:{
          style:{
            background:bgColor,
            color:text
          }
        },
        pagination:{
          style:{
            background:bgColor,
            color:text
          }
        }
      }}
      progressComponent={<Spinner />}
      {...props}
      />
    
    </CardBody>
  </Card>
  )
}

export default LyTable