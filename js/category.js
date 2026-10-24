// ===========================================
// Mottainai Connect - Category Page
// ===========================================

// URL থেকে Category নেওয়া
const params = new URLSearchParams(window.location.search);
const category = params.get("c") || "electronics";

// Category Names
const categoryNames = {
    electronics: "Electronics & Gadgets",
    clothing: "Clothing & Accessories",
    books: "Books & Educational Materials",
    household: "Household & Kitchenware",
    toy: "Toys & Baby Gear",
    furniture: "Home Decor & Furniture",
    bedding: "Bedding & Home Textiles",
    sports: "Sports & Fitness Gear",
    hobby: "Hobby & Craft Supplies",
    indoor: "Indoor Plants & Gardening Items"
};

// Product Data
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

// Elements
const categoryTitle = document.getElementById("category-title");
const productGrid = document.getElementById("product-grid");

// Category Title
if (categoryTitle) {
    categoryTitle.textContent =
        categoryNames[category] || "Products";
}

// Filter Products
const filteredProducts = (categoryProducts[category] || [])
    .filter(product => product.category === category);

// Display Products
if (productGrid) {

    if (filteredProducts.length > 0) {

        productGrid.innerHTML = filteredProducts
            .map(product => createProductCard(product))
            .join("");

    } else {

        productGrid.innerHTML = `
            <p>このカテゴリーには商品がありません。</p>
        `;
    }
}