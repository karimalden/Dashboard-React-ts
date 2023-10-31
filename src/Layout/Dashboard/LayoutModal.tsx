import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { usePageState } from './state'
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../../Components/Ui/LoadingButton';
import { QueryStatusEnum } from '../../config/QueryStatus';

interface LayoutModalProps {
  isAddModal: boolean;
  headerText: string;
  handleSubmit: (values: any) => void;
  getInitialValues: any;
  getValidationSchema: any;
  isLoading?: boolean;
  children: React.ReactNode;
  status?:QueryStatusEnum
}
function LayoutModal({isAddModal , headerText , handleSubmit =()=>{} , getInitialValues  , getValidationSchema,status ,children}:LayoutModalProps) {

  

  const  {isOpenAddModel ,setIsOpenAddModel , setIsOpenEditModel ,isOpenEditModel , objectToEdit , CloseAllModal} = usePageState(state => state)


    useEffect(()=>{
      if(status === QueryStatusEnum.SUCCESS){
          CloseAllModal()
      }
    },[status , CloseAllModal])
    const [t] = useTranslation()
    return (
    <Modal centered isOpen={isAddModal ? isOpenAddModel :isOpenEditModel} size="lg" >
      <ModalHeader toggle={() => isAddModal ?setIsOpenAddModel() : setIsOpenEditModel()} >
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
                  disabled={status === QueryStatusEnum.LOADING}
                  onClick={() => isAddModal ?setIsOpenAddModel() : setIsOpenEditModel()}
                  color="danger"
                >
                  {t("cancel")}
                </Button>
                <LoadingButton
                  type="submit"
                  color="primary"
                  isLoading={status === QueryStatusEnum.LOADING}
                >
                  {t(isAddModal ? "Add" :"edit")}
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