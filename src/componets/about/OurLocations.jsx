import "../../css/about/OurLocations.css";
import React from "react";

const locations = [
    {
        seed: "downtown-store",
        alt: "Downtown retail storefront",
        name: "Downtown Flagship",
        address: "123 Main Street, Downtown",
        hours: "Mon-Fri: 6am-8pm, Sat-Sun: 7am-9pm",
        phone: "(555) 123-4567",
    },
    {
        seed: "riverside-cafe",
        alt: "Riverside cafe location",
        name: "Riverside Cafe",
        address: "456 River Road, Riverside",
        hours: "Mon-Fri: 6:30am-7pm, Sat-Sun: 7am-8pm",
        phone: "(555) 234-5678",
    },
    {
        seed: "university-shop",
        alt: "University district coffee shop",
        name: "University District",
        address: "789 College Ave, University District",
        hours: "Mon-Sun: 5:30am-10pm",
        phone: "(555) 345-6789",
    },
    {
        seed: "westside-retail",
        alt: "Westside retail location",
        name: "Westside Location",
        address: "321 West Boulevard, Westside",
        hours: "Mon-Fri: 6am-7pm, Sat-Sun: 7am-8pm",
        phone: "(555) 456-7890",
    },
    {
        seed: "airport-terminal",
        alt: "Airport terminal cafe location",
        name: "Airport Terminal",
        address: "Terminal B, Gate 12, Airport",
        hours: "Mon-Sun: 5am-11pm",
        phone: "(555) 567-8901",
    },
    {
        seed: "northgate-shopping",
        alt: "Northgate shopping center retail store",
        name: "Northgate Shopping Center",
        address: "654 North Plaza, Northgate",
        hours: "Mon-Sat: 8am-9pm, Sun: 9am-7pm",
        phone: "(555) 678-9012",
    },
];

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
