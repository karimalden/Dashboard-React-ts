import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next'; // Make sure this import is correct
import translationEN from '../../translate/en.json';
import translationAR from '../../translate/ar.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN
    },
    ar: {
      translation: translationAR
    }
  },
  lng: 'en', 
  interpolation: {
    escapeValue: false
  }
});
let What_the_language = localStorage.getItem('language')  ?? "en";

if (What_the_language === "en") {
 
  i18n.changeLanguage('en'); 
  document.body.setAttribute('dir', 'ltr'); document.body.classList.add('en')}
  else{
    i18n.changeLanguage('ar'); 
      document.body.setAttribute('dir', 'rtl'); document.body.classList.add('ar');
}


export default function Translate() {
  const { t, i18n } = useTranslation();

  
  const changeLanguage = (newLanguage : any) => {
    i18n.changeLanguage(newLanguage);
    if(newLanguage === "Ar"){
      i18n.changeLanguage('ar'); 
      document.body.setAttribute('dir', 'rtl'); document.body.classList.add('ar');localStorage.setItem("language", "ar");
      What_the_language = "ar"
    }
    else  if(newLanguage === "En"){
      i18n.changeLanguage('en'); 
      document.body.setAttribute('dir', 'ltr'); document.body.classList.remove('ar');localStorage.setItem("language", "en");
      What_the_language = "en"

    }
  };

  return (
   <div className='Translate'>
    <Menu menuButton={<MenuButton>
      {What_the_language  === "ar" ?  
       <>
        <img alt='' src={`../Layout/Ar.svg`} width={20} height={20} />  {t("Arabic")}
       </>

      : 
        <>
              <img alt='' src={`../Layout/En.svg`} width={20} height={20} /> {t("English")}

        </>
      }
    </MenuButton>} transition>
      <MenuItem onClick={() => changeLanguage('Ar')}>
        <img alt='' src='../Layout/Ar.svg' width={20} height={20} />  {t("Arabic")}
      </MenuItem>
      <MenuItem onClick={() => changeLanguage('En')}>
        <img alt='' src='../Layout/En.svg' width={20} height={20} /> {t("English")}
      </MenuItem>
    </Menu>
   
   </div>
  );
}
