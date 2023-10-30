import { lazy } from "react";

// Icon Import 
import { FaHome, FaUser } from "react-icons/fa";
import {BsHexagon} from 'react-icons/bs'




// Laxy Load Page 
const Home = lazy(() => import("./Pages/Home/Home"))
const ExamplePage = lazy(() => import("./Pages/example/Page"))


export const RoutesLinks = [
    {
        name: "Home",
        href: "/",
        icon: <FaHome />,
        element: <Home />
    },
    {
        name: "example",
        href: "/example",
        icon: <BsHexagon />,
        element: <ExamplePage />
    }
  
]