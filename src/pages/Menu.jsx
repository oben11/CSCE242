import React from "react";
import Hero from "../componets/Hero";

const Menu = () => {
  return (
    
    <>
    
    <title>Our Menu - Ollie's Coffee Company</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:wght@400;500;600&display=swap" rel="stylesheet"></link>
    <script src="./scripts/menuLoader.js" defer></script>  {/* --- IGNORE NEEDS FIXING --- */}


     <Hero title="Our Menu" description="Handcrafted beverages made with premium ingredients" />

      <section className="filter-section">
        <div className="filter-container">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Hot Coffee</button>
          <button className="filter-btn">Espresso</button>
          <button className="filter-btn">Cold Beverages</button>
          <button className="filter-btn">Tea &amp; Other</button>
        </div>
      </section>

      <section className="menu">
        <div className="menu-grid"></div>
      </section>
    </>
  );
};

export default Menu;