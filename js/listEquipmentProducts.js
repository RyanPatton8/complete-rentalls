const urlParams = new URLSearchParams(window.location.search);
const category = "Equipment";
const subCategory = document.querySelector(".category-title").textContent;
const main = document.querySelector("#products-showcase");
const categoryItems = products[category];
const subCategoryItems = categoryItems[subCategory];

const itemHolder = document.querySelector("#item-holder");
function renderItems(items) {
  const sortedItems = [...items].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );
  itemHolder.innerHTML = "";
  for (i of sortedItems) {
    const card = document.createElement("a");
    card.href = `../product-details.html?category=${encodeURIComponent(
      category
    )}&sub-category=${encodeURIComponent(subCategory)}&id=${i.id}`;
    card.className = "item-card";
    card.innerHTML = `
        <img src="../${i.img}" alt="${i.name} rental in Orillia">
        <h2>${i.name}</h2>
        `;
    itemHolder.appendChild(card);
  }
}

const searchBar = document.querySelector("#search");

searchBar.addEventListener("input", (event) => {
  const term = event.target.value.toLowerCase().replace(/\s/g, "").trim();
  const filtered = subCategoryItems.filter((p) =>
    p.name.toLowerCase().replace(/\s/g, "").includes(term)
  );
  renderItems(filtered);
});


document.querySelector(".products-header").style.backgroundImage = "url(../imgs/stand-on-skid-auger.jpeg)";

