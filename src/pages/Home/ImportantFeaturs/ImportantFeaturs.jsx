import React from "react";
import liveLocation from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";

const features = [
    {
        img: liveLocation,
        heading: "Live Parcel Tracking",
        description:
            "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
        img: safeDelivery,
        heading: "100% Safe Delivery",
        description:
            "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
        img: safeDelivery,
        heading: "24/7 Call Center Support",
        description:
            "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
];

const ImportantFeatures = () => {
    return (
        <div className="my-20 border-t-2 border-b-2 border-dashed">
            {features.map((feature, index) => (
                <div key={index}>
                    <div className="flex space-y-5 md:space-x-10 bg-slate-50 rounded-2xl shadow-xl my-20 p-8">
                        <div className="">
                            <img className="w-[200px]" src={feature.img} alt="" />
                        </div>
                        <div className="md:border-r-2 border-b-2 border-dotted"></div>
                        <div>
                            <h3 className="text-2xl font-bold"> {feature.heading} </h3>
                            <p>{feature.description} </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImportantFeatures;
