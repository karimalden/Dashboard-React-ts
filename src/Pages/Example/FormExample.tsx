import React from 'react'
import { Col, Row } from 'reactstrap';
import { FakeSelectData, convert_data_to_select } from '../../Layout/app/Const';
import NewKarimFiled from '../../Components/Karimalden/NewKarimFiled';


function FormExample() {

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        {/* <NewKarimFiled name="select" type='Select' /> */}

        <NewKarimFiled name="select" type="Select" label='select' onChange={()=> console.log("hi")}  option={convert_data_to_select(FakeSelectData)} isMulti placeholder='placeholder' />
        <NewKarimFiled name="date" type='Checkbox'label='select' Group={true} />

      </Col>
      <Col>


      </Col>

      <Col>
      </Col>

    </Row>
  )
}

export default FormExample

