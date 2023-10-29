import React from 'react'
import DataTable from 'react-data-table-component';
import { Card, CardBody } from 'reactstrap';
import { useTranslation } from 'utility/language';
import { TableSpinner } from 'views/components/TableSpinner';

export const DynamikTable = (props) => {
    const t = useTranslation();
    const Data = props?.data || [];
    const column = props?.Columns

  return (
    <Card>
    <CardBody>
      <DataTable
        columns={column}
        data={Data}
        progressPending={props?.isLoading}
        progressComponent={<TableSpinner />}
        noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
        noHeader
        pagination
      />
    </CardBody>
  </Card>
  )
}

