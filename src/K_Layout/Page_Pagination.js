import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody } from 'reactstrap';
import { useTranslation } from 'utility/language';
import { TableSpinner } from 'views/components/TableSpinner';
import { AddButton } from "components/AddButton";
import AddModel from './model/AddModel';
import './Page.scss';
import { SearchInput } from 'components/input';
import { HandelPagination, HandelPerPage } from './Pagination';

const Page_Pagination = (props) => {
  const t = useTranslation();
  const Data = props?.data || [];
  const [isOpen, setisOpen] = useState(false)
  const [objectToEdit, setobjectToEdit] = useState([])
  const column = props?.useTableColumns(props?.DatadeleteMutation, setisOpen,setobjectToEdit)

  const handleAddClick = () => {
    setisOpen(true);
    setobjectToEdit([]);
  };
  const MyExpandableComponent = ({ data }) => {
    const Expand = props?.Expand
    const value = Expand.includes('.') ? Expand.split('.')[0] : Expand;
    const label = Expand.includes('.') ? Expand.split('.')[1] : undefined;
  
    return (
      <pre>
        <h4>{t(value)}</h4>
        {label ? (
          <h5>{t(data[value].map((i) => i.name).join(', ') ?? '')}</h5>
        ) : (
          <p>{t(data[value] ?? '')}</p>
        )}
      </pre>
    );
  };
  
  return (
    <div className="Page">
      <div className='K_Flex'>
        <AddButton onClick={handleAddClick} />
        <div  className='KK_Flex'>
                  <SearchInput onChange={props?.setsearch} placeholder={t(`search here..`)}  />
                    <HandelPerPage per_page={props?.per_page}  handlePerPageChange={props?.handlePerPageChange}/>

              
                         </div>
      </div>

      <Card>
        <CardBody className="">
          <DataTable
            columns={column}
            data={Data}
            progressPending={props?.isLoading}
            progressComponent={<TableSpinner />}
            noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
            noHeader
            pagination
            expandableRows={!!props?.Expand}
            expandableRowsComponent={!!props?.Expand ? <MyExpandableComponent /> : null}
            paginationServer
            paginationComponent={() => (
             <HandelPagination totalRows={props?.totalRows} per_page={props?.per_page} page={props?.page} handlePageChange={props?.handlePageChange}/>
            )}
            sortServer
          />
        </CardBody>
      </Card>
      <AddModel
        isOpen={isOpen}
        setisOpen={setisOpen}
        setobjectToEdit={setobjectToEdit}
        objectToEdit={objectToEdit}
        {...props}
      />
    </div>
  );
};

export default Page_Pagination;
