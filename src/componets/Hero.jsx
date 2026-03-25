import "../css/About.css";
import React from "react";

const Hero = (props) => {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </section>
        
    );
};
 
export default Hero;
