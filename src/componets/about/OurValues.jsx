import "../../css/about/OurValues.css";
import React from "react";

const values = [
    {
        title: "Quality First",
        description:
            "We never compromise on the quality of our beans, equipment, or service. Every cup is crafted with care and expertise.",
    },
    {
        title: "Community Driven",
        description:
            "We're more than a coffee shop—we're a gathering place. Supporting our local community is at the heart of everything we do.",
    },
    {
        title: "Sustainability",
        description:
            "From ethical sourcing to eco-friendly packaging, we're committed to protecting our planet and supporting coffee farmers.",
    },
];

const OurValues = () => {
    return (
        <section className="values">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
                {values.map((value) => (
                    <div className="value-card" key={value.title}>
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurValues;
