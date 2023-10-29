import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useTranslation } from 'utility/language';
import { LoadingButton } from 'components/input';
import ModelForm from 'K_Layout/model/ModelForm';

const SmsModel = ({
  SmsAddMutation,
  SmsModelData,
  SmsgetInitialValues,
  SmsgetValidationSchema,
  isOpen2,
  setisOpen2,
  objectToEdit,
  getDataToSend

}) => {
  const t = useTranslation();

  const handleSubmit = (values) => {
    if (SmsAddMutation){
      SmsAddMutation?.mutate(getDataToSend(values ,'update'));

    }
    else{
            SmsAddMutation?.mutate(values);

    }

  };
  useEffect(() => {
    
    if(SmsAddMutation?.isSuccess ){
  
      setisOpen2(false)
    }

  }, [SmsAddMutation, setisOpen2])
  
  const handleCloseModal = () => setisOpen2(v => !v);
  return (
    <Modal isOpen={isOpen2} centered size="lg">
      <ModalHeader toggle={handleCloseModal}>
        {t(`send_user_message`)}
      </ModalHeader>
      <Formik
        onSubmit={(values)=>handleSubmit(values)}
        initialValues={SmsgetInitialValues(objectToEdit)}
        validationSchema={SmsgetValidationSchema()}
      >
        {(formik) => (
          <Form>
            <ModalBody>
              <ModelForm ModelData={SmsModelData} />
            </ModalBody>
            <ModalFooter>
              <Button disabled={SmsAddMutation?.isLoading} onClick={handleCloseModal} color='danger'>
                {t('cancel')}
              </Button>
              <LoadingButton type='submit' color='primary' isLoading={SmsAddMutation?.isLoading}>
                {t('submit')}
              </LoadingButton>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default SmsModel;