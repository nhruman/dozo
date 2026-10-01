/* Home page interactions -------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
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
        card.classList.toggle("search-match", value.length > 0),
      );
  });
  document.querySelectorAll(".btn-take").forEach((btn) =>
    btn.addEventListener("click", () => {
      if (!MottainaiStore.getSession()) {
        location.href = "login.html";
        return;
      }
      alert("Demo: message feature is ready to connect to the backend.");
    }),
  );
});
