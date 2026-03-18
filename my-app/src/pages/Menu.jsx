import React from "react";

const Menu = () => {
  return (
    
    <>
    
    <title>Our Menu - Ollie's Coffee Company</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:wght@400;500;600&display=swap" rel="stylesheet"></link>
    <script src="./scripts/menuLoader.js" defer></script>  {/* --- IGNORE NEEDS FIXING --- */}




      <section className="hero">
        <div className="hero-content">
          <h1>Our Menu</h1>
          <p>Handcrafted beverages made with premium ingredients</p>
        </div>
      </section>

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