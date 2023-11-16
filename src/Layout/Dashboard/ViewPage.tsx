import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import { Formik, Form } from "formik";
import { LoadingButton } from "../../Components/Ui/LoadingButton";
import ProgressBar from "../../Components/Ui/ProgressBar";
import { useNavigate } from "react-router-dom";

type TViewPage ={
  children: React.ReactNode,
  getInitialValues:any,
   getValidationSchema:any,
   getDataToSend:any,
   handleSubmit:any,
   BarStatus:any
 

}
const ViewPage: React.FC<TViewPage>=  ({children,getInitialValues, getValidationSchema,getDataToSend,handleSubmit,BarStatus})=> {


  const navigate = useNavigate();
  return (
    <Card className="ViewTapPage">
      <CardHeader  className="CardHeader" >
        <CardTitle className="View_information">
          {("View_information")}
        </CardTitle>
       <Button onClick={() => {    navigate(-1);}}>  {("back")}  </Button>
      </CardHeader>
      <CardBody>
        {
           <Formik
           onSubmit={values => handleSubmit(getDataToSend(values))}
           initialValues={getInitialValues([])}
           validationSchema={getValidationSchema()}
        >
          {(formik) => (
            <Form>
              {/* <HeadTabs tabs={tabs} /> */}
                {children}
                <ProgressBar
                  value={BarStatus?.value}
                  isLoading={BarStatus?.isLoading}
                  isError={BarStatus?.isError}
                  isSuccess={BarStatus?.isSuccess}
                />
                <div className="d-flex mt-4 justify-content-center align-items-center">
                  <LoadingButton
                    type="submit"
                    color="primary"
                    isLoading={false}
                  >
                    {("save")}
                  </LoadingButton>
                </div>
            </Form>
          )}
        </Formik>
        }
       
      </CardBody>
    </Card>
  );
};


export default ViewPage;
