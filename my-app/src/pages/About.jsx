import "../css/About.css";
import React from "react";

const About = () => {
    return (
        <main id="About" className="main-content">
            <meta charset="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>About Us - Ollie's Coffee Company</title>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:wght@400;500;600&display=swap" rel="stylesheet"></link>


            <section className="hero">
                <div className="hero-content">
                    <h1>About Ollie's Coffee Company</h1>
                    <p>Crafting exceptional coffee experiences since 1987</p>
                </div>
            </section>

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

            <section className="timeline">
                <h2 className="section-title" style={{ textAlign: "center" }}>
                    Our Journey
                </h2>
                <div className="timeline-container">
                    <div className="timeline-item">
                        <div className="timeline-year">1987</div>
                        <div className="timeline-content">
                            <div className="timeline-card">
                                <h3>The Beginning</h3>
                                <p>
                                    Ollie Patterson opens the first Ollie's Coffee Company in a
                                    small storefront in downtown, serving hand-roasted coffee to
                                    the local community.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-year">1992</div>
                        <div className="timeline-content">
                            <div className="timeline-card">
                                <h3>Expansion</h3>
                                <p>
                                    Opens three more locations across the city, establishing our
                                    signature house blend that becomes a local favorite.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-year">1998</div>
                        <div className="timeline-content">
                            <div className="timeline-card">
                                <h3>Award Recognition</h3>
                                <p>
                                    Our House Blend wins "Best Coffee in the Region" from Coffee
                                    Connoisseur Magazine, putting Ollie's on the national map.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-year">2005</div>
                        <div className="timeline-content">
                            <div className="timeline-card">
                                <h3>Going Green</h3>
                                <p>
                                    Commits to 100% ethical sourcing and becomes certified Fair
                                    Trade, ensuring farmers receive fair compensation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-year">2012</div>
                        <div className="timeline-content">
                            <div className="timeline-card">
                                <h3>Tech Innovation</h3>
                                <p>
                                    Launches mobile ordering app and rewards program, making it
                                    easier than ever for customers to enjoy their favorite drinks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-year">2018</div>
                        <div className="timeline-content">
                            <div className="timeline-card">
                                <h3>Community Focus</h3>
                                <p>
                                    Establishes the Ollie's Foundation, donating 1% of all sales
                                    to local community programs and coffee-growing regions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-year">2026</div>
                        <div className="timeline-content">
                            <div className="timeline-card">
                                <h3>Today</h3>
                                <p>
                                    Operating 15+ locations with the same commitment to quality
                                    and community that started it all nearly 40 years ago.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values">
                <h2 className="section-title">Our Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>Quality First</h3>
                        <p>
                            We never compromise on the quality of our beans, equipment, or
                            service. Every cup is crafted with care and expertise.
                        </p>
                    </div>
                    <div className="value-card">
                        <h3>Community Driven</h3>
                        <p>
                            We're more than a coffee shop—we're a gathering place. Supporting
                            our local community is at the heart of everything we do.
                        </p>
                    </div>
                    <div className="value-card">
                        <h3>Sustainability</h3>
                        <p>
                            From ethical sourcing to eco-friendly packaging, we're committed
                            to protecting our planet and supporting coffee farmers.
                        </p>
                    </div>
                </div>
            </section>

            <section className="locations">
                <h2
                    className="section-title"
                    style={{ textAlign: "center", color: "var(--cream)" }}
                >
                    Our Locations
                </h2>
                <p
                    style={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        marginBottom: "1rem",
                    }}
                >
                    Visit us at any of our locations across the city
                </p>

                <div className="locations-grid">
                    <div className="location-card">
                        <img
                            src="https://picsum.photos/seed/downtown-store/600/400"
                            alt="Downtown retail storefront"
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                marginBottom: "1rem",
                            }}
                        />
                        <h3>Downtown Flagship</h3>
                        <p>123 Main Street, Downtown</p>
                        <p>Mon-Fri: 6am-8pm, Sat-Sun: 7am-9pm</p>
                        <p>(555) 123-4567</p>
                    </div>

                    <div className="location-card">
                        <img
                            src="https://picsum.photos/seed/riverside-cafe/600/400"
                            alt="Riverside cafe location"
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                marginBottom: "1rem",
                            }}
                        />
                        <h3>Riverside Cafe</h3>
                        <p>456 River Road, Riverside</p>
                        <p>Mon-Fri: 6:30am-7pm, Sat-Sun: 7am-8pm</p>
                        <p>(555) 234-5678</p>
                    </div>

                    <div className="location-card">
                        <img
                            src="https://picsum.photos/seed/university-shop/600/400"
                            alt="University district coffee shop"
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                marginBottom: "1rem",
                            }}
                        />
                        <h3>University District</h3>
                        <p>789 College Ave, University District</p>
                        <p>Mon-Sun: 5:30am-10pm</p>
                        <p>(555) 345-6789</p>
                    </div>

                    <div className="location-card">
                        <img
                            src="https://picsum.photos/seed/westside-retail/600/400"
                            alt="Westside retail location"
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                marginBottom: "1rem",
                            }}
                        />
                        <h3>Westside Location</h3>
                        <p>321 West Boulevard, Westside</p>
                        <p>Mon-Fri: 6am-7pm, Sat-Sun: 7am-8pm</p>
                        <p>(555) 456-7890</p>
                    </div>

                    <div className="location-card">
                        <img
                            src="https://picsum.photos/seed/airport-terminal/600/400"
                            alt="Airport terminal cafe location"
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                marginBottom: "1rem",
                            }}
                        />
                        <h3>Airport Terminal</h3>
                        <p>Terminal B, Gate 12, Airport</p>
                        <p>Mon-Sun: 5am-11pm</p>
                        <p>(555) 567-8901</p>
                    </div>

                    <div className="location-card">
                        <img
                            src="https://picsum.photos/seed/northgate-shopping/600/400"
                            alt="Northgate shopping center retail store"
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                marginBottom: "1rem",
                            }}
                        />
                        <h3>Northgate Shopping Center</h3>
                        <p>654 North Plaza, Northgate</p>
                        <p>Mon-Sat: 8am-9pm, Sun: 9am-7pm</p>
                        <p>(555) 678-9012</p>
                    </div>
                </div>
            </section>

            <section className="brand-guidelines">
                <h2 className="section-title">Brand Guidelines</h2>
                <p
                    style={{
                        fontSize: "1.15rem",
                        color: "var(--coffee-dark)",
                        marginBottom: "2rem",
                    }}
                >
                    Our brand identity reflects our commitment to warmth, quality, and
                    community. Here's how we maintain consistency across all touchpoints.
                </p>

                <h3
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "2rem",
                        margin: "2rem 0 1rem",
                    }}
                >
                    Color Palette
                </h3>
                <div className="color-palette">
                    <div className="color-swatch">
                        <div className="color-box espresso" />
                        <div className="color-name">Espresso</div>
                        <div className="color-usage">Primary Dark</div>
                    </div>
                    <div className="color-swatch">
                        <div className="color-box coffee-dark" />
                        <div className="color-name">Coffee Dark</div>
                        <div className="color-usage">Headings &amp; Navigation</div>
                    </div>
                    <div className="color-swatch">
                        <div className="color-box latte" />
                        <div className="color-name">Latte</div>
                        <div className="color-usage">Accent &amp; CTAs</div>
                    </div>
                    <div className="color-swatch">
                        <div className="color-box cream" />
                        <div className="color-name">Cream</div>
                        <div className="color-usage">Background &amp; Light Text</div>
                    </div>
                </div>

                <div className="typography-section">
                    <h3
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "2rem",
                            marginBottom: "1rem",
                        }}
                    >
                        Typography
                    </h3>
                    <div className="heading-sample">
                        <h1>Heading 1</h1>
                        <p style={{ fontSize: "0.95rem" }}>
                            Used for main page titles and hero sections
                        </p>
                    </div>
                    <div className="heading-sample">
                        <h2>Heading 2</h2>
                        <p style={{ fontSize: "0.95rem" }}>
                            Section headers and important content divisions
                        </p>
                    </div>
                    <div className="heading-sample">
                        <h3>Heading 3</h3>
                        <p style={{ fontSize: "0.95rem" }}>
                            Subsections and card titles
                        </p>
                    </div>
                    <p style={{ marginTop: "2rem", color: "var(--coffee-dark)" }}>
                        Body text uses a clean, readable sans-serif font optimized for both
                        digital and print materials.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default About;