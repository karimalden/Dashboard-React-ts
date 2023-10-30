import React, { useEffect } from 'react'
import SideBar from './SideBar'
import Header from './Header'
import QueryProvider from '../../lib/ReactQueryProvider'
import { TOKEN_KEY } from '../../config/AppKey'
import { useNavigate } from 'react-router-dom'

const Layout = ({ children }: { children: React.ReactNode }) => {


  const navigate = useNavigate()
  useEffect(()=>{

    const token  = localStorage.getItem(TOKEN_KEY)
    
    if(!token){
          
      navigate('/auth' , {replace:true})
    }
  },[])
  return (
    <>
    <div className="DashboardLayout">

    <SideBar/>
    
    <div className={`DashboardLayout_Body`} id='DashboardLayout_Body'>
      <Header />
      <div className='Layout_Children'>
      {children}
      </div>
     
    </div>
    
    </div>
    </>
  )
}

export default Layout