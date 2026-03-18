/**
 * merchandiseLoader.js
 * Loads products from merchandise.json, then parses and renders them into .products-grid.
 * Also wires up the category filter buttons.
 */

const MERCH_JSON_URL = "./json/merchandise.json";

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Build color dot HTML for a product's color options.
 * @param {string[]} colors
 * @returns {string}
 */
function buildColorsHTML(colors) {
  if (!colors.length) return "";
  const dots = colors
    .map((c) => `<div class="color-dot ${c}"></div>`)
    .join("");
  return `
    <div class="color-options">
      <span class="options-label">Colors:</span>
      <div class="color-dots">${dots}</div>
    </div>`;
}

/**
 * Build size button HTML for a product's size options.
 * @param {string[]} sizes
 * @returns {string}
 */
function buildSizesHTML(sizes) {
  if (!sizes.length) return "";
  const buttons = sizes
    .map((s) => `<button class="size-btn">${s}</button>`)
    .join("");
  return `
    <div class="size-options">
      <span class="options-label">Sizes:</span>
      <div class="size-buttons">${buttons}</div>
    </div>`;
}

/**
 * Build the HTML string for a single product card.
 * @param {Object} product
 * @returns {string}
 */
function buildProductCardHTML(product) {
  return `
    <div class="product-card" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500" data-category="${product.category}">
      <div class="product-image">
        <span class="category-badge">${product.category}</span>
        <img src="${product.image.src}" alt="${product.image.alt}" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        ${buildColorsHTML(product.colors)}
        ${buildSizesHTML(product.sizes)}
        <div class="product-footer">
          <span class="price">$${product.price.toFixed(2)}</span>
          <button class="add-btn">Add</button>
        </div>
      </div>
    </div>`;
}

/**
 * Render an array of products into the grid element.
 * @param {Object[]} products
 * @param {HTMLElement} gridEl
 */
function renderProducts(products, gridEl) {
  gridEl.innerHTML = products.map(buildProductCardHTML).join("");
}

// ── Filtering ─────────────────────────────────────────────────────────────────

/**
 * Filter products by category label and re-render.
 * "All" shows every product.
 * @param {string} category
 * @param {Object[]} allProducts
 * @param {HTMLElement} gridEl
 */
function filterAndRender(category, allProducts, gridEl) {
  const filtered =
    category === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === category);
  renderProducts(filtered, gridEl);
}

/**
 * Wire up filter buttons so they toggle the active state and re-render.
 * @param {Object[]} allProducts
 * @param {HTMLElement} gridEl
 */
function initFilters(allProducts, gridEl) {
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterAndRender(btn.textContent.trim(), allProducts, gridEl);
    });
  });
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────

/**
 * Fetch merchandise.json, parse it, and kick off rendering + filters.
 */
async function loadMerchandise() {
  const gridEl = document.querySelector(".products-grid");
  if (!gridEl) {
    console.error("merchandiseLoader: .products-grid element not found.");
    return;
  }

  try {
    const response = await fetch(MERCH_JSON_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch merchandise data (${response.status})`);
    }

    const products = await response.json();

    renderProducts(products, gridEl);
    initFilters(products, gridEl);
  } catch (err) {
    console.error("merchandiseLoader:", err);
    gridEl.innerHTML = `<p class="error">Sorry, we couldn't load the products right now. Please try again later.</p>`;
  }
}

// Run after the DOM is ready
document.addEventListener("DOMContentLoaded", loadMerchandise);
