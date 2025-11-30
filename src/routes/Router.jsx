import {createBrowserRouter} from "react-router";
import RootLayOut from "../layouts/RootLayOut";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";

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
]);
