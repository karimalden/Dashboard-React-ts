import { ReactNode, lazy } from "react";

// Icon Import 
import {BsHexagon} from 'react-icons/bs'
import ExampleView from "./Pages/Example/View/Page";
import DriverPage from "./Pages/Driver/DriverPage";
import ViewDriver from "./Pages/Driver/View/Page";
    // import Page from "./Pages/ttt/Page";




// Laxy Load Page 
const ExamplePage = lazy(() => import("./Pages/Example/Page"))

interface RoutesLinksType {
    name:string ,
    href?:string,
    element:ReactNode,
    icon:any,
    Viewelement?:ReactNode,
    Viewhref?:string
    children?:any
    hidden?: boolean
}
export const RoutesLinks: RoutesLinksType[] = [ 
      {
        name: "example",
        href: "/",
        icon: <BsHexagon/> ,
        element: <ExamplePage />,
        Viewelement: <ExampleView />,

    }
   ,
    {
        name: "Drivers",
        href: "/Drivers",
        icon: <BsHexagon/> ,
        element: <DriverPage />,

    }
  
     ,
    {
        name: "Drivers",
        href: "/Drivers/:id",
        icon: <BsHexagon/> ,
        element: <ViewDriver />,
        hidden:true

    }
]