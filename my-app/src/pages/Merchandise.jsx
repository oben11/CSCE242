import { Link } from "react-router-dom";

export default function Merchandise() {
  return (
    <>
    <title>Official Merchandise - Ollie's Coffee Company</title>
    <meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:wght@400;500;600&display=swap" rel="stylesheet"></link>
    <script src="./scripts/merchandiseLoader.js" defer></script>

    
      <section className="hero">
        <div className="hero-content">
          <h1>Official Merchandise</h1>
          <p>Show your love for Ollie's with our exclusive branded products</p>
        </div>
      </section>

      <section className="filter-section">
        <div className="filter-container">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Drinkware</button>
          <button className="filter-btn">Bags</button>
          <button className="filter-btn">Coffee</button>
          <button className="filter-btn">Apparel</button>
          <button className="filter-btn">Accessories</button>
          <button className="filter-btn">Gift Cards</button>
        </div>
      </section>

      <section className="products">
        <div className="products-grid"></div>
      </section>

      <section className="why-shop">
        <div className="why-shop-content">
          <h2 className="section-title">Why Shop Ollie's Merch?</h2>

          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <h3>Quality Materials</h3>
              <p>Every product is made with premium materials built to last</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">🌱</div>
              <h3>Sustainable</h3>
              <p>Eco-friendly materials and ethical manufacturing practices</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">★</div>
              <h3>Rewards Points</h3>
              <p>Earn double stars on all merchandise purchases</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}