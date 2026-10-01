const filterContainer = document.getElementById("filter-container");

filterContainer.innerHTML = `
    <div class="filter-dropdown">

        <button class="filter-button" type="button">
            Filter
            <i class="fa-solid fa-filter"></i>
        </button>

        <div class="filter-menu">

            <button data-condition="all">ALL</button>
            <button data-condition="free">Free</button>
            <button data-condition="used">Used</button>
            <button data-condition="new">New</button>

            <hr>

            <p>Price</p>

            <button data-price="0-1000">¥0 ～ ¥1,000</button>
            <button data-price="1000-5000">¥1,000 ～ ¥5,000</button>
            <button data-price="5000-10000">¥5,000 ～ ¥10,000</button>
            <button data-price="10000-20000">¥10,000 ～ ¥20,000</button>

        </div>

    </div>
`;


/* Filter button click */
const filterButton = document.querySelector(".filter-button");
const filterDropdown = document.querySelector(".filter-dropdown");

filterButton.addEventListener("click", function () {
    filterDropdown.classList.toggle("active");
});