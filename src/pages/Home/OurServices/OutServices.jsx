import React from "react";
import servicesImage from "../../../assets/service.png";

const services = [
    {
        img: servicesImage,
        serviceHeader: "Express  & Standard Delivery",
        serviceDesc:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
        img: servicesImage,
        serviceHeader: "Nationwide Delivery",
        serviceDesc:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
        img: servicesImage,
        serviceHeader: "Fulfillment Solution",
        serviceDesc:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
        img: servicesImage,
        serviceHeader: "Cash on Home Delivery",
        serviceDesc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
        img: servicesImage,
        serviceHeader: "Corporate Service / Contract In Logistics",
        serviceDesc: "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
        img: servicesImage,
        serviceHeader: "Parcel Return",
        serviceDesc:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
];

const OutServices = () => {
    return (
        <div className="bg-[#03373D] rounded-2xl md:p-24 p-5">
            <div className="text-center text-white mb-8">
                <h2 className="text-5xl font-bold mb-4">Our Services</h2>
                <p className="opacity-80 md:w-[718px] mx-auto mb-4">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages
                    to business shipments — we deliver on time, every time.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {services.map((service) => (
                    <div className="p-8 bg-white text-center rounded-2xl">
                        <div className="flex items-center justify-center">
                            <img src={service.img} alt="" />
                        </div>
                        <h3 className="text-2xl font-bold py-4">{service.serviceHeader}</h3>
                        <p className="opacity-80">{service.serviceDesc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OutServices;
