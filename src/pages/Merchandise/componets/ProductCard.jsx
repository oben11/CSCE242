import { useState } from "react";
import ColorDot from "./ColorDot";
import "../css/ProductCard.css";

const SIZE_OPTIONS = ["XS", "S", "M", "L", "XL", "XXL"];

export default function ProductCard({ product, actionsMode, onDeleted, onUpdated }) {
  const { id, name, category, description, image, colors, sizes, price } = product;

  const [formData, setFormData] = useState({
    category,
    name,
    description,
    alt: image.alt,
    colors: colors.join(", "),
    sizes: [...sizes],
    price: price.toFixed(2),
    image: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const toggleSize = (size) => {
    setFormData((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const parsedColors = formData.colors
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean);

    try {
      const payload = new FormData();
      payload.append("category", formData.category.trim());
      payload.append("name", formData.name.trim());
      payload.append("description", formData.description.trim());
      payload.append("alt", formData.alt.trim());
      payload.append("colors", JSON.stringify(parsedColors));
      payload.append("sizes", JSON.stringify(formData.sizes));
      payload.append("price", Number(formData.price));
      if (formData.image) payload.append("image", formData.image);

      const res = await fetch(`https://csce242-rxy6.onrender.com/api/merchandise/${id}`, {
        method: "PUT",
        body: payload,
      });

      if (!res.ok) throw new Error(`Failed to update. Status: ${res.status}`);

      const updated = await res.json();
      if (onUpdated) onUpdated(updated);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(`Delete "${name}"?`)) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(`https://csce242-rxy6.onrender.com/api/merchandise/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error(`Failed to delete. Status: ${res.status}`);

      if (onDeleted) onDeleted(id);
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setSubmitting(false);
    }
  };

  // ── VIEW MODE ──────────────────────────────────────────────────────────────
  if (!actionsMode) {
    return (
      <div className="product-card" data-category={category}>
        <div className="product-image">
          <span className="category-badge">{category}</span>
          <img src={image.src} alt={image.alt} loading="lazy" />
        </div>
        <div className="product-info">
          <h3>{name}</h3>
          <p>{description}</p>

          {colors.length > 0 && (
            <div className="color-options">
              <span className="options-label">Colors:</span>
              <div className="color-dots">
                {colors.map((c) => <ColorDot key={c} color={c} />)}
              </div>
            </div>
          )}

          {sizes.length > 0 && (
            <div className="size-options">
              <span className="options-label">Sizes:</span>
              <div className="size-buttons">
                {sizes.map((s) => <span key={s} className="size-btn">{s}</span>)}
              </div>
            </div>
          )}

          <div className="product-footer">
            <span className="price">${price.toFixed(2)}</span>
            <button className="add-btn">Add</button>
          </div>
        </div>
      </div>
    );
  }

  // ── EDIT MODE ──────────────────────────────────────────────────────────────
  return (
    <form className="product-card product-card--editing" onSubmit={handleUpdate}>
      <div className="product-image product-image--edit">
        <img src={image.src} alt={image.alt} loading="lazy" className="edit-preview" />
        <input
          className="category-badge category-badge--input"
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          minLength={2}
          maxLength={30}
        />
        <input
          className="product-image-upload"
          type="file"
          name="image"
          accept="image/png, image/jpeg, image/jpg, image/webp"
          onChange={handleChange}
        />
      </div>

      <div className="product-info">
        <h3>
          <input
            className="product-name-input"
            type="text"
            name="name"
            placeholder="Product name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={60}
          />
        </h3>

        <p>
          <textarea
            className="product-description-input"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            minLength={10}
            maxLength={200}
          />
        </p>

        <p>
          <input
            className="product-alt-input"
            type="text"
            name="alt"
            placeholder="Image alt text"
            value={formData.alt}
            onChange={handleChange}
            required
            minLength={5}
            maxLength={100}
          />
        </p>

        <div className="color-options">
          <span className="options-label">Colors:</span>
          <div className="color-dots">
            <input
              className="color-input"
              type="text"
              name="colors"
              placeholder="e.g. brown, cream, black"
              value={formData.colors}
              onChange={handleChange}
              pattern="^$|^[A-Za-z]+(\s*,\s*[A-Za-z]+)*$"
              title="Enter colors separated by commas, or leave blank."
            />
          </div>
        </div>

        <div className="size-options">
          <span className="options-label">Sizes:</span>
          <div className="size-buttons">
            {SIZE_OPTIONS.map((size) => (
              <button
                key={size}
                type="button"
                className={`size-btn ${formData.sizes.includes(size) ? "active" : ""}`}
                onClick={() => toggleSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="product-footer">
          <span className="price">
            $
            <input
              className="price-input"
              type="number"
              name="price"
              step="0.01"
              min="0.01"
              max="9999.99"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </span>

          <div className="edit-actions">
            <button
              type="button"
              className="delete-btn"
              onClick={handleDelete}
              disabled={submitting}
            >
              {submitting ? "…" : "delete"}
            </button>
            <button type="submit" className="save-btn" disabled={submitting}>
              {submitting ? "saving…" : "save"}
            </button>
          </div>
        </div>

        {error && <p className="form-error">Error: {error}</p>}
      </div>
    </form>
  );
}