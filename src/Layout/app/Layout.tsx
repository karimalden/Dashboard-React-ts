import React, { useEffect } from 'react'
import SideBar from './SideBar'
import Header from './Header'
import { TOKEN_KEY } from '../../config/AppKey'
import { useNavigate } from 'react-router-dom'

const Layout = ({ children }: { children: React.ReactNode }) => {


  const navigate = useNavigate()
  useEffect(()=>{

    const token  = localStorage.getItem(TOKEN_KEY)
    
    if(!token){
          
      navigate('/auth' , {replace:true})
    }
  },[navigate])
  return (
    <>
    <div className="DashboardLayout">
    <div className='DashboardLayout_Cover' >
    <SideBar/>
    
    <div className={`DashboardLayout_Body`} id='DashboardLayout_Body'>
      <Header />
      <div className='Layout_Children'>
      {children}
      </div>
     
    </div>
    </div>
    </div>
    </>
  )
}

export default Layout