import React from "react";
import { Link } from "react-router-dom";
import "../css/Hero.css"

/**
 * Hero Component Props:
 *
 * @prop {string}  title           - Heading text displayed in the hero
 * @prop {string}  description     - Paragraph text displayed below the heading
 * @prop {string}  backgroundImage - URL or path to a background image (optional)
 * @prop {boolean} animate         - If true, adds "animate splash_1" CSS classes (optional, default false)
 * @prop {Array}   buttons         - Array of button config objects (optional)
 *   Each button object:
 *   @prop {string} label          - Button text
 *   @prop {string} to             - React Router path (uses <Link>), takes priority over href
 *   @prop {string} href           - Plain anchor href (used if no `to` is provided)
 *   @prop {string} style          - Button style variant: "primary" | "primary-dark" | "secondary" | "outline"
 */

const BUTTON_STYLE_MAP = {
  primary: "btn btn-primary",
  "primary-dark": "btn btn-primary btn-dark",
  secondary: "btn btn-secondary",
  outline: "btn btn-outline",
};

const Hero = ({ title, description, backgroundImage, animate = false, buttons = [] }) => {
  const sectionClasses = ["hero", animate ? "animate " : ""]
    .filter(Boolean)
    .join(" ");

  const sectionStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : undefined;

  return (
    <section className={sectionClasses} style={sectionStyle}>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>

        {buttons.length > 0 && (
          <div className="cta-buttons">
            {buttons.map((btn, index) => {
              const className = BUTTON_STYLE_MAP[btn.style] ?? "btn btn-primary";

              return btn.to ? (
                <Link key={index} to={btn.to} className={className}>
                  {btn.label}
                </Link>
              ) : (
                <a key={index} href={btn.href ?? "#"} className={className}>
                  {btn.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;