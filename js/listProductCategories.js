const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

function getItemsIncategory(category) {
    const categoryItems = products[category];
    displayResults(categoryItems);
}

function displayResults(categoryItems) {
    let main = document.querySelector("#products-showcase");
    document.querySelector(".category-title").textContent = category === "Equipment" ? "Equipment" : "Event Items";
    let itemsString = `<div id="item-holder">`;
    for (const [subCategory, list] of Object.entries(categoryItems)) {
        const firstItem = list[0];
        itemsString += `
            <a href="./products.html?category=${encodeURIComponent(category)}&sub-category=${encodeURIComponent(subCategory)}" class="item-card">
                <img src="${firstItem.img}">
                <p>${subCategory}</p>
            </a>
        `;
    }
    itemsString += "</div>";
    main.innerHTML += itemsString;
}

function displaySearch(query) {
    if (query === "") {
        getItemsIncategory(category);
    } else {
        // handle search later
    }
}

getItemsIncategory(category);
