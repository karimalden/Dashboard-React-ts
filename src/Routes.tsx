import { lazy } from "react";

// Icon Import 
import {BsHexagon} from 'react-icons/bs'
import Page from "./Pages/Example2/Page";




// Laxy Load Page 
const ExamplePage = lazy(() => import("./Pages/example/Page"))


export const RoutesLinks = [
    {
        name: "example",
        href: "/",
        icon: <BsHexagon />,
        element: <ExamplePage />
    },
    {
        name: "example2",
        href: "/example2",
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
  
  
]