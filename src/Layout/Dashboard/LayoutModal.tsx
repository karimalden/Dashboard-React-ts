import { Form, Formik } from 'formik'
import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { usePageState } from './state'
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../../Components/Ui/LoadingButton';

interface LayoutModalProps {
  isAddModal: boolean;
  headerText: string;
  handleSubmit: (values: any) => void;
  getInitialValues: any;
  getValidationSchema: any;
  isLoading?: boolean;
  children: React.ReactNode;
}
function LayoutModal({isAddModal , headerText , handleSubmit =()=>{} , getInitialValues  , getValidationSchema,isLoading = false ,children}:LayoutModalProps) {

  
  const  {isOpenAddModel ,setIsOpenAddModel , setIsOpenEditModel ,isOpenEditModel , objectToEdit} = usePageState(state => state)
  console.log(objectToEdit);
    const [t] = useTranslation()
    return (
    <Modal centered isOpen={isAddModal ? isOpenAddModel :isOpenEditModel} size="lg">
      <ModalHeader toggle={() => isAddModal ?setIsOpenAddModel() : setIsOpenEditModel()}>
        {t(headerText)}
      </ModalHeader>
      {
        
          (( objectToEdit != null  && isOpenEditModel) || isOpenAddModel) &&
          <Formik
          onSubmit={handleSubmit}
          initialValues={getInitialValues}
          validationSchema={getValidationSchema}
        >
          
          {(formik) => (
            <Form>
              <ModalBody>
               {children}
              </ModalBody>
              <ModalFooter>
                <Button
                  disabled={isLoading}
                  onClick={() => isAddModal ?setIsOpenAddModel() : setIsOpenEditModel()}
                  color="danger"
                >
                  {t("cancel")}
                </Button>
                <LoadingButton
                  type="submit"
                  color="primary"
                  isLoading={isLoading}
                >
                  {t(isAddModal ? "add" :"edit")}
                </LoadingButton>
              </ModalFooter>
            </Form>
          )}
        </Formik>
        }
     
    </Modal>
  )
}

export default LayoutModal