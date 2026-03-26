import { Link } from "react-router-dom";
import Hero from "../componets/Hero";
import FilterSection from "../componets/FilterSection";
import ProductGrid from "../componets/merchandise/ProductGrid";



export default function Merchandise() {
  return (
    <>
    <title>Official Merchandise - Ollie's Coffee Company</title>
    <meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:wght@400;500;600&display=swap" rel="stylesheet"></link>
    <script src="../scripts/merchandiseLoader.js" defer></script>

      <Hero title="Official Merchandise" description="Show your love for Ollie's with our exclusive branded products" />
    <ProductGrid></ProductGrid>

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