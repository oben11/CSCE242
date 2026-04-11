import { useState } from "react";

function addLocation() {
    const [location, setLocation] = useState({
        name: "Name",
        address: "Address",
        hours: "Hours",
        phone: "Phone"
    });

    const handleChange = (e) => {
        setLocation({
            ...location,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="location-card">
            <img
                src=""
                alt="New Location"
                className="location-img"
            />

            <input
                name="name"
                value={location.name}
                onChange={handleChange}
            />

            <input
                name="address"
                value={location.address}
                onChange={handleChange}
            />

            <input
                name="hours"
                value={location.hours}
                onChange={handleChange}
            />

            <input
                name="phone"
                value={location.phone}
                onChange={handleChange}
            />

            <div className="post-badge">
                post
            </div>
        </div>
    );
}

export default addLocation;