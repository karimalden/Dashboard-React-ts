import React from 'react'
import { Formik, Form, Field } from 'formik';
import Translate from '../../Components/Utils/Translate';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { TOKEN_KEY } from '../../config/AppKey';


const LoginForm = () => {
  const [t] = useTranslation();

  const navigate = useNavigate()

  
  const handelSubmit = (values:any)=>{

    // Implemnt Your Auth Code 
    localStorage.setItem(TOKEN_KEY, "fake")
    navigate('/', { replace: true })
  }
  return (
    <div className='LoginForm'>
      <nav className='Login_Nav'>
        <h5> {t("Login")} </h5>
        <div><Translate /></div>
      </nav>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handelSubmit}
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
              placeholder={t('username')}
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
            placeholder={t('password')}
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