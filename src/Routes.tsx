import { lazy } from "react";

// Icon Import 
import {BsHexagon} from 'react-icons/bs'
import Page from "./Pages/Example2/Page";
import ExampleView from "./Pages/Example/View/Page";
// import Page from "./Pages/ttt/Page";




// Laxy Load Page 
const ExamplePage = lazy(() => import("./Pages/Example/Page"))


export const RoutesLinks = [ 
    {
        name: "example",
        href: "/",
        icon: <BsHexagon />,
        element: <ExamplePage />,
        Viewelement: <ExampleView />,
        Viewhref: "/:id"

    },
    {
        name: "test",
        href: "/test",
        icon: <BsHexagon />,
        element: <Page />
    }
    ,
    {
        name: "example3",
        href: "/example3",
        icon: <BsHexagon />,
        element: <Page />
    }
  
    ,
    {
        name: "example4",
        href: "/example4",
        icon: <BsHexagon />,
        element: <Page />
    }
  
    ,
    {
        name: "example5",
        href: "/example5",
        icon: <BsHexagon />,
        element: <Page />
    }
  
    ,
    {
        name: "example6",
        href: "/example6",
        icon: <BsHexagon />,
        element: <Page />
    }
  
    ,
    {
        name: "example7",
        href: "/example7",
        icon: <BsHexagon />,
        element: <Page />
    }
  
    
    // {
    //     name: "example2",
    //     href: "/example2",
    //     icon: <BsHexagon />,
    //     element: <Page />
    // },
   
  
]