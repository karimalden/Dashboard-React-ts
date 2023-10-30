import React, { ReactNode } from 'react'
import QueryProvider from './lib/ReactQueryProvider'
import { BrowserRouter } from 'react-router-dom'

type ProviderContainerProps =  {
    children:ReactNode

}
function ProviderContainer({children}:ProviderContainerProps) {
  return (
    <BrowserRouter basename='/'>
     <QueryProvider>
        {children}
    </QueryProvider>
</BrowserRouter>
    )
}

export default ProviderContainer