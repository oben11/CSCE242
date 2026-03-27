import React from "react";
import Hero from "../../componets/Hero";
import Builder from "./componets/Builder"


const Menu = () => {
  return (
    
    <>
    
    <title>Our Menu - Ollie's Coffee Company</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:wght@400;500;600&display=swap" rel="stylesheet"></link>
    <script src="./scripts/menuLoader.js" defer></script>  {/* --- IGNORE NEEDS FIXING --- */}


     <Hero title="Our Menu" description="Handcrafted beverages made with premium ingredients" />
      <Builder></Builder>
    </>
  );
};

export default Menu;