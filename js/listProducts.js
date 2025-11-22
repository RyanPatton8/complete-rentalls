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
    
    for(p of results){
        if (p.subCategory !== currentSubCategory) {
            currentSubCategory = p.subCategory;
            main.innerHTML += `<h3>${currentSubCategory}</h3>`;
        }
        main.innerHTML += `
            <a href="./product-details.html?id=${p.id}">${p.name}</a>
        `;
    }
}
getItemsIncategory(category);