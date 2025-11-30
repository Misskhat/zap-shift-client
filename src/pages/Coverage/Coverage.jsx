import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {useLoaderData} from "react-router";

const Coverage = () => {
    const position = [23.6805, 90.3563];
    const servicesArea = useLoaderData();
    console.log(servicesArea);
    return (
        <div>
            <div> </div>
            <div> </div>
            <div className="h-[500px]">
                <MapContainer className="h-[500px]" center={position} zoom={8} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {servicesArea.map((area, index) => (
                        <Marker key={index} position={[area.latitude, area.longitude]}>
                            <Popup>
                                {area.district} <br /> Service Area: {area.covered_area.join(", ")}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
                ,
            </div>
        </div>
    );
};

export default Coverage;
