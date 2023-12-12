import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';
import { RoutesLinks } from '../../Routes';
import { useTranslation } from 'react-i18next';
import KarimLogo from './KarimLogo';
import { useWindowSize } from '../../Hooks/useWindowSize';
import Etaxi from './Etaxi';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const { pathname } = useLocation();

  const [isOpenSide, setIsOpenSide] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [t] = useTranslation();
  const windowSize = useWindowSize()
  
  const handleHamburgerMenu = () => {
    setIsOpenSide(true);
    document.getElementById('DashboardLayout_Body')?.classList.add('DashboardLayout_Body_Open');
  };

  const handleImg = () => {
    setIsOpenSide(false);
    document.getElementById('DashboardLayout_Body')?.classList.remove('DashboardLayout_Body_Open');
    setOpenDropdown(null); 
  };

  const handleDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className={isOpenSide ? 'SideBar SideBar_Open' : 'SideBar noOpen'}>
      <div className='SideBar_Top'>
        <div onClick={handleImg}>
         {/* <img src="../Layout/logorayan.png" width={isOpenSide ? 70 : 150} alt="" /> */}
         <Etaxi/>
        </div>
        <div className='HamburgerMenu' onClick={handleHamburgerMenu}>
          <GiHamburgerMenu />
        </div>
      </div>
      <div className='RoutesLinks'>
        {RoutesLinks?.map((item: any, index: number) => {
          const isActive = pathname === item?.href;
          const isDropdownOpen = openDropdown === index;

          if (item?.hidden) {
            return null;
          }

          if (item?.href  ) {
            return (
              <Link
                to={item?.href}
                className={isActive ? 'SideBar_Link Active_SideBar_Link' : 'SideBar_Link'}
                key={index}
              >
                    {React.cloneElement(item.icon, { size: 30 })}
                <div className='Link_Text'>{t(`${item?.name}`)}</div>
              </Link>
            );
          } else {
            return (
              <React.Fragment key={index}>
                <div
                  onClick={() => handleDropdown(index)}
                  className={
                    isDropdownOpen
                      ? 'SideBar_Link DropDown DropDown_SideBar_Link Open'
                      : 'SideBar_Link DropDown'
                  }
                >
                    {React.cloneElement(item.icon, { size: 30 })}
                  <div className='DropDown_Text'>{t(`${item?.name}`)}</div>
                  <div className='DropDown_Svg'>{isDropdownOpen ? <FaAngleDown /> : <FaAngleRight />}</div>
                </div>
                {isDropdownOpen &&
                  item?.children?.map((child: any, childIndex: number) => {
                    if (child?.href) {
                      return (
                        <Link to={child?.href} className={'SideBar_Link'} key={childIndex}>
                    {React.cloneElement(child.icon, { size: 30 })}
                          <div className='Link_Text'>{t(`${child?.name}`)}</div>
                        </Link>
                      );
                    }
                    return null;
                  })}
              </React.Fragment>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Sidebar;
