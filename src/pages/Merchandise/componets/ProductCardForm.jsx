import { useState } from "react";
import "../css/ProductCard.css";

const SIZE_OPTIONS = ["XS", "S", "M", "L", "XL", "XXL"];

const initialFormData = {
    category: "",
    name: "",
    description: "",
    alt: "",
    colors: "",
    sizes: [],
    price: "",
    image: null,
};

export default function ProductCardForm({ onProductAdded }) {
    const [formData, setFormData] = useState(initialFormData);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const toggleSize = (size) => {
        setFormData((prev) => ({
            ...prev,
            sizes: prev.sizes.includes(size)
                ? prev.sizes.filter((s) => s !== size)
                : [...prev.sizes, size],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitError("");
        setSuccessMessage("");

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
            payload.append("image", formData.image);

            const res = await fetch("https://csce242-rxy6.onrender.com/api/merchandise", {
                method: "POST",
                body: payload,
            });

            if (!res.ok) {
                throw new Error(`Failed to add product. Status: ${res.status}`);
            }

            const createdProduct = await res.json();

            if (onProductAdded) {
                onProductAdded(createdProduct);
            }

            setFormData(initialFormData);
            setSuccessMessage("Product added successfully.");
        } catch (err) {
            setSubmitError(err.message || "Something went wrong while adding the product.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form className="product-card" onSubmit={handleSubmit}>
            <div className="product-image">
                <input
                    className="category-badge"
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={30}
                    title="Category is required."
                />

                <input
                    className="product-image-upload"
                    type="file"
                    name="image"
                    accept="image/png, image/jpeg, image/jpg, image/webp"
                    onChange={handleChange}
                    required
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
                        title="Product name must be between 3 and 60 characters."
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
                        title="Description must be between 10 and 200 characters."
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
                        title="Alt text must be between 5 and 100 characters."
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
                            pattern="^$|^[A-Za-z]+(\\s*,\\s*[A-Za-z]+)*$"
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
                            placeholder="0.00"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            title="Enter a valid price greater than 0."
                        />
                    </span>

                    <button type="submit" className="add-btn" disabled={submitting}>
                        {submitting ? "Adding..." : "Add"}
                    </button>
                </div>

                {submitError && <p className="form-error">Error: {submitError}</p>}
                {successMessage && <p className="form-success">{successMessage}</p>}
            </div>
        </form>
    );
}