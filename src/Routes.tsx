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
  
]