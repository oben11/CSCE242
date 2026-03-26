import { useState } from "react";
import products from "./products.json";
import ProductCard from "./ProductCard";
import FilterSection from "./FilterSection";
import "../css/ProductGrid.css";

const CATEGORIES = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visible =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (

    <div>
        <FilterSection
        filters={CATEGORIES}
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