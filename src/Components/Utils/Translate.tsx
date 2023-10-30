import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useState } from 'react';
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

export default function Translate() {
  const [language, setLanguage] = useState("En");
  const { t, i18n } = useTranslation();

  const changeLanguage = (newLanguage : any) => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    if(newLanguage == "Ar"){
      document.body.setAttribute('dir', 'rtl'); document.body.classList.add('ar');localStorage.setItem("language", "Ar");
    }
    else  if(newLanguage == "En"){
      document.body.setAttribute('dir', 'ltr'); document.body.classList.add('en');localStorage.setItem("language", "En");
    }
  };

  return (
   <div className='Translate'>
    <Menu menuButton={<MenuButton>
        <img alt='' src={`../Layout/${language}.svg`} width={20} height={20} /> {language == "Ar" ?  "Arabic": "English" }
    </MenuButton>} transition>
      <MenuItem onClick={() => changeLanguage('Ar')}>
        <img alt='' src='../Layout/Ar.svg' width={20} height={20} />  Arabic
      </MenuItem>
      <MenuItem onClick={() => changeLanguage('En')}>
        <img alt='' src='../Layout/En.svg' width={20} height={20} /> English
      </MenuItem>
    </Menu>
   
   </div>
  );
}
