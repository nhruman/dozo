function createProductCard(product) {
  const priceText =
    product.price === 0 ? "無料" : `¥${product.price.toLocaleString()}`;

  return `
        <article class="product-card">

            <div class="card-image-box">

<a
    href="product-details.html?category=${encodeURIComponent(product.category)}&id=${encodeURIComponent(product.id)}"
    class="product-image-link"
    target="_blank"
    rel="noopener noreferrer"
>
    <img
        src="images/${product.category}/${product.image}"
        alt="${product.title}"
        class="product-image"
        loading="lazy"
    >
</a>

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
                        href="product-details.html?category=${encodeURIComponent(product.category)}&id=${encodeURIComponent(product.id)}"
                        class="btn-take"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        欲しい
                    </a>

                </div>

            </div>

        </article>
    `;
}
