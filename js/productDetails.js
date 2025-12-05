const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const subCategory = urlParams.get("sub-category");
const productID = urlParams.get("id");
function getItemById(id){
    const categoryItems = products[category];
    const subCategoryItems = categoryItems[subCategory];
    let product = subCategoryItems.filter(p => p.id === id)[0];
    displayResults(product);
}

function displayResults(product){
    let main = document.querySelector("#product-details");
    main.innerHTML += `
        ${product.name}
    `
    for (const price of product.prices) {
        main.innerHTML += `
        <p>${price.label}: $${price.amount}</p>
        `;
    }
}
getItemById(productID);