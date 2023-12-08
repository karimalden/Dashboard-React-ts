import { ReactNode, lazy } from "react";

// Icon Import 
import {BsHexagon} from 'react-icons/bs'
import Page from "./Pages/Example2/Page";
import ExampleView from "./Pages/Example/View/Page";
import { IconType } from "react-icons";
import Test2Page from "./Pages/test2/Test2Page";
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
        Viewhref: "/:id"

    }
    , {
        name: "order",
        // type: "item",
        icon: <BsHexagon size={20} />,
        // href: "/order",
        element: <ExamplePage />,
        children :[
              {
        name: "categories",
        icon: <BsHexagon size={20} />,
        href: "/categories",
        element: <ExamplePage />
    },
          {
        name: "example2",
        icon: <BsHexagon size={20} />,
        href: "/example2",
        element: <ExamplePage />
    },
          {
        name: "categories",
        icon: <BsHexagon size={20} />,
        href: "/categories",
        element: <ExamplePage />
    }

        ],



    }

   
  
]