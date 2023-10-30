import React from 'react'
import { UserImageURL } from './Const'
import Translate from '../../Components/Utils/Translate'
import { useTranslation } from 'react-i18next'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

type  TUserData = 
  {username:string | null,
   is_super_user:number | undefined
   }


const Header = () => {  
 const UserData:TUserData = {username:null,is_super_user:0}
 const [t] = useTranslation();

  return (  
    <div className='Header'>
      <div className='Header_Left'> </div>
      <div className='Header_Right'>
<Translate/>
<Menu menuButton={<MenuButton>
  
  <div className='User_Pro'>
       <div className='User_info'>
        <h6>{UserData?.username ?? t("unknown")}</h6>
        <p> {UserData?.is_super_user === 1  ? t("super admin") : t("admin") }   </p>
       </div>
        <img className='UNK_User' src={UserImageURL} alt='' width={40} height={40} />

        </div>
</MenuButton>} transition>
      <MenuItem>{t("Log Out")}</MenuItem>
      
    </Menu>
    
      
        
      </div>
    </div>
  )
}

export default Header