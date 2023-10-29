import { lazy } from "react";
import { FaHome } from "react-icons/fa";

const Home = lazy(() => import("./Pages/Home/Home"))


export const RoutesLinks = [
    {
        name: "Home",
        href: "/",
        icon: <FaHome />,
        element: <Home />
    }
   
]