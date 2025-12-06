import {createBrowserRouter} from "react-router";
import RootLayOut from "../layouts/RootLayOut";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayOut from "../layouts/AuthLayOut";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayOut></RootLayOut>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/coverage",
                element: <Coverage></Coverage>,
                loader: () => fetch("/servicesArea.json").then((res) => res.json()),
            },
        ],
    },
    {
        path: "/",
        element: <AuthLayOut></AuthLayOut>,
        children: [
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
        ],
    },
]);
