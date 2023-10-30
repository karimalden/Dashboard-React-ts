import React from 'react'
import LoginForm from './LoginForm';
import Translate from '../../Components/Utils/Translate';
const Auth = () => {

  
  return (
    <div className='Auth'>
      <div className='In_Auth'>
          <div className="Left_Col">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone"
             
            />
          </div>
          <div className=" Right_Col ">
           
         <LoginForm/>
         
          </div>
        </div>

    </div>
  )
}

export default Auth