const products = [

    {
        id: 1,
        category: "electronics",
        title: "iPhone 15",
        price: 30000,
        condition: "Used",
        location:"新宿区",
        distance:"1.2 km",
        pickup:"ボランティア活用可",
        details: "Light blue Apple iPhone with dual camera system.",
        image: "iphone.jpg"
    },

    {
        id: 2,
        category: "electronics",
        title: "Wireless Noise-Canceling Headphones",
        price: 80000,
        condition: "Used",
        location:"渋谷区",
        distance:"2.4 km",
        pickup:"ボランティア活用可",
        details: "Beige Sony WH-1000XM5 wireless over-ear headphones.",
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
        details: "Apple MacBook Air laptop with M-chip processor.",
        image: "mackbook.jpg"
    },
    {
        id: 4,
        category: "electronics",
        title: "Mirrorless Camera with Extra Lens",
        price: 7000,
        condition: "New",
        details: "Compact black digital mirrorless camera set with interchangeable lens.",
        image: "camera.jpg"
    },
    {
        id: 5,
        category: "electronics",
        title: "Round Smartwatch",
        price: 10000,
        condition: "Used",
        details: "Rose gold circular touchscreen smartwatch with pink strap.",
        image: "watch.jpg"
    },
    {
        id: 6,
        category: "electronics",
        title: "Wireless Computer Keyboard",
        price: 0,
        condition: "Free",
        details: "Slim compact wireless Bluetooth keyboard for PC/Mac.",
        image: "keyboard.jpg"
    },
    {
        id: 7,
        category: "electronics",
        title: "Apple AirPods Pro",
        price: 5000,
        condition: "Used",
        details: "Apple AirPods Pro wireless earbuds with charging case.",
        image: "airpod.jpg"
    },
    {
        id: 8,
        category: "electronics",
        title: "Waterproof Bluetooth Speaker",
        price: 1000,
        condition: "Used",
        details: "Portable DOSS waterproof wireless Bluetooth speaker with LED lights.",
        image: "box.jpg"
    },
    {
        id: 9,
        category: "electronics",
        title: "RGB Gaming Mouse",
        price: 0,
        condition: "Free",
        details: "Ergonomic wired/wireless gaming mouse with RGB LED backlight.",
        image: "mouse.jpg"
    },
    {
        id: 10,
        category: "electronics",
        title: "55-inch Smart LED TV",
        price: 2000,
        condition: "Used",
        details: "55-inch widescreen 4K Ultra HD Smart LED Television.",
        image: "tv.jpg"
    },
    {
        id: 11,
        category: "electronics",
        title: "Refrigerator",
        price: 0,
        condition: "Free",
        details: "Large white 3-door French door refrigerator.",
        image: "fridge.jpg"
    },
    {
        id: 12,
        category: "electronics",
        title: "Washing Machine",
        price: 2000,
        condition: "Used",
        details: "Fully automatic top-loading washing machine.",
        image: "washingmachine.jpg"
    },
    {
        id: 13,
        category: "electronics",
        title: "Over-Ear Headphones",
        price: 0,
        condition: "Free",
        details: "Blue wireless over-ear Bluetooth headphones.",
        image: "headphone new.jpg"
    },
    {
        id: 14,
        category: "electronics",
        title: "Podcast Microphone Set",
        price: 2000,
        condition: "Used",
        details: "Studio condenser microphone with stand and headphones.",
        image: "mike for podcast.jpg"
    },
    {
        id: 15,
        category: "electronics",
        title: "Smartwatch",
        price: 0,
        condition: "Free",
        details: "Fitness tracking smartwatch with multiple strap options.",
        image: "15.png"
    },
    {
        id: 16,
        category: "electronics",
        title: "Laptop",
        price: 2000,
        condition: "Used",
        details: "Silver laptop running Windows 11.",
        image: "16.jpg"
    },
    {
        id: 17,
        category: "electronics",
        title: "Google Pixel Smartphone",
        price: 0,
        condition: "Free",
        details: "Google Pixel smartphone in coral/pink color.",
        image: "17.png"
    },
    {
        id: 18,
        category: "electronics",
        title: "Tablet with Stylus",
        price: 2000,
        condition: "Used",
        details: "2-in-1 touchscreen tablet with digital stylus pen.",
        image: "18.jpg"
    },
    {
        id: 19,
        category: "electronics",
        title: "Wireless Earbuds",
        price: 0,
        condition: "Free",
        details: "Soundcore wireless Bluetooth earbuds with charging case.",
        image: "19.jpg"
    },
    {
        id: 20,
        category: "electronics",
        title: "Bluetooth Speakers",
        price: 2000,
        condition: "Used",
        details: "Portable compact Bluetooth wireless speakers set.",
        image: "20.jpg"
    },
    {
        id: 21,
        category: "electronics",
        title: "Samsung Galaxy Smartphone",
        price: 0,
        condition: "Free",
        details: "Samsung Galaxy S26 Ultra smartphone with S-Pen stylus.",
        image: "21.jpg"
    },
    {
        id: 22,
        category: "electronics",
        title: "Portable Power Station",
        price: 2000,
        condition: "Used",
        details: "High-capacity portable power station with AC outlets.",
        image: "22.jpg"
    },
    {
        id: 23,
        category: "electronics",
        title: "VR Headset Set",
        price: 0,
        condition: "Free",
        details: "HTC Vive VR virtual reality headset with motion controllers.",
        image: "23.jpg"
    },
    {
        id: 24,
        category: "electronics",
        title: "Drone with Remote Controller",
        price: 2000,
        condition: "Used",
        details: "Quadcopter drone with camera and remote controller.",
        image: "24.jpg"
    },
    {
        id: 25,
        category: "electronics",
        title: "Action Camera & 360 Camera",
        price: 0,
        condition: "Free",
        details: "DJI Osmo Action and 360-degree compact action cameras.",
        image: "25.jpg"
    },
    {
        id: 26,
        category: "electronics",
        title: "Amazon Fire TV Stick",
        price: 2000,
        condition: "Used",
        details: "Amazon Fire TV Stick with voice remote control.",
        image: "26.jpg"
    },
    {
        id: 27,
        category: "electronics",
        title: "Smart Delivery / Service Robot",
        price: 0,
        condition: "Free",
        details: "Autonomous smart service robot with digital face screen.",
        image: "27.png"
    },
    {
        id: 28,
        category: "electronics",
        title: "Mini Cube Action Camera",
        price: 2000,
        condition: "Used",
        details: "Ultra-compact square mini action video camera.",
        image: "28.jpg"
    },
    {
        id: 29,
        category: "electronics",
        title: "Robot Vacuum Cleaner",
        price: 0,
        condition: "Free",
        details: "Smart robotic vacuum cleaner with smartphone app control.",
        image: "29.jpg"
    },
    {
        id: 30,
        category: "electronics",
        title: "Smart Power Strip Extension Bar",
        price: 2000,
        condition: "Used",
        details: "Multi-outlet power strip with USB ports and smart app connection.",
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
                    src="images/${product.category}/${product.image}"
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