const urlParams = new URLSearchParams(window.location.search);
const category = "Events";
const main = document.querySelector("#products-showcase");
const equipmentObj = products[category];
const itemHolder = document.querySelector("#item-holder");

function renderItems(entries) {
    itemHolder.innerHTML = "";
    for (const [subCategory, list] of entries) {
        const firstItem = list[0];
        const card = document.createElement("a");
        card.href = `./products.html?category=${encodeURIComponent(category)}&sub-category=${encodeURIComponent(subCategory)}`;
        card.className = "item-card";
        card.innerHTML = `
        <img src="${firstItem.img}">
        <h2>${subCategory}</h2>
        `;
        itemHolder.appendChild(card);
    }
}


const searchBar = document.querySelector("#search");

function normalize(str) {
    return str.toLowerCase().replace(/\s/g, '').trim();
}

searchBar.addEventListener("input", (event) => {
    const term = normalize(event.target.value);
    const filtered = Object.entries(equipmentObj).filter(
        ([subCategoryName, items]) => {
            const subNorm = normalize(subCategoryName);
            if (subNorm.includes(term)) {
                return true;
            }
            return items.some(item => normalize(item.name).includes(term));
        }
    );

    renderItems(filtered);
});

document.querySelector(".products-header").style.backgroundImage = "url(./imgs/40-x-80-water-pic-1024x1024.png)";
document.querySelector(".products-header").style.backgroundPosition = "50% 70%";


