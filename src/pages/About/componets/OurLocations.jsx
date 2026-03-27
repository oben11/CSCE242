import "../css/OurLocations.css";
import locations from "./Locations.json"
import React from "react";


const OurLocations = () => {
    return (
        <section className="locations">
            <h2 className="section-title" style={{ textAlign: "center", color: "var(--cream)" }}>
                Our Locations
            </h2>
            <p className="locations-subtitle">
                Visit us at any of our locations across the city
            </p>
            <div className="locations-grid">
                {locations.map((loc) => (
                    <div className="location-card" key={loc.seed}>
                        <img
                            src={`https://picsum.photos/seed/${loc.seed}/600/400`}
                            alt={loc.alt}
                            className="location-img"
                        />
                        <h3>{loc.name}</h3>
                        <p>{loc.address}</p>
                        <p>{loc.hours}</p>
                        <p>{loc.phone}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurLocations;
