const urlParams = new URLSearchParams(window.location.search);
const productID = urlParams.get("id");
function getItemById(id){
    let product = products.filter(p => p.id === id)[0];
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