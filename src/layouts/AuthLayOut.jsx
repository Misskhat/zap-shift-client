import React from "react";
import {Outlet} from "react-router";
import authImage from "../assets/authImage.png";
import Logo from "../compnents/logo/Logo";

const AuthLayOut = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <Logo></Logo>
            </div>
            <div className=" flex items-center justify-center">
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
                <div className="flex-1">
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayOut;
