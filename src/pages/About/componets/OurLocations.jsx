import "../css/OurLocations.css";
import React, { useState, useEffect } from "react";

const OurLocations = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://csce242-rxy6.onrender.com/api/locations")
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                setLocations(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading locations...</p>;
    if (error) return <p>Error: {error}</p>;

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