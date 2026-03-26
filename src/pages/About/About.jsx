import React from "react";
import Hero from "../../componets/Hero";
import OurStory from "./componets/OurStory";
import OurJourney from "./componets/OurJourney";
import OurValues from "./componets/OurValues";
import OurLocations from "./componets/OurLocations";
import BrandGuidelines from "./componets/BrandGuidelines";

const About = () => {
    return (
        <main id="About" className="main-content">
            <Hero
                title="About Ollie's Coffee Company"
                description="Crafting exceptional coffee experiences since 1987"
            />
            <OurStory />
            <OurJourney />
            <OurValues />
            <OurLocations />
            <BrandGuidelines />
        </main>
    );
};
 
export default About;