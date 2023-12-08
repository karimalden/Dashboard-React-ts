import React from 'react'
import { Col, Row } from 'reactstrap';
import KarimField from '../../Components/Karimalden/KarimField';
import { FakeSelectData, convert_data_to_select } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';
import NewKarimFiled from '../../Components/Karimalden/NewKarimFiled';


function FormExample() {
  const formik = useFormikContext<any>();



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <NewKarimFiled name="name" />
        {/* <NewKarimFiled name="select" type="Select" label='select'  option={convert_data_to_select(FakeSelectData)} isMulti placeholder='placeholder' />
        <NewKarimFiled name="date" type='DataRange' placeholder='placeholder' label='select'  /> */}

        {/* <KarimField name="name" type="text" label='name' placeholder='placeholder' /> */}
        {/* <KarimField name="number" type="number" label='number' placeholder='placeholder' />  */}
        {/* <KarimField name="select" type="select"label='select'  option={convert_data_to_select(FakeSelectData)} isMulti  placeholder='placeholder'  /> */}
        {/* <KarimField name="Multiselect" type="select"label='Multiselect'  option={FakeSelectData} Disabled={false} placeholder='placeholder'/>  */}


      </Col>
      <Col>
        <NewKarimFiled name="file" type='File' />

        {/* <KarimField name="name" type="text" label='name' placeholder='placeholder' /> */}
        {/* <KarimField name="date" type="date" label='date' placeholder='placeholder' />
   <KarimField name="time" type="text"label='time'  placeholder='placeholder' />
   <KarimField name="CheckBox" name2='CheckBox2' type="checkbox" label='CheckBox' placeholder='placeholder' group={true} />
   <KarimField name="DateFrom" name2="DateTo" type="DataRange"     /> */}
        {/* <KarimField name="file" type="file" label='name'  placeholder='placeholder' /> */}

      </Col>

      <Col>
      </Col>

    </Row>
  )
}

export default FormExample

