const productGrid = document.getElementById("products-container");

const categoryProducts = {
  electronics: typeof products !== "undefined" ? products : [],
  clothing: typeof clothingProducts !== "undefined" ? clothingProducts : [],
  books: typeof booksProducts !== "undefined" ? booksProducts : [],
  household: typeof householdProducts !== "undefined" ? householdProducts : [],
  toy: typeof toysProducts !== "undefined" ? toysProducts : [],
  furniture: typeof furnitureProducts !== "undefined" ? furnitureProducts : [],
  bedding: typeof beddingProducts !== "undefined" ? beddingProducts : [],
  sports: typeof sportsProducts !== "undefined" ? sportsProducts : [],
  hobby: typeof hobbyProducts !== "undefined" ? hobbyProducts : [],
  indoor: typeof indoorProducts !== "undefined" ? indoorProducts : [],
};

// Category অনুযায়ী Product দেখাবে
function showProducts(category) {
  const productList = categoryProducts[category] || [];

  const filteredProducts = productList.filter(
    (product) => product.category === category,
  );

  productGrid.innerHTML = filteredProducts
    .map((product) => createProductCard(product))
    .join("");
}

// প্রথমে Electronics দেখাবে
showProducts("electronics");

// Category Click
document.querySelectorAll(".cat-tabs a").forEach((tab) => {
  tab.addEventListener("click", function (event) {
    event.preventDefault();

    const category = this.getAttribute("href").replace("#cat-", "");

    showProducts(category);
  });
});
