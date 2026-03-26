import { useState } from "react";
import "../css/FilterSection.css";

/**
 * Used for Merchandise and Menu Pages to Populate Product Cards
 * @param {*} param0 
 * @returns 
 */

export default function FilterSection({
  filters = ["All", "Hot Coffee", "Espresso", "Cold Beverages", "Tea & Other"],
  defaultFilter,
  onFilterChange,
  className = "",
}) {
  const [active, setActive] = useState(defaultFilter ?? filters[0]);
 
  const handleClick = (label) => {
    setActive(label);
    onFilterChange?.(label);
  };
 
  return (
    <>
      <section className={`filter-section ${className}`}>
        <div className="filter-container" role="group" aria-label="Category filters">
          {filters.map((label) => (
            <button
              key={label}
              className={`filter-btn${active === label ? " filter-btn--active" : ""}`}
              onClick={() => handleClick(label)}
              aria-pressed={active === label}
            >
              {label}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}