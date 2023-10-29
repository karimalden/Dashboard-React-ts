import { lazy } from "react";
import { FaHome, FaGgCircle } from "react-icons/fa";
import Page from "./NewLayout/Page";
import { Data } from "./Data";
const Home = lazy(() => import("./Pages/Home/Home"))
const Products = lazy(() => import("./Pages/Product/Products"))


const DynmicRoute = Data?.map(page => (
    {
        name: page?.name,
        href: page?.url,
        icon: <FaHome />,
        element: <Page
            name={page?.name}
            column={page?.column}
            api={page?.api}
            InitialValues={page?.InitialValues}
            ValidationSchema={page?.ValidationSchema}
            DataToSend={page?.DataToSend}
            EditModelData={page?.EditModelData}
            AddModelData={page?.AddModelData}
        />


    }
))
export const RoutesLinks = [
    {
        name: "Home",
        href: "/",
        icon: <FaHome />,
        element: <Home />
    },

    {
        name: "Sub",
        icon: <FaGgCircle />,
        children: [
            {
                name: "Subdonkey",
                href: "/Subdonkey",
                icon: <FaGgCircle />
            },
            {
                name: "Submoney",
                href: "/Submoney",
                icon: <FaGgCircle />
            }
        ]

    }
    ,

    ...DynmicRoute
]