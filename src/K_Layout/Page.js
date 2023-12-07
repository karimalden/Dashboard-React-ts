import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody } from 'reactstrap';
import { useTranslation } from 'utility/language';
import { TableSpinner } from 'views/components/TableSpinner';
import { AddButton } from "components/AddButton";
import AddModel from './model/AddModel';
import './Page.scss';
import { SearchInput } from 'components/input';
import {  convert_data_Search_select, filterDataByDynamicValue } from './model/Field';
import Select from "react-select";
import SmsModel from './model/SmsModel';
import ExcelModel from 'views/pages/SubWarehouse/Excel/ExcelModel';
import GaridModel from 'views/pages/SubWarehouse/Garid/GaridModel';

const Page = (props) => {
  const t = useTranslation();
  const Data = props?.data || [];
  const [isOpen, setisOpen] = useState(false)
  const [isOpen2, setisOpen2] = useState(false)
  const [isOpenExcel, setisOpenExcel] = useState(false)
  const [isOpenGarid, setisOpenGarid] = useState(false)

  const [objectToEdit, setobjectToEdit] = useState([])
  const column = props.useTableColumns(props?.deleteMutation, setisOpen,setobjectToEdit,setisOpen2,setisOpenExcel,setisOpenGarid)
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [SearchBy, setSearchBy] = useState(props?.SearchBy)

  const handleAddClick = () => {
    setisOpen(true);
    setobjectToEdit([]);
  };
  useEffect(() => {
      if (searchText) {
        setFilteredData(
          filterDataByDynamicValue(Data, searchText, SearchBy)
        )
      }
  }, [searchText]);
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
      <h1>{t(props?.Name || 'page')}</h1>
      <div className='K_Flex'>
        <AddButton onClick={handleAddClick} />
        <div  className='KK_Flex'>
          {
            props?.SearchBy?                  <SearchInput onChange={setSearchText} placeholder={t(`search`)}  />
            :''

          }
                  {props?.selecter?
    <Select placeholder={t(`${props?.SearchBy??"search"}`)} options={convert_data_Search_select(props?.selecter)}
                   name="status" onChange={(opt) => { setSearchBy(opt.value); }} />  :''
                  }
              
                         </div>
      </div>

      <Card>
        <CardBody className="">
          <DataTable
            columns={column}
            data={searchText ? filteredData : Data}
            progressPending={props?.isLoading}
            progressComponent={<TableSpinner />}
            noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
            noHeader
            pagination
            expandableRows={!!props?.Expand}
            expandableRowsComponent={ <MyExpandableComponent />}
          />
        </CardBody>
      </Card>
      <AddModel
        isOpen={isOpen}
        setisOpen={setisOpen}
        setobjectToEdit={setobjectToEdit}
        objectToEdit={objectToEdit}
        Big={props?.Big}
        {...props}
      />
      {
        props?.SMS &&
        <SmsModel
        isOpen2={isOpen2}
        setisOpen2={setisOpen2}
        SmsAddMutation={props?.SmsAddMutation}
        SmsModelData={props?.SmsModelData}
        SmsgetValidationSchema={props?.SmsgetValidationSchema}
        SmsgetInitialValues={props?.SmsgetInitialValues}
        objectToEdit={objectToEdit}
        getDataToSend={props?.SmsgetDataToSend}

      />
      }
       {
        props?.Excel &&
        <ExcelModel
        objectToEdit={objectToEdit}
        isOpenExcel={isOpenExcel}
        setisOpenExcel={setisOpenExcel} />
      }
       {
        props?.Garid &&
        <GaridModel
        objectToEdit={objectToEdit}
        isOpenGarid={isOpenGarid}
        setisOpenGarid={setisOpenGarid} />
      }
    </div>
  );
};

export default Page;
