const urlParams = new URLSearchParams(window.location.search);
const category = "Equipment";
const main = document.querySelector("#products-showcase");
const equipmentObj = products[category];
const itemHolder = document.querySelector("#item-holder");

function renderItems(entries) {
    itemHolder.innerHTML = "";
    for (const [subCategory, list] of entries) {
        const firstItem = list[0];
        const card = document.createElement("a");
        card.href = `./categories/${subCategory.replace(/[ /]/g, "")}.html`;
        card.className = "item-card";
        card.innerHTML = `
        <img src="${firstItem.img}">
        <h2>${subCategory}</h2>
        `;
        itemHolder.appendChild(card);
    }
}

renderItems(Object.entries(equipmentObj));

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

document.querySelector(".products-header").style.backgroundImage = "url(./imgs/stand-on-skid-auger.jpeg)";

