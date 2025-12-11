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
    if(product.img){
        displayString += `<img src="${product.img}"></img>`
    }
    // <div>
    displayString += `<h1>${product.name}</h1>`;
    if(product.model){
        displayString += `<h2>${product.model}</h2>`;
    }
    if(product.prices){
        displayString += `<div class="price-holder">`;
        for (const price of product.prices) {
            displayString += `
                <p class="price"><strong>${price.label}:</strong> $${price.amount}</p>
            `;
        }
        displayString += "</div>";
    }
    displayString += `</div>`;
    if (product.desc){
        displayString += `
            <h3 id="more-info">Additional Information</h3>
            <p>${product.desc}</p>
        `
    }
    main.innerHTML = displayString;
}
getItemById(productID);