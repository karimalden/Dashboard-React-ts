
import React from 'react'
import { Col, Row } from 'reactstrap';
import KarimField from '../../Components/Karimalden/KarimField';
import { FakeSelectData } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';


function FormTest2() {
  const formik = useFormikContext<any>();



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
    <KarimField name="name" type="text"label='name'  placeholder='placeholder' />
    {/* <KarimField name="number" type="number" label='number' placeholder='placeholder' />
    <KarimField name="select" type="select"label='select'  option={FakeSelectData} isMulti={true} placeholder='placeholder'  />
    <KarimField name="Multiselect" type="select"label='Multiselect'  option={FakeSelectData} Disabled={true} placeholder='placeholder'/> */}

    
    </Col>
    <Col>
   {/* <KarimField name="date" type="date" label='date' placeholder='placeholder' />
   <KarimField name="time" type="text"label='time'  placeholder='placeholder' />
   <KarimField name="CheckBox" name2='CheckBox2' type="checkbox" label='CheckBox' placeholder='placeholder' group={true} />

   <KarimField name="DateFrom" name2="DateTo" type="DataRange"     /> */}
   

    </Col>

   
  </Row>
  )
}

export default FormTest2


