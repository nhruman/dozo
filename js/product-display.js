const productGrid = document.getElementById("products-container");

// সব Category-এর Product List
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
    indoor: typeof indoorProducts !== "undefined" ? indoorProducts : []
};


// Category অনুযায়ী Product দেখাবে
function showProducts(category) {

    if (!productGrid) {
        console.error("products-container পাওয়া যায়নি!");
        return;
    }

    const productList = categoryProducts[category] || [];

    const filteredProducts = productList.filter(
        (product) => product.category === category
    );

    productGrid.innerHTML = filteredProducts
        .map((product) => createProductCard(product))
        .join("");

}


// আগের Selected Category বের করা
const savedCategory = localStorage.getItem("selectedCategory");

// Category পাওয়া গেলে সেটি দেখানো
if (savedCategory && categoryProducts[savedCategory]?.length > 0) {

    showProducts(savedCategory);

} else {

    showProducts("electronics");

}


// Category Click
document.querySelectorAll(".cat-tabs a").forEach((tab) => {

    tab.addEventListener("click", function (event) {

        event.preventDefault();

        const category = this.getAttribute("href").replace("#cat-", "");

        // Category Save
        localStorage.setItem("selectedCategory", category);

        // Product Display
        showProducts(category);

    });

});