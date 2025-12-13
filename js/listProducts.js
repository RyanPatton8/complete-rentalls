const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const subCategory = urlParams.get("sub-category");
const main = document.querySelector("#products-showcase");
const categoryItems = products[category];
const subCategoryItems = categoryItems[subCategory];
document.querySelector(".category-title").textContent = subCategory;

const itemHolder = document.querySelector("#item-holder");
function renderItems(items){
    itemHolder.innerHTML = ""; 
    for(i of items){
        const card = document.createElement("a");
        card.href = `./product-details.html?category=${encodeURIComponent(category)}&sub-category=${encodeURIComponent(subCategory)}&id=${i.id}`;
        card.className = "item-card";
        card.innerHTML = `
        <img src="${i.img}">
        <p>${i.name}</p>
        `;
        itemHolder.appendChild(card);
    }
}

renderItems(subCategoryItems);

const searchBar = document.querySelector("#search");

searchBar.addEventListener("input", (event) => {
    const term = event.target.value.toLowerCase().replace(/\s/g, '').trim();
    const filtered = subCategoryItems.filter(p => p.name.toLowerCase().replace(/\s/g, '').includes(term));
  renderItems(filtered);
});

if(category === "Equipment"){
    document.querySelector(".products-header").style.backgroundImage = "url(./imgs/stand-on-skid-auger.jpeg)";
}
else {
    document.querySelector(".products-header").style.backgroundImage = "url(./imgs/40-x-80-water-pic-1024x1024.png)";
    document.querySelector(".products-header").style.backgroundPosition = "50% 70%";
}