import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { useTranslation } from 'react-i18next';
import { usePageState } from '../../lib/state';
import { BsFillMoonStarsFill, BsFillSunFill, BsSunglasses } from 'react-icons/bs';


let What_the_Theme = localStorage.getItem('theme')  ?? "light";

if (What_the_Theme === "dark") {
 
 document.body.classList.add('dark')}
  else if (What_the_Theme === "glass") {

    document.body.classList.add('glass')
  }




export default function Theme() {
  const {t} = useTranslation(); 

  const {setThemChange} = usePageState()

  const changeTheme = (newTheme : any) => {

    
    if(newTheme === "dark"){
      document.body.classList.remove('glass');
     document.body.classList.add('dark');localStorage.setItem("theme", "dark");
      What_the_Theme = "dark"
    }
    else  if(newTheme === "light"){
      document.body.classList.remove('glass');
     document.body.classList.remove('dark');localStorage.setItem("theme", "light");
      What_the_Theme = "light"

    }
    else  if(newTheme === "glass"){
      document.body.classList.remove('dark');  document.body.classList.add('glass'); localStorage.setItem("theme", "glass");
       What_the_Theme = "glass"
 
     }
    setThemChange()
  };
  /// BsSunglasses  BsFillSunFill  BsFillMoonStarsFill

  
  return (
   <div className='Theme'>
    <Menu menuButton={<MenuButton>
      {(What_the_Theme  === "light") ?  
       <>
        <BsFillSunFill/>        
         {t("light")}
       </>

      : (What_the_Theme  === "dark") ?   
      <>
      <BsFillMoonStarsFill/>        
       {t("dark")}
     </>
      :
        <>
 <BsSunglasses/>        
       {t("glass")}
        </>
      }
    </MenuButton>} transition>
      <MenuItem onClick={() => changeTheme('light')}>
      <BsFillSunFill/>        
         {t("light")}
      </MenuItem>
      <MenuItem onClick={() => changeTheme('dark')}>
      <BsFillMoonStarsFill/>        
       {t("dark")}      </MenuItem>
      <MenuItem onClick={() => changeTheme('glass')}>
      <BsSunglasses/>        
       {t("glass")}      </MenuItem>
    </Menu>
   
   </div>
  );
}
