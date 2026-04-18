import "../css/OurLocations.css";
import React, { useEffect, useRef, useState } from "react";

const API_URL = "https://csce242-rxy6.onrender.com/api/locations";

const OurLocations = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");
    const [showActions, setShowActions] = useState(false);
    const [editResult, setEditResult] = useState({});

    const addFormRef = useRef(null);

    const uploadImage = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setPrevSrc(URL.createObjectURL(file));
        }
    };

    const loadLocations = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error("Failed to load locations");
            }

            const data = await response.json();
            setLocations(data);
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadLocations();
    }, []);

    useEffect(() => {
        return () => {
            if (prevSrc) URL.revokeObjectURL(prevSrc);
        };
    }, [prevSrc]);

    const addLocationToServer = async (e) => {
        e.preventDefault();
        setResult("Sending...");

        try {
            const formData = new FormData(e.target);

            const response = await fetch(API_URL, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const errText = await response.text();
                throw new Error(errText || "Failed to add location");
            }

            const newLocation = await response.json();
            setLocations((prev) => [...prev, newLocation]);
            setResult("Location Added!");
            e.target.reset();
            setPrevSrc("");
            setTimeout(() => setResult(""), 3000);
        } catch (err) {
            setResult(`Error: ${err.message}`);
        }
    };

    const updateLocationToServer = async (e, id) => {
        e.preventDefault();
        setEditResult((prev) => ({ ...prev, [id]: "Sending..." }));

        try {
            const formData = new FormData(e.target);

            const fileInput = e.target.elements.image;
            const file = fileInput?.files?.[0];

            if (!file || file.size === 0) {
                formData.delete("image");
            }

            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                body: formData,
            });

            if (!response.ok) {
                const errText = await response.text();
                throw new Error(errText || "Failed to update location");
            }

            const updatedLocation = await response.json();

            setLocations((prev) =>
                prev.map((loc) => (loc.id === id ? updatedLocation : loc))
            );

            setEditResult((prev) => ({ ...prev, [id]: "Updated!" }));
            setTimeout(() => {
                setEditResult((prev) => ({ ...prev, [id]: "" }));
            }, 3000);
        } catch (err) {
            setEditResult((prev) => ({ ...prev, [id]: `Error: ${err.message}` }));
        }
    };

    const deleteLocationFromServer = async (id) => {
        const confirmed = window.confirm("Delete this location?");
        if (!confirmed) return;

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const errText = await response.text();
                throw new Error(errText || "Failed to delete location");
            }

            setLocations((prev) => prev.filter((loc) => loc.id !== id));
        } catch (err) {
            setError(err.message || "Error deleting location");
        }
    };

    if (loading) {
        return (
            <section className="locations">
                <h2 className="section-title">Our Locations</h2>
                <p className="locations-subtitle">Visit us at any of our locations across the city</p>
                <div className="locations-grid">
                    <div className="location-card location-card-skeleton">
                        <div className="skeleton skeleton-image"></div>
                        <div className="skeleton skeleton-line"></div>
                        <div className="skeleton skeleton-line"></div>
                        <div className="skeleton skeleton-line"></div>
                        <div className="skeleton skeleton-line"></div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return <p className="locations-error">Error: {error}</p>;
    }

    return (
        <section className="locations">
            <h2 className="section-title">Our Locations</h2>
            <p className="locations-subtitle">Visit us at any of our locations across the city</p>

            <div className="locations-grid">
                {locations.map((loc) => (
                    <div className="location-card" key={loc.id}>
                        {showActions ? (
                            <form
                                className="location-edit-form"
                                onSubmit={(e) => updateLocationToServer(e, loc.id)}
                            >
                                <div className="location-edit-preview">
                                    <img
                                        src={`${API_URL}/${loc.id}/image`}
                                        alt={loc.alt}
                                        className="location-img"
                                    />
                                </div>

                                <label className="file-upload" htmlFor={`edit-file-input-${loc.id}`}>
                                    <input
                                        type="file"
                                        id={`edit-file-input-${loc.id}`}
                                        name="image"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                const img = URL.createObjectURL(file);
                                                const imageEl = e.currentTarget
                                                    .closest("form")
                                                    ?.querySelector(".location-edit-preview img");
                                                if (imageEl) imageEl.src = img;
                                            }
                                        }}
                                    />
                                </label>

                                <input
                                    type="text"
                                    name="alt"
                                    defaultValue={loc.alt}
                                    placeholder="Image description"
                                    required
                                    minLength={3}
                                    maxLength={120}
                                />

                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={loc.name}
                                    placeholder="Location name"
                                    required
                                    minLength={3}
                                    maxLength={80}
                                />

                                <input
                                    type="text"
                                    name="address"
                                    defaultValue={loc.address}
                                    placeholder="Address"
                                    required
                                    minLength={3}
                                    maxLength={120}
                                />

                                <input
                                    type="text"
                                    name="hours"
                                    defaultValue={loc.hours}
                                    placeholder="Hours"
                                    required
                                    minLength={3}
                                    maxLength={80}
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    defaultValue={loc.phone}
                                    placeholder="Phone Number"
                                    required
                                    minLength={7}
                                    maxLength={20}
                                    title="phone number"
                                />

                                <div className="location-card-actions">
                                    <button
                                        type="submit"
                                        className="post-badge"
                                        disabled={editResult[loc.id] === "Sending..."}
                                    >
                                        {editResult[loc.id] || "Post"}
                                    </button>

                                    <button
                                        type="button"
                                        className="delete-badge"
                                        onClick={() => deleteLocationFromServer(loc.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <>
                                <img
                                    src={`${API_URL}/${loc.id}/image`}
                                    alt={loc.alt}
                                    className="location-img"
                                />
                                <h3>{loc.name}</h3>
                                <p>{loc.address}</p>
                                <p>{loc.hours}</p>
                                <p>{loc.phone}</p>
                            </>
                        )}
                    </div>
                ))}

                <form
                    className="location-card location-form"
                    onSubmit={addLocationToServer}
                    ref={addFormRef}
                >
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
                                <img
                                    src={prevSrc}
                                    alt="New Location Preview"
                                    className="location-img"
                                />
                            )}
                        </div>
                    </label>

                    <input
                        type="text"
                        name="alt"
                        placeholder="Image description"
                        required
                        minLength={3}
                        maxLength={120}
                    />

                    <input
                        type="text"
                        name="name"
                        placeholder="Location name"
                        required
                        minLength={3}
                        maxLength={80}
                    />

                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        required
                        minLength={3}
                        maxLength={120}
                    />

                    <input
                        type="text"
                        name="hours"
                        placeholder="Hours"
                        required
                        minLength={3}
                        maxLength={80}
                    />

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

            <footer className="locations-footer">
                <button
                    type="button"
                    className="locations-footer-toggle actions-badge"
                    onClick={() => setShowActions((prev) => !prev)}
                >
                    {showActions ? "Close Actions" : "Actions"}
                </button>
            </footer>
        </section>
    );
};

export default OurLocations;