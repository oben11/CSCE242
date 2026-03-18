/**
 * menuLoader.js
 * Loads menu items from menu.json, then parses and renders them into .menu-grid.
 * Also wires up the category filter buttons.
 */

const MENU_JSON_URL = "./json/menu.json";

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Build the HTML string for a single menu item.
 * @param {Object} item
 * @returns {string}
 */
function buildMenuItemHTML(item) {
  const sizesHTML = item.sizes
    .map(
      (size) => `
      <div class="size-option">
        <span class="size-name">${size.name}</span>
        <div class="size-info">
          <span class="calories">(${size.calories} cal)</span>
          <span class="price">$${size.price.toFixed(2)}</span>
        </div>
      </div>`
    )
    .join("");

  return `
    <div class="menu-item" data-category="${item.category}">
      <div class="item-header">
        <span class="category-badge">${item.category}</span>
        <h3>${item.name}</h3>
      </div>
      <div class="item-body">
        <p class="item-description">${item.description}</p>
        <div class="sizes">${sizesHTML}</div>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>`;
}

/**
 * Render an array of menu items into the grid element.
 * @param {Object[]} items
 * @param {HTMLElement} gridEl
 */
function renderMenuItems(items, gridEl) {
  gridEl.innerHTML = items.map(buildMenuItemHTML).join("");
}

// ── Filtering ─────────────────────────────────────────────────────────────────

/**
 * Filter items by category label and re-render.
 * "All" shows every item.
 * @param {string} category
 * @param {Object[]} allItems
 * @param {HTMLElement} gridEl
 */
function filterAndRender(category, allItems, gridEl) {
  const filtered =
    category === "All"
      ? allItems
      : allItems.filter((item) => item.category === category);
  renderMenuItems(filtered, gridEl);
}

/**
 * Wire up filter buttons so they toggle the active state and re-render.
 * @param {Object[]} allItems
 * @param {HTMLElement} gridEl
 */
function initFilters(allItems, gridEl) {
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterAndRender(btn.textContent.trim(), allItems, gridEl);
    });
  });
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────

/**
 * Fetch menu.json, parse it, and kick off rendering + filters.
 */
async function loadMenu() {
  const gridEl = document.querySelector(".menu-grid");
  if (!gridEl) {
    console.error("menuLoader: .menu-grid element not found.");
    return;
  }

  try {
    const response = await fetch(MENU_JSON_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch menu data (${response.status})`);
    }

    const menuItems = await response.json();

    renderMenuItems(menuItems, gridEl);
    initFilters(menuItems, gridEl);
  } catch (err) {
    console.error("menuLoader:", err);
    gridEl.innerHTML = `<p class="error">Sorry, we couldn't load the menu right now. Please try again later.</p>`;
  }
}

// Run after the DOM is ready
document.addEventListener("DOMContentLoaded", loadMenu);
