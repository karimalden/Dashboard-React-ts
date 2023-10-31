import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { useTranslation } from 'react-i18next';
import { usePageState } from '../../Layout/Dashboard/state';


let What_the_Theme = localStorage.getItem('theme')  ?? "light";

if (What_the_Theme == "dark") {
 
 document.body.classList.add('dark')}
  else{
    //   document.body.classList.remove('dark');
}


export default function Theme() {
  const {t} = useTranslation(); 

  const {setThemChange} = usePageState()

  const changeTheme = (newTheme : any) => {

    
    if(newTheme == "dark"){
     document.body.classList.add('dark');localStorage.setItem("theme", "dark");
      What_the_Theme = "dark"
    }
    else  if(newTheme == "light"){
     document.body.classList.remove('dark');localStorage.setItem("theme", "light");
      What_the_Theme = "light"

    }
    setThemChange()
  };

  console.log(What_the_Theme);
  
  return (
   <div className='Theme'>
    <Menu menuButton={<MenuButton>
      {(What_the_Theme  == "light") ?  
       <>
        <img alt='' src={`../Layout/light.svg`} width={20} height={20} className="custom-svg"/>  {t("light")}
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
