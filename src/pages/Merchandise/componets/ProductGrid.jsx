import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import FilterSection from "./FilterSection";
import ProductCardForm from "./ProductCardForm";
import "../css/ProductGrid.css";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionsMode, setActionsMode] = useState(false);

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

  const handleProductAdded = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
    setCategories((prev) => {
      if (prev.includes(newProduct.category)) return prev;
      return [...prev, newProduct.category];
    });
  };

  const handleProductDeleted = (deletedId) => {
    setProducts((prev) => {
      const updated = prev.filter((p) => p.id !== deletedId);
      const unique = ["All", ...Array.from(new Set(updated.map((p) => p.category)))];
      setCategories(unique);
      return updated;
    });
  };

  const handleProductUpdated = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setCategories((prev) => {
      if (prev.includes(updatedProduct.category)) return prev;
      return [...prev, updatedProduct.category];
    });
  };

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
            <ProductCard
              key={p.id}
              product={p}
              actionsMode={actionsMode}
              onDeleted={handleProductDeleted}
              onUpdated={handleProductUpdated}
            />
          ))}

          {!actionsMode && <ProductCardForm onProductAdded={handleProductAdded} />}
        </div>
      </div>

      {/* ── Floating actions toggle ── */}
      <button
        className={`actions-toggle-btn ${actionsMode ? "actions-toggle-btn--active" : ""}`}
        onClick={() => setActionsMode((prev) => !prev)}
        title={actionsMode ? "Close actions" : "Edit products"}
      >
        {actionsMode ? "close actions" : "edit products"}
      </button>
    </div>
  );
}