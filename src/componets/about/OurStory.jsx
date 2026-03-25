import "../../css/about/OurStory.css";
import React from "react";

const OurStory = () => {
    return (
        <section className="story">
            <h2 className="section-title">Our Story</h2>
            <div className="story-content">
                <p>
                    What started as a passion project in a small downtown storefront has
                    grown into a beloved coffee company serving thousands of customers
                    every day. Our founder, Ollie Patterson, believed that great coffee
                    should be accessible to everyone, and that belief continues to guide
                    us today.
                </p>
                <p>
                    We source our beans from ethical, sustainable farms around the
                    world, roast them in small batches right here in our city, and serve
                    them with care at each of our locations. Every cup is a testament
                    to our commitment to quality, community, and the art of coffee
                    making.
                </p>
            </div>
        </section>
    );
};

export default OurStory;
