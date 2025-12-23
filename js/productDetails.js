function setSEO({ title, description, canonical }) {
  document.title = title;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;

  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement("link");
    linkCanonical.rel = "canonical";
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.href = canonical;
}

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const subCategory = urlParams.get("sub-category");
const productID = urlParams.get("id");
function getItemById(id){
    const categoryItems = products[category];
    const subCategoryItems = categoryItems[subCategory];
    let product = subCategoryItems.filter(p => p.id === id)[0];
    displayResults(product);
    const baseUrl = "https://YOUR-DOMAIN-HERE";
    setSEO({
        title: `${product.name} Rental in Orillia | Complete Rent-Alls`,
        description: `Rent the ${product.name.toLowerCase()} in Orillia, Ontario. Daily, weekend, and weekly rental options available at Complete Rent-Alls.`,
        canonical: `${baseUrl}/product-details.html?category=${encodeURIComponent(category)}&sub-category=${encodeURIComponent(subCategory)}&id=${product.id}`
    });
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
            <div class="price">
                <span class="price-label">${price.label}:</span>
                <span class="price-value">$${price.amount}</span>
            </div>
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
        displayString += `<img src="${product.img}" alt="${product.name} rental in Orillia">`
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

