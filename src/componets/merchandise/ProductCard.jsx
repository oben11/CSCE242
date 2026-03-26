import ColorDot from "./ColorDot";
import "../../css/merchandise/ProductCard.css";

export default function ProductCard({ product }) {
  const { name, category, description, image, colors, sizes, price } = product;

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
              {colors.map((c) => (
                <ColorDot key={c} color={c} />
              ))}
            </div>
          </div>
        )}

        {sizes.length > 0 && (
          <div className="size-options">
            <span className="options-label">Sizes:</span>
            <div className="size-buttons">
              {sizes.map((s) => (
                    <span key={s} className="size-btn">{s}</span>
              ))}
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