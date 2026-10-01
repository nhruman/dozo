const products = [

    {
        id: 1,
        category: "electronics",
        title: "iPhone 13",
        price: 30000,
        condition: "Used",
        location:"新宿区",
        distance:"1.2 km",
        pickup:"ボランティア活用可",
        details: "Good condition. Works properly.",
        image: "iphone.jpg"
    },

    {
        id: 2,
        category: "electronics",
        title: "Headphone",
        price: 80000,
        condition: "Used",
        location:"渋谷区",
        distance:"2.4 km",
        pickup:"ボランティア活用可",
        details: "Works well. Charger included.",
        image: "headphones.jpg"
    },

    {
        id: 3,
        category: "electronics",
        title: "Mackbook Air",
        price: 0,
        condition: "New",
        location: "横浜市",
        distance: "3.1 km",
        pickup: "ボランティア利用可",
        details: "Brand new and unopened.",
        image: "mackbook.jpg"
    },
    {
        id: 4,
        category: "electronics",
        title: "Camera",
        price: 0,
        condition: "New",
        details: "Brand new and unopened.",
        image: "camera.jpg"
    },
    {
        id: 5,
        category: "electronics",
        title: "Smart Watchs",
        price: 0,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "watch.jpg"
    }


];


function createProductCard(product) {

    const priceText =
        product.price === 0
            ? "無料"
            : `¥${product.price.toLocaleString()}`;

    return `
        <article class="product-card">

            <div class="card-image-box">

                <img
                    src="images/electronics/${product.image}"
                    alt="${product.title}"
                    class="product-image"
                    loading="lazy"
                >

                <span class="badge ${product.price === 0 ? "badge-free" : ""}">
                    ${priceText}
                </span>

            </div>


            <div class="card-body">

                <div class="card-info">

                    <h3 class="product-title">
                        ${product.title}
                    </h3>

                    <p class="product-meta">
                        <i class="fa-solid fa-location-dot"></i>
                        ${product.location}
                        ・
                        ${product.distance}
                    </p>

                    <p class="product-condition">
                        ${product.condition}
                    </p>

                </div>


                <div class="card-footer">

                    <span class="volunteer-badge">
                        <i class="fa-solid fa-user-shield"></i>
                        ${product.pickup}
                    </span>

                    <a
                        href="product.html?id=${product.id}"
                        class="btn-take"
                    >
                        欲しい
                    </a>

                </div>

            </div>

        </article>
    `;
}