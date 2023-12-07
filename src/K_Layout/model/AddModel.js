import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useTranslation } from 'utility/language';
import ModelForm from './ModelForm';
import { LoadingButton } from 'components/input';

const AddModel = ({
  Name,
  UpdateMutation,
  AddMutation,
  AddModelData,
  getDataToSend,
  getInitialValues,
  getValidationSchema,
  objectToEdit,
  isOpen,
  setisOpen,
  EditModelData,
  Big
}) => {
  const t = useTranslation();

  const handleSubmit = (values) => {
    let data ={...values};
    if (objectToEdit?.length !== 0) {
      
      UpdateMutation?.mutate(getDataToSend(data ,'update'));
    } else {

      AddMutation?.mutate(getDataToSend(data,'add'));
    }

  };
  useEffect(() => {
    
    
    if (objectToEdit?.length !== 0) {

      if(UpdateMutation?.isSuccess){
   
        setisOpen(false)
      }
    }else{
      if(AddMutation?.isSuccess){
        setisOpen(false)

      }
    }


  }, [AddMutation?.isSuccess , UpdateMutation?.isSuccess, setisOpen ,objectToEdit?.length])
  
  const handleCloseModal = () => setisOpen(v => !v);
  return (
    <Modal isOpen={isOpen} centered size={Big?"xl":"lg"}>
      <ModalHeader toggle={handleCloseModal}>
        {(objectToEdit?.length !== 0) ? t(`edit`) + t(`${Name}`): t(`add_new`) +t(`${Name}`)}
      </ModalHeader>
      <Formik
        onSubmit={(values)=>handleSubmit(values)}
        initialValues={getInitialValues(objectToEdit)}
        validationSchema={getValidationSchema()}
      >
        {(formik) => (
          <Form>
            <ModalBody>
              <ModelForm ModelData={(objectToEdit?.length !== 0) ? EditModelData : AddModelData} />
            </ModalBody>
            <ModalFooter>
              <Button disabled={AddMutation?.isLoading || UpdateMutation?.isLoading} onClick={handleCloseModal} color='danger'>
                {t('cancel')}
              </Button>
              <LoadingButton type='submit' color='primary' isLoading={AddMutation?.isLoading || UpdateMutation?.isLoading}>
                {t('submit')}
              </LoadingButton>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddModel;