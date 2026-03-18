
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('hamburger');
    // adjust selector to whatever element you want to show/hide
    const nav = document.querySelector('nav ul');

    if (!btn || !nav) {
        // nothing to do if the elements aren't on the page
        return;
    }

    btn.addEventListener('click', () => {
        // remove / add the `hidden` class
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        btn.textContent = btn.textContent === "☰" ? "✕" : "☰";
    });
});