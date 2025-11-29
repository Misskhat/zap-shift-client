import React from "react";
import Banner from "./Banner/Banner";
import HowItsWork from "../HowItsWrok/HowItsWork";
import OutServices from "../OurServices/OutServices";

const Home = () => {
    return (
        <div className="my-5">
            <Banner></Banner>
            <HowItsWork></HowItsWork>
            <OutServices></OutServices>
        </div>
    );
};

export default Home;
