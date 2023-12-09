import React from 'react'
import { Col, Row } from 'reactstrap';
import { FakeSelectData } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';


function FormExample() {
  const formik = useFormikContext<any>();



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>

    </Col>
    <Col>


    </Col>

<Col>
</Col>
   
  </Row>
  )
}

export default FormExample

