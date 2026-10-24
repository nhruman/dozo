/* Home page interactions -------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  // Search Function
  const search = document.getElementById("search-form");

  search?.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = document.getElementById("search-input")?.value.trim();

    if (!value) return;

    const target = document.querySelector(".products-section");

    target?.scrollIntoView({ behavior: "smooth" });

    document
      .querySelectorAll(".product-card")
      .forEach((card) =>
        card.classList.toggle("search-match", value.length > 0)
      );
  });

});