import { useField, useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import { Field } from 'formik';

const useFormField = (name: string, props?: any) => {
  const [field, meta] = useField({ name, ...props });
  const { t } = useTranslation();
  const formik = useFormikContext<any>();
  const isError = meta.touched && meta.error;

  const errorMsg = meta.error ? t(meta.error.toString()) : '';

  return { Field, field, meta, formik, isError, errorMsg, t };
};

export default useFormField;
