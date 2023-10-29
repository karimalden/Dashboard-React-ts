import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/AppStyle/Import.scss'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import i18n from '../src/translate/Translate'

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(

  <BrowserRouter  basename="/">
    
   <App />

  </BrowserRouter>
);

