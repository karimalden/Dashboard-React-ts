import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useModal } from '../../lib/Zustand';
import { Spinner } from 'reactstrap';

type TEditModel ={
  children: React.ReactNode,
  getInitialValues:any,
   getDataToSend:any,
   EditMutation :any,
   name:string
}

const EditModel: React.FC<TEditModel>= ({children,getInitialValues,getDataToSend,EditMutation,name})=> {
  const {isSuccess,isLoading,mutate} = EditMutation
  const handleSubmit = (values: any) => {
    // mutate(values)
    console.log(values);
  }

  useEffect(() => {   if(isSuccess){setIsOpenEditModel()}  }, [isSuccess])
     const { setIsOpenEditModel ,isOpenEditModel,objectToEdit } = useModal(state => state )

  return (
   
     <Modal show={isOpenEditModel}  center="true" size={"lg"} onHide={() => setIsOpenEditModel()}>
     <Modal.Header closeButton>
       <Modal.Title>Edit  {name}</Modal.Title>
     </Modal.Header>
     <Formik
         onSubmit={values => handleSubmit(values)}
         initialValues={getInitialValues(objectToEdit)}
        //  validationSchema={getValidationSchema()}
       >
         {() => {
           return (
             <Form>
     <Modal.Body>  {children} </Modal.Body>
     <Modal.Footer>
       <Button variant="danger" onClick={() => setIsOpenEditModel()}>
         Close
       </Button>
       <Button  disabled={isLoading} type="submit" color="primary" className="Model_Button" onClick={() => setIsOpenEditModel()}>
       {isLoading ? <Spinner/> : 'Submit'}
       </Button>
     </Modal.Footer>
     </Form>
           );
         }}
       </Formik>
   </Modal>
  );
};

export default EditModel;