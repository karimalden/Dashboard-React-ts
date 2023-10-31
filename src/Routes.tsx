import { lazy } from "react";

// Icon Import 
import {BsHexagon} from 'react-icons/bs'
import { FaHome } from "react-icons/fa";
import HomePage from "./Pages/Home/HomePage";




// Laxy Load Page 
const ExamplePage = lazy(() => import("./Pages/example/Page"))


export const RoutesLinks = [
    {
        name: "home",
        href: "/",
        icon: <FaHome />,
        element: <HomePage />
    }
    ,
    {
        name: "example",
        href: "/example",
        icon: <BsHexagon />,
        element: <ExamplePage />
    }
  
]