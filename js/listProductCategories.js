const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const main = document.querySelector("#products-showcase");
const equipmentObj = products[category];

// Create the holder once in your HTML
itemHolder = document.createElement("div");
itemHolder.id = "item-holder";
main.appendChild(itemHolder);

function renderItems(entries) {
    itemHolder.innerHTML = "";
    for (const [subCategory, list] of entries) {
        const firstItem = list[0];
        const card = document.createElement("a");
        card.href = `./products.html?category=${encodeURIComponent(category)}&sub-category=${encodeURIComponent(subCategory)}`;
        card.className = "item-card";
        card.innerHTML = `
        <img src="${firstItem.img}">
        <p>${subCategory}</p>
        `;
        itemHolder.appendChild(card);
    }
}

renderItems(Object.entries(equipmentObj));

const searchBar = document.querySelector("#search");
searchBar.placeholder = "Type the category you're looking for";

function normalize(str) {
    return str.toLowerCase().replace(/\s/g, '').trim();
}

searchBar.addEventListener("input", (event) => {
    const term = normalize(event.target.value);
    const filtered = Object.entries(equipmentObj).filter(
        ([subCategoryName, items]) => {
            const subNorm = normalize(subCategoryName);
            if (subNorm.startsWith(term)) {
                return true;
            }
            return items.some(item => normalize(item.name).includes(term));
        }
    );

    renderItems(filtered);
});

if(category === "Equipment"){
    document.querySelector(".category-title").textContent = "Equipment Categories";
    document.querySelector(".products-header").style.backgroundImage = "url(./imgs/stand-on-skid-auger.jpeg)";
}
else {
    document.querySelector(".category-title").textContent = "Event Categories";
    document.querySelector(".products-header").style.backgroundImage = "url(./imgs/40-x-80-water-pic-600x600.jpg)";
    document.querySelector(".products-header").style.backgroundPosition = "50% 85%";
}

