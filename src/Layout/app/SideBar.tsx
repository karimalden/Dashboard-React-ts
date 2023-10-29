'use client'
import { SideBarLogoUrl } from './Const'
import React, { useState } from 'react'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { RoutesLinks } from '../../Routes';

const SideBar = () => {
  const {pathname} = useLocation();

  const [Isopen, setIsopen] = useState<boolean>(false)
  const [IsopenSide, setIsopenSide] = useState<boolean>(false)
    const OnHamburgerMenu = ()=>{
      setIsopenSide(true)
      document.getElementById("DashboardLayout_Body")?.classList.add("DashboardLayout_Body_Open")
      }
      const Onimg= ()=>{
        setIsopenSide(false)
        document.getElementById("DashboardLayout_Body")?.classList.remove("DashboardLayout_Body_Open")

        }
  

  return (
    <div className={IsopenSide ? "SideBar SideBar_Open" : 'SideBar'}>
      <div className='SideBar_Top'>
        <img alt=' ' src={SideBarLogoUrl} width={60} height={40} onClick={()=>Onimg()}/>
        <div className='HamburgerMenu' onClick={()=> OnHamburgerMenu()} >
          <GiHamburgerMenu />

        </div>

      </div>
      <div className='RoutesLinks'>
        {
          RoutesLinks?.map((i:any, index:number) => {
            const isActive = pathname === i?.href;

            if (i?.href) {
              return (
        
                  <Link
                    to={i?.href}
                    className={isActive ? 'SideBar_Link Active_SideBar_Link' : 'SideBar_Link'}
                    key={index}
                  >
                    {i?.icon}
                    <div className='Link_Text'>
                      {(`${i?.name}`)}

                    </div>
                  </Link>

              )
            }
            else {
              return (
                <React.Fragment key={index}>
                  <div
                    className={Isopen ? 'SideBar_Link DropDown  DropDown_SideBar_Link' : 'SideBar_Link DropDown'}
                    key={index}

                  >
                    <div onClick={() => setIsopen(v => !v)}>
                    {i?.icon}
                    </div>
                    
                    <div className='DropDown_Text'>
                      {i?.name}
                    </div>
                    <div className='DropDown_Svg' onClick={() => setIsopen(v => !v)}>
                     {Isopen ? <FaAngleDown /> :  <FaAngleRight />

                     }

                    </div>
                  </div>
                  {Isopen ?

                    i?.children?.map((i:any, index:number) => {
                      if (i?.href) {
                        return (
                          <React.Fragment key={index}>
                            <Link
                              to={i?.href}
                              className={'SideBar_Link'}
                            >
                              {i?.icon}
                              <div className='Link_Text'>
                                {i?.name}

                              </div>
                            </Link>

                          </React.Fragment>

                        )
                      }
                    }

                    )
                    : ""

                  }
                </React.Fragment>

              )
            }

          })
        }



      </div>
    </div>
  )
}

export default SideBar