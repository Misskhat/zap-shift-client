import React from "react";
import useAuth from "../hooks/useAuth";
import {Navigate} from "react-router";

const PrivateRouter = ({children}) => {
    const {user, loading} = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }
    if (!user) {
        return <Navigate to={"/login"} state={location}></Navigate>;
    }
    return children;
};

export default PrivateRouter;
