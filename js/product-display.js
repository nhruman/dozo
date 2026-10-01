const productGrid = document.getElementById("electronics-products");

const electronicsProducts = products.filter(
    product => product.category === "electronics"
);

electronicsProducts.forEach(product => {
    productGrid.innerHTML += createProductCard(product);
});