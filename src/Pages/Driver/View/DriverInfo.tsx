import React from 'react'
import KarimField from '../../../Components/Karimalden/KarimField'
import { Col, Row } from 'reactstrap'
const DriverInfo = () => {
  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <KarimField type='File' name="license_front_image" />

        <KarimField type='File' name="license_backe" />
        <KarimField type='File' name="nationality_back" />
        <KarimField type='File' name="yearly_back" />


      </Col>
      <Col>

        <KarimField type='File' name="nationality_front" />
        <KarimField type='File' name="residential_card" />
        <KarimField type='File' name="yearly_front" />


      </Col>


    </Row>
  )
}

export default DriverInfo