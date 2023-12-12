import React from 'react'
import { UserImageURL } from './Const'
import Translate from '../../Components/Utils/Translate'
import { useTranslation } from 'react-i18next'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Theme from '../../Components/Utils/Theme';
import { TOKEN_KEY } from '../../config/AppKey';
import { useNavigate } from 'react-router-dom';
import useAuthState from '../../lib/state mangment/AuthState';
import { GiHamburgerMenu } from 'react-icons/gi';
import WithDrawer from './WithDrawer';
import Sidebar from './SideBar';

type TUserData =
  {
    username: string | null,
    role: string | null 
  }


const Header = () => {


  const [t] = useTranslation();
  const navigate = useNavigate()

  const { logout , user} = useAuthState()
  const handelClick = () => {
    logout()
    navigate('/auth', { replace: true })
  }

  
  
  return (
    <div className='Header'>
      <div className='Header_Left'> 
          <WithDrawer
    title="Cart Item"
      button={ 
          <div className="Cart_Icon">
          <GiHamburgerMenu  />
          </div>
    }
    >
    <Sidebar/>
    </WithDrawer>
      </div>
      <div className='Header_Right'>
        <Theme />
        <Translate />
        <Menu menuButton={<MenuButton>

          <div className='User_Pro'>
            <div className='User_info'>
              <h6>{user?.full_name}</h6>
              <p> {user?.role_type}   </p>
            </div>
            <img className='UNK_User' src={UserImageURL} alt='' width={40} height={40} />

          </div>
        </MenuButton>} transition>
          <MenuItem onClick={handelClick}>{t("Log Out")}</MenuItem>

        </Menu>



      </div>
    </div>
  )
}

export default Header