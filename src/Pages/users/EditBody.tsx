import React from 'react'
import { Col, Row } from 'reactstrap'
import { ValidatedField } from '../../Components/Ui'


const EditBody = () => {
    return (
        <Row xs={1} sm={1} md={1} lg={2} xl={2} className="p-2" >
        <Col>
          <ValidatedField
            name="name"
            label="name"
            placeholder={("name")}
            type="string"
            
          />
        </Col>
  
        <Col>
        </Col>
      </Row>
    )
}

export default EditBody