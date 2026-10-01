// ============================================================
// Mottainai Connect - Category Page
// ------------------------------------------------------------
// URL থেকে category নিয়ে সেই category-এর products দেখায়
// ============================================================


// URL থেকে category নেওয়া
const params = new URLSearchParams(window.location.search);
const category = params.get("c");


// Category-এর নাম
const categoryNames = {
    electronics: "Electronics & Gadgets",
    clothing: "Clothing & Accessories",
    books: "Books & Educational Materials",
    household: "Household & Kitchenware",
    toys: "Toys & Baby Gear",
    furniture: "Home Decor & Furniture",
    bedding: "Bedding & Home Textiles",
    sports: "Sports & Fitness Gear",
    hobby: "Hobby & Craft Supplies",
    gardening: "Indoor Plants & Gardening Items"
};


// Page-এর element
const categoryTitle = document.getElementById("category-title");
const productGrid = document.getElementById("product-grid");


// Category title পরিবর্তন
if (categoryNames[category]) {
    categoryTitle.textContent = categoryNames[category];
}


// এই category-এর products খুঁজে বের করা
const filteredProducts = products.filter(
    product => product.category === category
);


// Product card তৈরি করা
filteredProducts.forEach(product => {

    productGrid.innerHTML += createProductCard(product);

});