import React from 'react'
import { ValidatedField } from '../../Components/Ui';
import { Col, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';

function FormExample() {
    const [t] = useTranslation()
  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
      <ValidatedField
        name="name"
        label={`${t("name")}`}
        placeholder={`${t("name")}`}
      />
     
    
    </Col>
    <Col>
    <ValidatedField
        name="email"
        label={`${t("email")}`}
        placeholder={`${t("email")}`}
      />
    </Col>
  </Row>
  )
}

export default FormExample