import { useState, useEffect } from "react";
import FilterSection from "../componets/FilterSection";

const MERCH_JSON_URL = "./merchandise.json";

// ── Sub-components ────────────────────────────────────────────────────────────

function ColorDots({ colors = [] }) {
  if (!colors.length) return null;
  return (
    <div className="color-options">
      <span className="options-label">Colors:</span>
      <div className="color-dots">
        {colors.map((c) => (
          <div key={c} className={`color-dot ${c}`} />
        ))}
      </div>
    </div>
  );
}

function SizeButtons({ sizes = [] }) {
  if (!sizes.length) return null;
  return (
    <div className="size-options">
      <span className="options-label">Sizes:</span>
      <div className="size-buttons">
        {sizes.map((s) => (
          <button key={s} className="size-btn">
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div
      className="product-card"
      data-tilt
      data-tilt-max="50"
      data-tilt-speed="400"
      data-tilt-perspective="500"
      data-category={product.category}
    >
      <div className="product-image">
        <span className="category-badge">{product.category}</span>
        <img src={product.image.src} alt={product.image.alt} loading="lazy" />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <ColorDots colors={product.colors} />
        <SizeButtons sizes={product.sizes} />
        <div className="product-footer">
          <span className="price">${product.price.toFixed(2)}</span>
          <button className="add-btn">Add</button>
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

/**
 * MerchandiseGrid
 *
 * Fetches products from merchandise.json, renders them in .products-grid,
 * and wires up FilterSection for category filtering — mirroring merchandiseLoader.js.
 */
export default function MerchandiseGrid() {
  const [allProducts, setAllProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Derive unique category labels from loaded products, prepend "All"
  const filters = [
    "All",
    "Drinkware",
    "Bags",
    "Coffee",
    "Apparel",
    "Accessories",
    "Gift Cards",
    ...Array.from(new Set(allProducts.map((p) => p.category))),
  ];

  // Filtered list shown in the grid
  const visible =
    activeFilter === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeFilter);

  useEffect(() => {
    async function loadMerchandise() {
      try {
        const res = await fetch(MERCH_JSON_URL);
        if (!res.ok) {
          throw new Error(`Failed to fetch merchandise data (${res.status})`);
        }
        const products = await res.json();
        setAllProducts(products);
      } catch (err) {
        console.error("MerchandiseGrid:", err);
        setError(
          "Sorry, we couldn't load the products right now. Please try again later.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadMerchandise();
  }, []);

  return (
    <>
      <FilterSection
        filters={filters}
        defaultFilter="All"
        onFilterChange={setActiveFilter}
      />

      <div className="products-grid">
        {loading && <p>Loading products…</p>}

        {error && <p className="error">{error}</p>}

        {!loading &&
          !error &&
          visible.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
      </div>
    </>
  );
}
