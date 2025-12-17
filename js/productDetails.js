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
    let displayString = "";
    displayString += `<div class="product-information">`;
    displayString += `<div class="name-and-model">`
    displayString += `<a href="./products.html?category=${encodeURIComponent(category)}&sub-category=${encodeURIComponent(subCategory)}">&lsaquo; Back</a>`
    displayString += `<h1>${product.name}</h1>`
    if(product.model){
        displayString += `<h2>${product.model}</h2>`;
    }
    displayString += "</div>";
    displayString += `<div class="product-details-middle">`;
    
    if(product.prices){
        displayString += `<div class="price-holder">`;
        for (const price of product.prices) {
            displayString += `
            <div class="price"><strong>${price.label}:</strong> <p>$${price.amount}</p></div>
            `;
        }
        displayString += "</div>";
    }
    displayString += `<div class="name-and-model-mobile">`
    displayString += `<h1>${product.name}</h1>`
    if(product.model){
        displayString += `<h2>${product.model}</h2>`;
    }
    displayString += "</div>";
    
    if(product.img){
        displayString += `<img src="${product.img}"></img>`
    }
    displayString += `<a href="./products.html?category=${encodeURIComponent(category)}&sub-category=${encodeURIComponent(subCategory)}" class="mobile-back">&lsaquo; Back</a>`
    displayString += `</div>`;
    if (product.desc){
        displayString += `
        <div class="description-holder">
            <h3 id="more-info">Additional Information</h3>
            <p>${product.desc}</p>
        </div>
        `
    }
    main.innerHTML += displayString;
}
getItemById(productID);

document.querySelector(".products-header").style.backgroundImage = "url(./imgs/store-front.jpg)";
