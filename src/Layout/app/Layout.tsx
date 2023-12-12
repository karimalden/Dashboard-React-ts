import React, { useEffect } from 'react'
import SideBar from './SideBar'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import useAuthState from '../../lib/state mangment/AuthState'

const Layout = ({ children }: { children: React.ReactNode }) => {


  const navigate = useNavigate()
  const { isAuthenticated } = useAuthState()
  useEffect(() => {
    if (!isAuthenticated) {

      // navigate('/auth', { replace: true })
    }
  }, [navigate])
  return (
    <>
      <div className="DashboardLayout">
        <div className='DashboardLayout_Cover' >
          <div className='out_Sidebar'>
              <SideBar />

          </div>
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