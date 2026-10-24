// =====================================================
// Mottainai Connect - Product Details
// =====================================================

// URL থেকে Category এবং Product ID নেওয়া
const params = new URLSearchParams(window.location.search);

const selectedCategory = params.get("category");
const selectedId = params.get("id");

// সব Category-এর Product Data
const allProducts = {
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

// Product Details Container
const detailsContainer = document.getElementById("product-details");

// Selected Category-এর Product List
const productList = allProducts[selectedCategory] || [];

// Selected Product খুঁজে বের করা
const selectedProduct = productList.find(
    product => String(product.id) === String(selectedId)
);

// HTML Injection এড়ানোর জন্য Text Escape
function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

// Product পাওয়া গেলে Details দেখানো
if (selectedProduct) {

    const price = Number(selectedProduct.price);

    const priceText = price === 0
        ? "無料"
        : Number.isFinite(price)
            ? `¥${price.toLocaleString("ja-JP")}`
            : "価格未設定";

    const imagePath = `images/${encodeURIComponent(selectedProduct.category)}/${encodeURIComponent(selectedProduct.image)}`;

    detailsContainer.innerHTML = `

        <div class="product-details-layout">

            <!-- Product Image -->
            <div class="details-image-section">

                <img
                    src="${imagePath}"
                    alt="${escapeHTML(selectedProduct.title)}"
                    class="details-product-image"
                >

            </div>

            <!-- Product Information -->
            <div class="details-info-section">

                <h1 class="details-title">
                    ${escapeHTML(selectedProduct.title)}
                </h1>

                <p class="details-price">
                    ${priceText}
                </p>

                <div class="details-meta">

                    <p>
                        <strong>状態：</strong>
                        ${escapeHTML(selectedProduct.condition)}
                    </p>

                    <p>
                        <strong>場所：</strong>
                        ${escapeHTML(selectedProduct.location)}
                    </p>

                    <p>
                        <strong>距離：</strong>
                        ${escapeHTML(selectedProduct.distance)}
                    </p>

                    <p>
                        <strong>受け取り：</strong>
                        ${escapeHTML(selectedProduct.pickup)}
                    </p>

                </div>

                <div class="details-description">

                    <h2>商品説明</h2>

                    <p>
                        ${escapeHTML(selectedProduct.details)}
                    </p>

                </div>

                <button class="contact-seller-btn" id="contact-seller">
                    出品者に連絡する
                </button>

            </div>

        </div>
    `;

    document.getElementById("contact-seller")
        .addEventListener("click", () => {

            if (!window.MottainaiStore?.getSession()) {
                window.location.href = "login.html";
                return;
            }

            alert("メッセージ機能は準備中です。");
        });

} else {

    detailsContainer.innerHTML = `
        <div class="product-not-found">
            <h2>商品が見つかりませんでした。</h2>
            <a href="index.html">ホームに戻る</a>
        </div>
    `;
}