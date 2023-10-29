import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useModal } from '../../lib/Zustand';

type TAddModel ={
  children: React.ReactNode,
  getInitialValues:any,
   getValidationSchema:any,
   getDataToSend:any,
   AddMutation:any,
   name:string


}
const AddModel: React.FC<TAddModel>= ({children,getInitialValues, getValidationSchema,getDataToSend,AddMutation,name})=> {
  const {isSuccess,isLoading,mutate} = AddMutation

  const handleSubmit = (values: any) => {
    mutate(values)
    console.log(values);
    
  };
     const { setIsOpenAddModel ,isOpenAddModel } = useModal((state:any) => state )
     useEffect(() => { if(isSuccess){setIsOpenAddModel()}  }, [isSuccess])

  return (
   
     <Modal show={isOpenAddModel}  center="true" size={"lg"} onHide={() => setIsOpenAddModel()}>
     <Modal.Header closeButton>
       <Modal.Title>Add new {name} </Modal.Title>
     </Modal.Header>
     <Formik
         onSubmit={values => handleSubmit(values)}
         initialValues={getInitialValues([])}
         validationSchema={getValidationSchema()}
       >
         {() => {
           return (
             <Form>
     <Modal.Body>  {children} </Modal.Body>
     <Modal.Footer>
       <Button variant="danger" onClick={() => setIsOpenAddModel()}>
         Close
       </Button>
       <Button disabled={isLoading}   type="submit" color="primary" className="Model_Button">
       {isLoading ? "Adding...." : 'Submit'}
       </Button>
     </Modal.Footer>
     </Form>
           );
         }}
       </Formik>
   </Modal>
  );
};

export default AddModel;