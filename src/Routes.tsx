import { lazy } from "react";

// Icon Import 
import {BsHexagon} from 'react-icons/bs'




// Laxy Load Page 
const ExamplePage = lazy(() => import("./Pages/example/Page"))


export const RoutesLinks = [
    {
        name: "example",
        href: "/",
        icon: <BsHexagon />,
        element: <ExamplePage />
    }
  
]