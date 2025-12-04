const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
function getItemsIncategory(category) {
    let items = products.filter(p => p.category === category);
    const sorted = items.sort((a, b) => {
        // First sort by category
        const catCompare = a.subCategory.localeCompare(b.subCategory);
        if (catCompare !== 0) return catCompare;
    });
    displayResults(sorted);
}
function displayResults(results){
    console.log(results);
    let currentSubCategory = null;
    let main = document.querySelector("#products-showcase");
    document.querySelector(".category-title").textContent = category === "Equipment" ? "Equipment" : "Event Items";
    let itemsString = `<div id="item-holder">`;
    for(p of results){
        if (p.subCategory !== currentSubCategory) {
            currentSubCategory = p.subCategory;
            itemsString += `
                <a href="./products.html?sub-category=${currentSubCategory}" class="item-card">
                    <img src="${p.img}">
                    <p>${p.subCategory}</p>
                </a>
                `
            ;
        }
    }
    itemsString += "</div>";
    main.innerHTML += itemsString;
}
getItemsIncategory(category);