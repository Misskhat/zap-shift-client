import {createBrowserRouter} from "react-router";
import RootLayOut from "../layouts/RootLayOut";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayOut from "../layouts/AuthLayOut";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRouter from "./PrivateRouter";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MyParcels from "../pages/DashBoard/MyParcels/MyParcels";
import Payments from "../pages/DashBoard/Payments/Payments";
import PaymentSuccess from "../pages/DashBoard/Payments/PaymentSuccess";
import PaymentCancelled from "../pages/DashBoard/Payments/PaymentCancelled";

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
                path: "/rider",
                element: (
                    <PrivateRouter>
                        <Rider></Rider>
                    </PrivateRouter>
                ),
            },
            {
                path: "/send-parcel",
                element: (
                    <PrivateRouter>
                        <SendParcel></SendParcel>
                    </PrivateRouter>
                ),
                loader: () => fetch("/servicesArea.json").then((res) => res.json()),
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
    {
        path: "/dashboard",
        element: (
            <PrivateRouter>
                <DashBoardLayout></DashBoardLayout>
            </PrivateRouter>
        ),
        children: [
            {
                path: "myParcels",
                element: <MyParcels></MyParcels>,
            },
            {
                path: "payment/:parcelId",
                element: <Payments></Payments>,
            },
            {
                path: "payment-success",
                element: <PaymentSuccess></PaymentSuccess>
            },
            {
                path: "payment-cancelled",
                element: <PaymentCancelled></PaymentCancelled>
            }
        ],
    },
]);
