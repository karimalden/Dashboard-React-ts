import React from 'react'
import DataTable from 'react-data-table-component';
import { Card, CardBody } from 'reactstrap';
import { useTranslation } from 'utility/language';
import { TableSpinner } from 'views/components/TableSpinner';
import { HandelPagination } from './Pagination';

export const DynamikTablePaginat = (props) => {
    const t = useTranslation();
    const Data = props?.data || [];
    const column = props?.Columns

    return (
        <div className="Page">
            <div className='K_Flex'>
        
                    {/* <HandelPerPage per_page={props?.per_page} handlePerPageChange={props?.handlePerPageChange} /> */}
            </div>
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
                        paginationServer
                        paginationComponent={() => (
                            <HandelPagination totalRows={props?.totalRows} per_page={props?.per_page} page={props?.page} handlePageChange={props?.handlePageChange} />
                        )}
                        sortServer
                    />
                </CardBody>
            </Card>
        </div>
    )
}

