import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/AppStyle/Import.scss'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ProviderContainer from './ProviderContainer';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(

  <ProviderContainer>
    <App />
  </ProviderContainer>    

);