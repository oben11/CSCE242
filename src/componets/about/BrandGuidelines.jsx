import "../../css/about/BrandGuidelines.css";
import React from "react";

const colorSwatches = [
    { className: "espresso", name: "Espresso", usage: "Primary Dark" },
    { className: "coffee-dark", name: "Coffee Dark", usage: "Headings & Navigation" },
    { className: "latte", name: "Latte", usage: "Accent & CTAs" },
    { className: "cream", name: "Cream", usage: "Background & Light Text" },
];

const headingSamples = [
    { tag: "h1", label: "Heading 1", desc: "Used for main page titles and hero sections" },
    { tag: "h2", label: "Heading 2", desc: "Section headers and important content divisions" },
    { tag: "h3", label: "Heading 3", desc: "Subsections and card titles" },
];

const BrandGuidelines = () => {
    return (
        <section className="brand-guidelines">
            <h2 className="section-title">Brand Guidelines</h2>
            <p className="brand-intro">
                Our brand identity reflects our commitment to warmth, quality, and community.
                Here's how we maintain consistency across all touchpoints.
            </p>

            <h3 className="brand-sub-title">Color Palette</h3>
            <div className="color-palette">
                {colorSwatches.map((swatch) => (
                    <div className="color-swatch" key={swatch.className}>
                        <div className={`color-box ${swatch.className}`} />
                        <div className="color-name">{swatch.name}</div>
                        <div className="color-usage">{swatch.usage}</div>
                    </div>
                ))}
            </div>

            <div className="typography-section">
                <h3 className="brand-sub-title">Typography</h3>
                {headingSamples.map(({ tag: Tag, label, desc }) => (
                    <div className="heading-sample" key={label}>
                        <Tag>{label}</Tag>
                        <p>{desc}</p>
                    </div>
                ))}
                <p className="body-note">
                    Body text uses a clean, readable sans-serif font optimized for both
                    digital and print materials.
                </p>
            </div>
        </section>
    );
};

export default BrandGuidelines;
