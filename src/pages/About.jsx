import React from "react";
import Hero from "../componets/Hero";
import OurStory from "../componets/about/OurStory";
import OurJourney from "../componets/about/OurJourney";
import OurValues from "../componets/about/OurValues";
import OurLocations from "../componets/about/OurLocations";
import BrandGuidelines from "../componets/about/BrandGuidelines";

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