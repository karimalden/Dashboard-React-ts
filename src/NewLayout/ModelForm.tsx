import React from "react";
import { Row, Col } from "reactstrap";
import {Field,FieldCheckbox,FieldImg, FieldMultyOption, FieldOption, OptionBy} from "./Field";

const ModelForm = ({ ModelData }:any) => {
  const col1Items = ModelData?.filter((item:any) => item.col === 1);
  const col2Items = ModelData?.filter((item:any) => item.col === 2);
  const col3Items = ModelData?.filter((item:any) => item.col === 3);
  return (
    <Row xs={1} sm={1} md={1} lg={col3Items.length > 0 ?3 : 2} xl={col3Items.length > 0 ?3 : 2} className="p-2" >
      <Col>
        {col1Items.map((item:any,index:number) => {
          const { type } = item;
          switch (type) {
           
            case "select":
              return <FieldOption key={index} item={item}  />;
              case "OptionBy":
                return <OptionBy key={index} item={item}  />;
              case "multi":
                return <FieldMultyOption key={index} item={item}  />;
            case "image":
              return <FieldImg key={index} item={item}   />;
              case "box":
                return <FieldCheckbox key={index} item={item}   />;
            default:
              return <Field key={index} item={item}  />;
          }
        })}
      </Col>
      {col2Items.length > 0 && (
        <Col>
          {col2Items.map((item:any,index:number) => {
            const { type } = item;
            switch (type) {
        
              case "select":
                return <FieldOption key={index} item={item}  />;
                case "OptionBy":
                return <OptionBy key={index} item={item}  />;
                case "multi":
                  return <FieldMultyOption key={index} item={item}  />;
              case "image":
                return <FieldImg key={index} item={item}  />;
                case "box":
                  return <FieldCheckbox key={index} item={item}   />;
              default:
                return <Field key={index} item={item}  />;
            }
          })}
        </Col>
      )}
      {col3Items.length > 0 && (
        <Col>
          {col3Items.map((item:any,index:number) => {
            const { type } = item;
            switch (type) {
        
              case "select":
                return <FieldOption key={index} item={item}  />;
                case "multi":
                  return <FieldMultyOption key={index} item={item}  />;
              case "image":
                return <FieldImg key={index} item={item}  />;
                case "box":
                  return <FieldCheckbox key={index} item={item}   />;
              default:
                return <Field key={index} item={item}  />;
            }
          })}
        </Col>
      )}
    </Row>
  );
};

export default ModelForm;
