import React from 'react'
import { Col, Row } from 'reactstrap'
import KarimField from '../../../Components/Karimalden/KarimField'

const BasicInfo = () => {
  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <KarimField name="full_name" label='name' placeholder='full_name' />
        <KarimField name="code" label='Driver Code'  placeholder='Driver Code'/>
        <KarimField name="birthday" label='Driver Birithday' placeholder='Driver Birithday' />
        <KarimField name="phone" label='phone' placeholder='phone' />
        <KarimField name="gender" label='gender' placeholder='gender' />

      </Col>
      <Col>
        <KarimField type='File' name="avatar" placeholder='Driver Image' label='Driver Image' />
        <KarimField name="wallet" isDisabled />
        <KarimField  name="created_at" label='Join at' placeholder='Join at'isDisabled />
        <KarimField name="city"  isDisabled/>

      </Col>


    </Row>
  )
}

export default BasicInfo