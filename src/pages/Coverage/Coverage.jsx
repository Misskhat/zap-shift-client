import React, {useRef} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {useLoaderData} from "react-router";

const Coverage = () => {
    const position = [23.6805, 90.3563];
    const servicesArea = useLoaderData();
    const mapRef = useRef();
    // console.log(servicesArea);

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        // console.log("click", location);
        const district = servicesArea.find((c) => c.district.toLowerCase().includes(location.toLowerCase()));
        if (district) {
            const coordinate = [district.latitude, district.longitude];
            mapRef.current.flyTo(coordinate, 14);
        }
    };

    return (
        <div>
            <div> </div>
            <div className="my-10">
                <form onSubmit={handleSearch}>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input name="location" type="search" required placeholder="Search" />
                    </label>
                </form>
            </div>
            <div className="h-[800px] my-10">
                <MapContainer className="h-[800px]" ref={mapRef} center={position} zoom={8} scrollWheelZoom={true}>
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
