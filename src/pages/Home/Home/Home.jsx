import React from "react";
import Banner from "./Banner/Banner";
import HowItsWork from "../HowItsWrok/HowItsWork";
import OutServices from "../OurServices/OutServices";
import Brands from "../Brands/Brands";
import ImportantFeatures from "../ImportantFeaturs/ImportantFeaturs";
import Reviews from "../Reviews/Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
    return (
        <div className="my-5">
            <Banner></Banner>
            <HowItsWork></HowItsWork>
            <OutServices></OutServices>
            <Brands></Brands>
            <ImportantFeatures></ImportantFeatures>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;
