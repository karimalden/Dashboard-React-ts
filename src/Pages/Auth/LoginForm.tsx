import React from 'react'
import { Formik, Form, Field } from 'formik';
import Translate from '../../Components/Utils/Translate';
import { useTranslation } from 'react-i18next';


const LoginForm = () => {
  const [t] = useTranslation();

  return (
    <div className='LoginForm'>
     <nav className='Login_Nav'>
              <h5> {t("Login")} </h5>
              <div><Translate/></div>
            </nav>
    <Formik
    initialValues={{ username: '', password: '' }}
    onSubmit={(values) => {
      
  
    }
  
  
  }
  >
    <Form>
      <div className='form-outline mb-4'>
        <h4 className='Login_H4'>
        {t("Welcome back, please login to your account.")}
        </h4>
        <label className='form-label' htmlFor='username'>
          {t("Username")}
        </label>
        <Field
          as='input'
          type='text'
          id='username'
          name='username'
          className='form-control form-control-lg'
        />
      </div>

      <div className='form-outline mb-4'>
        <label className='form-label' htmlFor='password'>
          {t("Password")}
        </label>
        <Field
          as='input'
          type='password'
          id='password'
          name='password'
          className='form-control form-control-lg'
        />
      </div>

      <button type='submit' className='btn btn-primary btn-lg btn-block w-100'>
        {t("Sign in")}
      </button>
      <p className='Reserved'>{t("Karim aldeen © 2022 | All Rights Reserved")}</p>
    </Form>

  </Formik>
    </div>
    
  )
}

export default LoginForm