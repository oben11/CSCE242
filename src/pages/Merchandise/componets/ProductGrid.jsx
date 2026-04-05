import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import FilterSection from "./FilterSection";
import "../css/ProductGrid.css";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://csce242-rxy6.onrender.com/api/merchandise")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        const unique = ["All", ...Array.from(new Set(data.map((p) => p.category)))];
        setCategories(unique);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const visible =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <FilterSection
        filters={categories}
        defaultFilter="All"
        onFilterChange={setActiveFilter}
      />
      <div className="products">
        <div className="products-grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}