import React from 'react'
import KarimField from '../../../Components/Karimalden/KarimField'
import { Col, Row } from 'reactstrap'

const CarInfo = () => {
  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <KarimField name="car_type" label='car_type' placeholder='car_type' />
        <KarimField name="car_seat_count" label='car_seat_count' placeholder='car_seat_count' />
        <KarimField type='File' name="car_front"  />
        <KarimField type='File' name="car_right"  />
        <KarimField type='File' name="car_internal"  />


      </Col>
      <Col>
        <KarimField name="car_model" />
        <KarimField name="car_color" label='car_color' placeholder='car_color' />
        <KarimField type='File' name="car_back"  />
        <KarimField type='File' name="car_left"  />
        <KarimField type='File' name="car_internal_back"  />


      </Col>


    </Row>
  )
}

export default CarInfo