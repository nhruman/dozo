const productGrid = document.getElementById("products-container");


// Category অনুযায়ী products দেখানোর function
function showProducts(category, productList) {

    productGrid.innerHTML = "";

    const filteredProducts = productList.filter(
        product => product.category === category
    );

    filteredProducts.forEach(product => {
        productGrid.innerHTML += createProductCard(product);
    });
}


// প্রথমে Electronics দেখাবে
showProducts("electronics", products);


// Category button click
document.querySelectorAll(".cat-tabs a").forEach(tab => {

    tab.addEventListener("click", function (event) {

        event.preventDefault();

        const category = this.getAttribute("href").replace("#cat-", "");

        if (category === "electronics") {
            showProducts("electronics", products);
        }

        else if (category === "clothing") {
            showProducts("clothing", clothingProducts);
        }

    });

});