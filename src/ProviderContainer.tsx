import React, { ReactNode } from 'react'
import QueryProvider from './lib/ReactQueryProvider'
import { BrowserRouter } from 'react-router-dom'
import ToastProvider from './lib/ToastProvider'

type ProviderContainerProps =  {
    children:ReactNode

}
function ProviderContainer({children}:ProviderContainerProps) {
  return (
    <BrowserRouter basename='/'>
     <QueryProvider>
        <ToastProvider>
             {children}
        </ToastProvider>
    </QueryProvider>
</BrowserRouter>
    )
}

export default ProviderContainer