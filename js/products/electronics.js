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
        price: 50000,
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
        price: 7000,
        condition: "New",
        details: "Brand new and unopened.",
        image: "camera.jpg"
    },
    {
        id: 5,
        category: "electronics",
        title: "Smart Watchs",
        price: 10000,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "watch.jpg"
    },
    {
        id: 6,
        category: "electronics",
        title: "Fresh Kewboard",
        price: 0,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "keyboard.jpg"
    },
    {
        id: 7,
        category: "electronics",
        title: "Aipod",
        price: 5000,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "airpod.jpg"
    },
    {
        id: 8,
        category: "electronics",
        title: "Sound Box",
        price: 1000,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "box.jpg"
    },
    {
        id: 9,
        category: "electronics",
        title: "Wareless Mouse",
        price: 0,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "mouse.jpg"
    },
    {
        id: 10,
        category: "electronics",
        title: "LED TV",
        price: 2000,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "tv.jpg"
    },
    {
        id: 11,
        category: "electronics",
        title: "Fridge New",
        price: 0,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "fridge.jpg"
    },
    {
        id: 12,
        category: "electronics",
        title: "Washing Machine",
        price: 2000,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "washingmachine.jpg"
    },
    {
        id: 13,
        category: "electronics",
        title: "New Headphone",
        price: 0,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "headphone new.jpg"
    },
    {
        id: 14,
        category: "electronics",
        title: "Mike for Podcast",
        price: 2000,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "mike for podcast.jpg"
    },
    {
        id: 15,
        category: "electronics",
        title: "Wareless Mouse",
        price: 0,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "15.png"
    },
    {
        id: 16,
        category: "electronics",
        title: "LED TV",
        price: 2000,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "16.jpg"
    },
    {
        id: 17,
        category: "electronics",
        title: "Wareless Mouse",
        price: 0,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "17.png"
    },
    {
        id: 18,
        category: "electronics",
        title: "LED TV",
        price: 2000,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "18.jpg"
    },
    {
        id: 19,
        category: "electronics",
        title: "Wareless Mouse",
        price: 0,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "19.jpg"
    },
    {
        id: 20,
        category: "electronics",
        title: "LED TV",
        price: 2000,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "20.jpg"
    },
    {
        id: 21,
        category: "electronics",
        title: "Wareless Mouse",
        price: 0,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "21.jpg"
    },
    {
        id: 22,
        category: "electronics",
        title: "LED TV",
        price: 2000,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "22.jpg"
    },
    {
        id: 23,
        category: "electronics",
        title: "Wareless Mouse",
        price: 0,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "23.jpg"
    },
    {
        id: 24,
        category: "electronics",
        title: "LED TV",
        price: 2000,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "24.jpg"
    },
    {
        id: 25,
        category: "electronics",
        title: "Wareless Mouse",
        price: 0,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "25.jpg"
    },
    {
        id: 26,
        category: "electronics",
        title: "LED TV",
        price: 2000,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "26.jpg"
    },
    {
        id: 27,
        category: "electronics",
        title: "Wareless Mouse",
        price: 0,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "27.png"
    },
    {
        id: 28,
        category: "electronics",
        title: "LED TV",
        price: 2000,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "28.jpg"
    },
    {
        id: 29,
        category: "electronics",
        title: "Wareless Mouse",
        price: 0,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "29.jpg"
    },
    {
        id: 30,
        category: "electronics",
        title: "LED TV",
        price: 2000,
        condition: "Used",
        details: "Brand new and unopened.",
        image: "30.jpg"
    },


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