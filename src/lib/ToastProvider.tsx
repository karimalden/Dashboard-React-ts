import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function ToastProvider({ children }: any) {
  return (
    <>
     <ToastContainer 
     
     position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
     />
    {children}
    </>
  )
}

export default ToastProvider