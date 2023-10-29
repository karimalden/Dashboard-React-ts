import DataTable from 'react-data-table-component';
import { Card, CardBody, Spinner } from 'reactstrap';
import  useTableColumns  from '../../NewLayout/DynamikColumns';

const LyTable = (props:any) => {


  const column = useTableColumns(props?.columns)

  return (
    <Card>
    <CardBody>
      {
      <DataTable
      columns={column}
      data={props?.GetMutation?.data}
      noDataComponent={<h6 className="my-4">{("no_records")}</h6>}
      noHeader
      pagination
      progressComponent={<Spinner />}
      progressPending={props?.GetMutation?.isLoading}
      />
    }
    </CardBody>
  </Card>
  )
}

export default LyTable