import "../../css/about/OurJourney.css";
import React from "react";

const timelineEvents = [
    {
        year: "1987",
        title: "The Beginning",
        description:
            "Ollie Patterson opens the first Ollie's Coffee Company in a small storefront in downtown, serving hand-roasted coffee to the local community.",
    },
    {
        year: "1992",
        title: "Expansion",
        description:
            "Opens three more locations across the city, establishing our signature house blend that becomes a local favorite.",
    },
    {
        year: "1998",
        title: "Award Recognition",
        description:
            "Our House Blend wins \"Best Coffee in the Region\" from Coffee Connoisseur Magazine, putting Ollie's on the national map.",
    },
    {
        year: "2005",
        title: "Going Green",
        description:
            "Commits to 100% ethical sourcing and becomes certified Fair Trade, ensuring farmers receive fair compensation.",
    },
    {
        year: "2012",
        title: "Tech Innovation",
        description:
            "Launches mobile ordering app and rewards program, making it easier than ever for customers to enjoy their favorite drinks.",
    },
    {
        year: "2018",
        title: "Community Focus",
        description:
            "Establishes the Ollie's Foundation, donating 1% of all sales to local community programs and coffee-growing regions.",
    },
    {
        year: "2026",
        title: "Today",
        description:
            "Operating 15+ locations with the same commitment to quality and community that started it all nearly 40 years ago.",
    },
];

const OurJourney = () => {
    return (
        <section className="timeline">
            <h2 className="section-title" style={{ textAlign: "center" }}>
                Our Journey
            </h2>
            <div className="timeline-container">
                {timelineEvents.map((event) => (
                    <div className="timeline-item" key={event.year}>
                        <div className="timeline-year">{event.year}</div>
                        <div className="timeline-content">
                            <div className="timeline-card">
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurJourney;
