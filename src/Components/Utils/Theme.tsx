import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


let What_the_Theme = localStorage.getItem('theme')  ?? "light";

if (What_the_Theme == "dark") {
 
 document.body.classList.add('dark')}
  else{
    //   document.body.classList.remove('dark');
}


export default function Theme() {
  const [Theme, setTheme] = useState("light");
  const {t} = useTranslation();

  
  const changeTheme = (newTheme : any) => {
    setTheme(newTheme);
    if(newTheme == "dark"){
     document.body.classList.add('dark');localStorage.setItem("theme", "dark");
      What_the_Theme = "dark"
    }
    else  if(newTheme == "light"){
     document.body.classList.remove('dark');localStorage.setItem("theme", "light");
      What_the_Theme = "light"

    }
  };

  return (
   <div className='Theme'>
    <Menu menuButton={<MenuButton>
      {What_the_Theme  == "light" ?  
       <>
        <img alt='' src={`../Layout/light.svg`} width={20} height={20} />  {t("light")}
       </>

      : 
        <>
              <img alt='' src={`../Layout/dark.svg`} width={20} height={20} /> {t("dark")}

        </>
      }
    </MenuButton>} transition>
      <MenuItem onClick={() => changeTheme('light')}>
        <img alt='' src='../Layout/light.svg' width={20} height={20} />  {t("light")}
      </MenuItem>
      <MenuItem onClick={() => changeTheme('dark')}>
        <img alt='' src='../Layout/dark.svg' width={20} height={20} /> {t("dark")}
      </MenuItem>
    </Menu>
   
   </div>
  );
}
