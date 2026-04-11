import "../css/OurLocations.css";
import React, { useState, useEffect } from "react";

const OurLocations = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const API_URL = "https://csce242-rxy6.onrender.com/api/locations";

    const uploadImage = (e) => {
        if (e.target.files[0]) {
            setPrevSrc(URL.createObjectURL(e.target.files[0]));
        }
    };

    const addLocationToServer = async (e) => {
        e.preventDefault();
        setResult("Sending...");

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                body: new FormData(e.target),
            });

            if (response.ok) {
                const newLocation = await response.json();
                setResult("Location Added!");
                setLocations((prev) => [...prev, newLocation]);
                e.target.reset();
                setPrevSrc("");
                setTimeout(() => setResult(""), 3000);
            } else {
                const errText = await response.text();
                setResult(`Error: ${errText}`);
            }
        } catch (err) {
            setResult("Error adding location");
            console.error(err);
        }
    };

    useEffect(() => {
        const loadLocations = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setLocations(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadLocations();
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
                    <div className="location-card" key={loc.id}>
                        <img
                            src={`${API_URL}/${loc.id}/image`}
                            alt={loc.alt}
                            className="location-img"
                        />
                        <h3>{loc.name}</h3>
                        <p>{loc.address}</p>
                        <p>{loc.hours}</p>
                        <p>{loc.phone}</p>
                    </div>
                ))}

                <form className="location-card location-form" onSubmit={addLocationToServer}>
                    {/* Image upload — required, images only */}
                    <label className="file-upload" htmlFor="file-input">
                        <input
                            type="file"
                            id="file-input"
                            name="image"
                            accept="image/*"
                            required
                            onChange={uploadImage}
                        />
                        <div className="location-img">
                            {prevSrc && (
                                <img src={prevSrc} alt="New Location Preview" className="location-img" />
                            )}
                        </div>
                    </label>

                    {/* Image alt text — min 3 chars, matches Joi schema */}
                    <input
                        type="text"
                        name="alt"
                        placeholder="Image description"
                        required
                        minLength={3}
                        maxLength={120}
                    />

                    {/* Name — min 3 chars */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Location name"
                        required
                        minLength={3}
                        maxLength={80}
                    />

                    {/* Address — min 3 chars */}
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        required
                        minLength={3}
                        maxLength={120}
                    />

                    {/* Hours — min 3 chars */}
                    <input
                        type="text"
                        name="hours"
                        placeholder="Hours"
                        required
                        minLength={3}
                        maxLength={80}
                    />

                    {/* Phone — min 7 digits, pattern enforces digit/dash/paren/space/+ format */}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        minLength={7}
                        maxLength={20}
                        title="phone number"
                    />

                    <button type="submit" className="post-badge" disabled={result === "Sending..."}>
                        {result || "Add Location"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default OurLocations;