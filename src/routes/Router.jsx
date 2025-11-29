import {createBrowserRouter} from "react-router";
import RootLayOut from "../layouts/RootLayOut";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayOut></RootLayOut>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
        ],
    },
]);
