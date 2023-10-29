import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import QueryProvider from '../../lib/ReactQueryProvider'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
    <div className="DashboardLayout">

    <SideBar/>
    
    <div className={`DashboardLayout_Body`} id='DashboardLayout_Body'>
      <Header />
      <div className='Layout_Children'>
      {children}
      </div>
     
    </div>
    
    </div>
    </QueryProvider>
  )
}

export default Layout