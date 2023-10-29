import { lazy } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import Users from "./Pages/users/Users";

const Home = lazy(() => import("./Pages/Home/Home"))


export const RoutesLinks = [
    {
        name: "Home",
        href: "/",
        icon: <FaHome />,
        element: <Home />
    },
    {
        name: "Ibrahim",
        href: "/ibrahim",
        icon: <FaHome />,
        element: <Home />
    },
    {
        name: "user",
        href: "/",
        icon: <FaUser />,
        element: <Users />
    }
   
]